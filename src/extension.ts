import * as vscode from 'vscode'
import * as Markdown from 'homebrewery' 
import * as fs from 'fs'

const TEMPLATE_HTML = `
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
        <link href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700" rel="stylesheet" type="text/css" />
        <link href='https://assets.dungeonsandmarkdown.spjak.com/bundle.css' rel='stylesheet' />
        <base target="_blank">
    </head>
    <body>
        <div>
            <div class="frame-content">
                <div class="brewRenderer">
                    <link href="https://assets.dungeonsandmarkdown.spjak.com/themes/V3/Blank/style.css" rel="stylesheet">
                    <link href="https://assets.dungeonsandmarkdown.spjak.com/themes/V3/5ePHB/style.css" rel="stylesheet">
                    <style>
                    .page p {
                        color: black
                    }
                    .page li {
                        color: black
                    }
                    .page table {
                        color: black
                    }
                    .page h5 {
                        color: black
                    }
                    .page h6 {
                        color: black
                    }
                    .page dl {
                        color: black
                    }
                    .page .monster hr:last-of-type~:is(dl,p) {
                        color: black
                    }
                    .page #example + table td {
                        border:1px dashed #00000030;
                    }
                    .page {
                        padding-bottom : 1.1cm
                    }
                    .page .watermark {
                        z-index: -500
                    }
                    </style>
                    {{ custom_styles }}
                    <div class="pages">
                        {{ body }}
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>`

function addCustomStyles(ctx?: vscode.ExtensionContext, panel?: vscode.WebviewPanel) {
    let styleElements = ""
    let conf = vscode.workspace.getConfiguration()
    const styleFiles = conf.get("dnm.customStyleSheets") ? conf.get("dnm.customStyleSheets") as [] : []
    for (let file of styleFiles) {
        // File path is a web url e.g. https://example.com/custom.css. Works in preview and generate html
        if (isWebUrl(file)) {
            styleElements += `<link href='${file}' rel='stylesheet' />\n`
        }
        // File path is local
        else {
            let wsPath = vscode.workspace.workspaceFolders ? vscode.workspace.workspaceFolders[0].uri : vscode.Uri.parse("")
            let fullPath = vscode.Uri.joinPath(wsPath, file)
            // Rewrite file path for preview
            if (ctx && panel) {
                styleElements += `<link href='${panel.webview.asWebviewUri(fullPath)}' rel='stylesheet' />\n`
            }
            // Rewrite file path for generate html
            else {
                styleElements += `<link href='${fullPath}' rel='stylesheet' />\n`
            }
        }        
    }
    return TEMPLATE_HTML.replace('{{ custom_styles }}', styleElements)
}

function isWebUrl(url: string) {
    let res: URL
    try {
        res = new URL(url)
    }
    catch {
        return false
    }
    return res.protocol === "http:" || res.protocol === "https:"
}

function renderPage(pageText: string, index: number) {
	pageText += `\n\n&nbsp;\n\\column\n&nbsp;`
	let body = `
		<div class="page" id="p${index + 1}" key="${index}" >
			<div class="columnWrapper">${Markdown.render(pageText)}</div>
		</div>`
	return body
}

function generateHTML(text: string) {
	let pages = text.split(/^\\page$/gm)
	let outputHtml = ""
	for (let i = 0; i < pages.length; i++) {
		outputHtml += renderPage(pages[i], i)
	}
	return outputHtml
}

function generateFile(){
	let editor = vscode.window.activeTextEditor
	let doc = editor?.document
	if(!editor || doc?.languageId !== 'markdown') {
        vscode.window.showErrorMessage('Not a valid Markdown file');
        return;
    }

    else if(doc.isUntitled) {
        vscode.window.showErrorMessage('Please save the file first');
        return;
    }

    if(doc.isDirty) {
        doc.save();
    }

	let outPath = doc.fileName.replace(/\.\w+?$/, `.html`);
    outPath = outPath.replace(/^([cdefghij]):\\/, (match, p1) => {
        return `${p1.toUpperCase()}:\\`; // Capitalize drive letter
    });
    if(!outPath.endsWith('.html')) {
        outPath += '.html';
    }

	let text = editor?.document.getText()
	let res = text? generateHTML(text) : null
    let html = addCustomStyles()

	res? fs.writeFileSync(outPath, html.replace('{{ body }}', res), 'utf8') : null
}

function redraw(panel: vscode.WebviewPanel, html: string) {
    setTimeout(() => {  
        let editor = vscode.window.activeTextEditor
        if (editor?.document.languageId !== 'markdown') {
            redraw(panel, html)
        }
        else {
            let text = editor?.document.getText()
            let res = text? generateHTML(text) : null
            if (panel) {
                res? panel.webview.html = html.replace('{{ body }}', res) : null
            }
            redraw(panel, html)
        }
    }, 1000)
}

export function activate(context: vscode.ExtensionContext) {
    let currentPanel: vscode.WebviewPanel | undefined = undefined;
	let generateCommand = vscode.commands.registerCommand('dungeonsandmarkdown.generate', generateFile)
	context.subscriptions.push(generateCommand)
    let html: string

    let previewCommand = vscode.commands.registerCommand('dungeonsandmarkdown.preview', () => {
        let editor = vscode.window.activeTextEditor
        let text = editor?.document.getText()
        let res = text? generateHTML(text) : null
        
        const columnToShowIn = vscode.window.activeTextEditor ? vscode.window.activeTextEditor.viewColumn : undefined
        if (currentPanel) {
            // If we already have a panel, show it in the target column
            currentPanel.reveal()
            } 
        else {
            // Otherwise, create a new panel
            currentPanel = vscode.window.createWebviewPanel(
                'preview',
                'D&M: Preview',
                columnToShowIn || vscode.ViewColumn.One,
                {}
            )
            html = addCustomStyles(context, currentPanel)
            res? currentPanel.webview.html = html.replace('{{ body }}', res) : null
    
            // Reset when the current panel is closed
            currentPanel.onDidDispose(
                () => {
                currentPanel = undefined
                },
                null,
                context.subscriptions
            )
        }
        redraw(currentPanel, html)
    })

    context.subscriptions.push(previewCommand)
}

export function deactivate() {}
