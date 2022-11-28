# Dungeons & Markdown

Generate D&D style documents from Markdown

![image](https://assets.dungeonsandmarkdown.spjak.com/dnm.gif)

This is a VSCode extension implementation of the online editor at [homebrewery](https://homebrewery.naturalcrit.com/)

Supports the full list of the extended Markdown syntax elements in Homebrewery Version 3.

Inspired by [homebrewery-vcsode](https://marketplace.visualstudio.com/items?itemName=officerhalf.homebrewery-vscode) which does not support the new elements and is no longer updated.

## Features

Write structured documents in (extended) Markdown and generate beautiful pages in the style of the Dungeons & Dragons books and resources.

Provides live preview while editing as well as export to plain HTML for PDF printing.

### Commands

`Dungeons & Markdown: Preview` opens a live preview window.

`Dungeons & Markdown: Generate HTML` generates a plain HTML file with the same name as the currently open Markdown file. 
This can be opened in browser for printing to PDF or other export formats.

## Known issues
* Images and external links may not render properly in the preview, due to sandbox limitations.

## Release Notes

### 0.1.0

- Preview window now live updates as markdown file is edited
- Fixed font and styling issues, sometimes causing incorrect rendering

### 0.0.1

- Initial release