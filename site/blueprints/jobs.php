<?php if(!defined('KIRBY')) exit ?>

title: Jobs
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
    label: Page title
    type:  text
    placeholder: Jobs

  ogDescription:
    label: description of the page
    type:  textarea

  ogImage:
    label: Page thumbnail
    type:  select
    options: files

  header:
    type: textarea
    placeholder: Page header

  offer1:
    type: textarea
    placeholder: Offer 1 content

  offer2:
    type: textarea
    placeholder: Offer 2 content

  offer3:
    type: textarea
    placeholder: Offer 3 content

  offer4:
    type: textarea
    placeholder: Offer 4 content

  offer5:
    type: textarea
    placeholder: Offer 5 content
