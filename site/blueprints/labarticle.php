<?php if(!defined('KIRBY')) exit ?>

title: Lab article
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

  ogImage:
    label: Page thumbnail
    type:  select
    options: files

  link:
    type: text
    placeholder: Absolute link of the article

  tags:
    label: Tags
    type: tags

  contentarticle:
    type: textarea
    placeholder: Content of the article
