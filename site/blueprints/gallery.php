<?php if(!defined('KIRBY')) exit ?>

title: Gallery
pages: false

fields:
  off-css:
    type: info
    text: >
      <style>
        @media screen and (min-width: 60em){.field-with-line { margin: 0.5em 0 2.5em; }}
        .structure-entry {width:33%;display:inline-block;vertical-align:top}
        .modal-content .field-grid-item { margin-bottom:5px; }
      </style>

  title:
    label: Page name
    type:  text
    placeholder: Pricing
    default: Pricing

  ogDescription:
    label: description of the page
    type:  textarea

  ogImage:
    label: Page thumbnail
    type:  text

  line-a:
    type:line

  section1Info:
    type: info
    text: >
      **Section : About us**

      **Content** : Three pricing packs.

  section1Title:
    type: text
    placeholder: Title of the section
    default: About us

  section1Subtitle:
    type: text
    placeholder: Subtitle of the section
    default: Everything you need to know about the Prototypo team

  section1Txt:
    type: textarea
    placeholder: Text content of the section


  fonts:
    label: Fonts to display
    type: structure
    entry: >
      <strong>{{fontname}}</strong><br/>
      {{fontdescription}}
    fields:
      fontfile:
        type: select
        label: Font file
        options: files
      fontname:
        type: text
        label: Font name
        placeholder: Font name
      fontdescription:
        type: textarea
        label: Font description
        placeholder: Font description
      fontstring:
        type: text
        label: Characters to show
        placeholder: Characters to show
        default: Az
      fontnumbervariants:
        type: number
        placeholder: Number of variants
        default: 1
      fontsize:
        type: number
        placeholder: Font size
        default: 100px
      fontlineheight:
        type: number
        placeholder: Line height
        default: 120px

  downloadButtonLabel:
    type: text
    label: Download button label
    placeholder: eg. Download this font
    default: Download this font


  section1TxtAfter:
    type: textarea
    placeholder: Text content after the members list
