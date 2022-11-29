<style>
.page#p1{ text-align:center; counter-increment: none; }
.page#p1:after{ display:none; }
.page:nth-child(2n) .pageNumber { left: inherit !important; right: 2px !important; }
.page:nth-child(2n+1) .pageNumber { right: inherit !important; left: 2px !important; }
.page:nth-child(2n)::after { transform: scaleX(1); }
.page:nth-child(2n+1)::after { transform: scaleX(-1); }
.page:nth-child(2n) .footnote { left: inherit; text-align: right; }
.page:nth-child(2n+1) .footnote { left: 80px; text-align: left; }
</style>

{{margin-top:225px}}

# Dungeons & Markdown

{{margin-top:25px}}

{{wide
##### Generate D&D style documents from Markdown
###### A VS Code extension based on Homebrewery
}}
\page

# Dungeons & Markdown
Generate beautiful D&D style documents with Markdown.
:
Based on [Homebrewery](https://homebrewery.naturalcrit.com/) V3, regular Markdown syntax is supported, but also extended with a range of useful options.
For convenience, most of this extended syntax is provided as 32 example snippets bundled with this extension.

Below are descriptions of these snippets and examples of what they can generate.
:
Source markdown for this document is available [here](https://raw.githubusercontent.com/Spjak/DungeonsAndMarkdown/main/docs/index.md)

### Using snippets
When editing a Markdown document, press `CTRL+Space` or the assigned auto-complete hotkeys for a list of options. All Dungeons & Markdown snippets are prefixed with *dnm-*, e.g. `dnm-class-table`.

The snippets roughly match the options presented in the [Homebrewery](https://homebrewery.naturalcrit.com/) web editor, but will generate the same output whenever used, whereas the web editor has a range of random content for each element.
### Images
All images can be modfied to change size, location and opacity, using css-style properties.
##### Snippets
| Command | Effect |
|:------------------|:-----:|
| dnm-image             | Add an image |
| dnm-background-image  | Add a background image |
| dnm-watermark         | Add a watermark text |
| dnm-waterstain        | Add a water stain or splatter |

#### dnm-image
Images are added in-line and can be decorated with caption and artist credits
![cat warrior](https://s-media-cache-ak0.pinimg.com/736x/4a/81/79/4a8179462cfdf39054a418efd4cb743e.jpg) {width:325px,mix-blend-mode:multiply}
{{artist,position:relative,top:-230px,left:10px,margin-bottom:-30px
##### Cat Warrior
[Kyoung Hwan Kim](https://www.artstation.com/tahra)
}}
#### dnm-background-image
Background images will allow content on top. Make sure to consider text and image location to ensure readablility.
![homebrew mug](http://i.imgur.com/hMna6G0.png) {position:absolute,top:70px,right:100px,width:180px} 
:::::::::
#### dnm-watermark
Watermark text will be calpitalized and positioned diagonally across the whole page. Avoid words with more than roughly 10 letters to avoid multiple lines of text.
{{watermark WATERMARK}}
:::::::::::::

#### dnm-waterstain
Add a waterstain or splotch as a background image. Shapes are predefined but can be resized as any other image.

There are 12 shapes available, named `watercolorX` where X is between 1 and 12.
{{watercolor2,top:380px,left:400px,width:300px,background-color:#BBAD82,opacity:70%}}

{{pageNumber 1}}
{{footnote Snippets | Images}}
\page

{{wide
### Player's Handbook Elements
These elements mimic the look and feel of the Player's Handbook
##### Snippets
| Command | Effect |
|:--------|:------:|
| dnm-note | Add a framed text box |
| dnm-descriptive-text | Add a highlighted text box |
| dnm-cover-page  | Add a front cover page |
| dnm-magic-item | Add a item details block |
| dnm-spell | Add a spell details block |
| dnm-spell-list | Add a list of spells |
| dnm-class-features | Add a list of class features |
| dnm-monster-stat-block | Add a monster details block |
| dnm-monster-stat-block-framed | Add a framed monster details block |
| dnm-monster-stat-block-wide | Add a page-wide monster details block |
}}
#### Examples
Coming soon..
{{pageNumber,auto}}
{{footnote Snippets | Player's Handbook Elements}}
\page

{{wide 
### Tables
Additional D&D style tables are available, beyond generic Markdown tables syntax
##### Snippets
| Command | Effect |
|:--------|:------:|
| dnm-table | Add a default styled table |
| dnm-table-wide | Add a default styled wide table |
| dnm-table-split | Add a table split into 2 or more columns |
| dnm-table-class | Add a class details table |
| dnm-table-class-framed | Add a framed class details table |
| dnm-table-class-half | Add a half sized class details table |
| dnm-table-class-half-framed | Add a framed half size class details table |
}}
#### Examples
Coming soon..
{{pageNumber,auto}}
{{footnote Snippets | Tables}}
\page

{{wide 
### Text Edit Elements
These snippets make it possible to lay out the pages easier than with generic Markdown
##### Snippets
| Command | Effect |
|:--------|:------:|
| dnm-column | Add a column break |
| dnm-page | Add a page break |
| dnm-spacing-vertical | Add vertical spacing |
| dnm-spacing-horizontal | Add horizontal spacing |
| dnm-text-wide | Add text and content box in full page width |
| dnm-page-number | Add specific page number and footnote |
| dnm-page-auto | Add auto-increment page number and footnote |
| dnm-page-link | Add link to specific page number |
| dnm-qr | Add QR code |
| dnm-toc | Add Table of Contents (not auto-generated) |
}}
#### Examples
Coming soon..
{{pageNumber,auto}}
{{footnote Snippets | Text Edit Elements}}