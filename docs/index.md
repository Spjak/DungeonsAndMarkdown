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

Based on Homebrewery V3, regular Markdown syntax is supported, but also extended with a range of useful options.
For convenience, most of this extended syntax is provided as 32 snippets bundled with this extension.

Below are descriptions of these snippets and examples of what they can generate.

### Using snippets
When editing a Markdown document, press `CTRL+Space` or the assigned auto-complete hotkeys for a list of options. All Dungeons & Markdown snippets are prefixed with *dnm-*, e.g. `dnm-class-table`.

The snippets roughly match the options presented in the [Homebrewery](https://homebrewery.naturalcrit.com/) web editor, but will generate the same output whenever used, whereas the web editor has a range of random content for each element.
### Images
All images can be modfied to change size, location and opacity, using css-style properties.
##### Snippets
| Command | Effect |
|:------------------|:-----:|
| dnm-image             | Insert image |
| dnm-background-image  | Insert background image     |
| dnm-watermark         | Add watermark text |
| dnm-waterstain        | Add water stain or splatter |

#### dnm-image
Images are added in-line and can be decorated with caption and artist credits
![cat warrior](https://s-media-cache-ak0.pinimg.com/736x/4a/81/79/4a8179462cfdf39054a418efd4cb743e.jpg) {width:325px,mix-blend-mode:multiply}
{{artist,position:relative,top:-230px,left:10px,margin-bottom:-30px
##### Cat Warrior
[Kyoung Hwan Kim](https://www.artstation.com/tahra)
}}
\column
#### dnm-background-image
Background images will allow content on top. Make sure to consider text and image location to ensure readablility.
![homebrew mug](http://i.imgur.com/hMna6G0.png) {position:absolute,top:70px,right:100px,width:180px} 
:::::::::::
#### dnm-watermark
Watermark text will be calpitalized and positioned diagonally across the whole page. Avoid words with more than roughly 10 letters to avoid multiple lines of text.
{{watermark WATERMARK}}
:::::::::::::::::::
#### dnm-waterstain
Add a waterstain or splotch as a background image. Shapes are predefined but can be resized as any other image.

There are 12 shapes available, named `watercolorX` where X is between 1 and 12.
{{watercolor2,top:380px,left:400px,width:300px,background-color:#BBAD82,opacity:70%}}

{{pageNumber 1}}
{{footnote Snippets | Images}}