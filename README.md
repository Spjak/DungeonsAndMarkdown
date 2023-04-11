# Dungeons & Markdown

Generate D&D style documents from Markdown

![image](https://assets.dungeonsandmarkdown.spjak.com/dnm.gif)

This is a VSCode extension implementation of the online editor at [homebrewery](https://homebrewery.naturalcrit.com/)

Supports the full list of the extended Markdown syntax elements in Homebrewery Version 3.

Inspired by [homebrewery-vcsode](https://marketplace.visualstudio.com/items?itemName=officerhalf.homebrewery-vscode) which does not support the new elements and is no longer updated.

---
## Features

Write structured documents in (extended) Markdown and generate beautiful pages in the style of the Dungeons & Dragons books and resources.

Provides live preview while editing as well as export to plain HTML for PDF printing.

### **Commands**

`Dungeons & Markdown: Preview` opens a live preview window.

`Dungeons & Markdown: Generate HTML` generates a plain HTML file with the same name as the currently open Markdown file. 
This can be opened in a browser for printing to PDF or exported to other formats.

### **Snippets**

More than 30 snippets are included, providing easy access to the extended Markdown syntax implemented by Homebrewery V3.

The snippets can be accessed with `CTRL+Space` (or any custom auto-complete hotkeys) when editing Markdown documents.
All snippets are prefixed with `dnm-`, e.g. `dnm-class-table`

Details on the full list of snippets and examples of their effects, can be found on the Dungeons & Markdown [homepage](https://dungeonsandmarkdown.spjak.com)

#### **Syntax highlighting**

Some of the custom Markdown syntax will be highlighted, although not to the same extent as on the Homebrewery website, to avoid interfering with regular Markdown syntax highlighting.

![image](https://assets.dungeonsandmarkdown.spjak.com/syntax.png)

### **Custom styling**

Customize styling of all pages in a workspace by applying custom stylesheet(s).

In _Settings -> Dungeons & Markdown -> Custom Style Sheets_ provide paths to one or more custom stylesheets that will be included in preview and html generation across all files in the workspace.

Paths can be a fully qualified url, e.g. `https://example.com/custom.css` or local file paths relative to the root of the workspace, e.g. `styles\custom.css`

It is recommended to only set this configuration on Workspace level - not User level. If local paths are used, this _will_ cause permission issues on User level.

---
## Known issues
* Images and external links may not render properly in the preview, due to sandbox limitations.
* When using custom styling, certain elements may require more specific override than on the Homebrewery site, specifically font color for 
    * p
    * li
    * table
    * h5, h6
    * dl

---
## Release Notes
### 1.2.0

- Added limited syntax highlighting for custom Homebrewery elements
- Fixed issue with apostropes and special characters
### 1.1.0

- Added setting for global/workspace custom styling
- Updated packages
### 1.0.0

- Added more than 30 snippets for extended Markdown syntax elements
- Added documentation and link to home page
- Bug fixes
### 0.1.0

- Preview window now live updates as markdown file is edited
- Fixed font and styling issues, sometimes causing incorrect rendering

### 0.0.1

- Initial release