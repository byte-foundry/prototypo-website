<?php if(!defined('KIRBY')) exit ?>

title: Blog article
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
    label: Article name
    type:  text
    placeholder: Blog article name

  ogDescription:
    label: description of the page
    type:  textarea

  ogImage:
    label: Page thumbnail
    type:  select
    options: files

  tags:
    label: Tags
    type: tags
    width:1/2

  Date:
    label: Date
    type: date
    width:1/2

  subtitle:
    type: text
    placeholder: Subtitle of the article

  contentarticle:
    type: textarea
    placeholder: Content of the article
