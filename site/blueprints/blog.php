<?php if(!defined('KIRBY')) exit ?>

title: Blog
pages: true

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
    placeholder: Page name
    default: Blog

  ogDescription:
    label: description of the page
    type:  textarea

  ogImage:
    label: Page thumbnail
    type:  text

  section1Title:
    type: text
    placeholder: Title of the section
    default: « I'm sorry Dave, I'm afraid I can't do that. »

  section1Subtitle:
    type: text
    placeholder: Subtitle of the section
    default: The page you're looking for can not be found…

  section1Txt:
    type: textarea
    placeholder: Text content of the section

  ctaText:
    label: CTA text at bottom of each article
    type: text
    placeholder: Want to prototype your first project?
    default: Want to prototype your first project?

  ctaBtn:
    label: CTA button at bottom of each article
    type: text
    placeholder: Try Prototypo!
    default: Try Prototypo!
