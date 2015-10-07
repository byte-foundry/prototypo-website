<?php if(!defined('KIRBY')) exit ?>

title: FAQ
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
    default: FAQ

  section1Title:
    type: text
    placeholder: Title of the section
    default: Frequently Asked Questions

  section1Subtitle:
    type: text
    placeholder: Subtitle of the section

  section1Txt:
    type: textarea
    placeholder: Text content of the section

  section1TxtAfter:
    type: textarea
    placeholder: Text content after the main content
