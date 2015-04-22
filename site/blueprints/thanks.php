<?php if(!defined('KIRBY')) exit ?>

title: Thanks
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
    default: Thanks
    
  section1Title:
    type: text
    placeholder: Title of the section
    
  section1Subtitle:
    type: text
    placeholder: Subtitle of the section
    
  section1Txt:
    type: textarea
    placeholder: Text content of the section