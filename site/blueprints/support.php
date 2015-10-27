<?php if(!defined('KIRBY')) exit ?>

title: Home
pages: false

fields:

  title:
    label: Page name
    type:  text
    placeholder: Support
    default: Support

  ogDescription:
    label: description of the page
    type:  textarea

  ogImage:
    label: Page thumbnail
    type:  text

  text:
    type: textarea
    placeholder: Text content of the section
