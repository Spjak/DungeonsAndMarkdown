import * as vscode from 'vscode'
import * as Markdown from 'homebrewery' 
import * as fs from 'fs'

const TEMPLATE_HTML = `
<!DOCTYPE html>
<html>
    <head>
        <link href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700" rel="stylesheet" type="text/css" />
        <link href='https://homebrewery.naturalcrit.com/homebrew/bundle.css' rel='stylesheet' />
        <base target="_blank">
    </head>
    <body>
        <div>
            <div class="frame-content">
                <div class="brewRenderer">
                    <link href="https://homebrewery.naturalcrit.com/themes/V3/Blank/style.css" rel="stylesheet">
                    <link href="https://homebrewery.naturalcrit.com/themes/V3/5ePHB/style.css" rel="stylesheet">
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
                    .page dl {
                        color: black
                    }
                    </style>
                    <div class="pages">
                        {{ body }}
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>`

function renderPage(pageText: string, index: number){
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

	res? fs.writeFileSync(outPath, TEMPLATE_HTML.replace('{{ body }}', res), 'utf8') : null
}

function previewFile() {
    let editor = vscode.window.activeTextEditor
    let doc = editor?.document
    let text = editor?.document.getText()
	let res = text? generateHTML(text) : null
    const panel = vscode.window.createWebviewPanel(
        'preview',
        `${doc?.fileName} - preview`,
        vscode.ViewColumn.One,
        {}
    )
    res? panel.webview.html = TEMPLATE_HTML.replace('{{ body }}', res) : null
    
}

export function activate(context: vscode.ExtensionContext) {

	let generateCommand = vscode.commands.registerCommand('dungeonsandmarkdown.generate', generateFile)
	context.subscriptions.push(generateCommand)
    let previewCommand = vscode.commands.registerCommand('dungeonsandmarkdown.preview', previewFile)
    context.subscriptions.push(previewCommand)
}

export function deactivate() {}
