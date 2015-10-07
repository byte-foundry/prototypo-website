<?php if(!defined('KIRBY')) exit ?>

title: Error
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
    placeholder: Page name
    default: We're sorry but…

    
    
    
  line-a:
    type:line
    
  section1Info:
    type: info
    text: >
      **Section : Page not found**
    
  errorImage:
    type:select
    label: Error illustration
    options: files  
    
  section1Title:
    type: textarea
    placeholder: Title of the section
    default: « I'm sorry Dave, I'm afraid I can't do that. »
    
  section1Subtitle:
    type: text
    placeholder: Subtitle of the section
    default: The page you're looking for can not be found…
    
  section1Txt:
    type: textarea
    placeholder: Text content of the section