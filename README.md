# Dungeons & Markdown

Generate D&D style documents from Markdown

VSCode extension implementation of [homebrewery](https://homebrewery.naturalcrit.com/)

Supports the full list of the extended Markdown syntax elements in Homebrewery Version 3.

Inspired by [homebrewery-vcsode](https://marketplace.visualstudio.com/items?itemName=officerhalf.homebrewery-vscode) which does not support the new elements and is no longer updated.

## Features

Write structured documents in (extended) Markdown and generate beautiful pages in the style of the Dungeons & Dragons books and resources.

With a Markdown document open, select `D&M: Preview` to open a preview of the generated page(s). The preview does not auto-update on save, but requires the command to be re-run.

Use `D&M: Generate` to create a html page. Use a browser to print as PDF for exporting.

## Known issues
* Images and external links may not render properly in the preview, due to sandbox limitations.
* Preview page should live update, but this not possible with current implementation.

## Release Notes

### 0.0.1

Initial release