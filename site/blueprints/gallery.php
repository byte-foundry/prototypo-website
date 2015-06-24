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


  members:
    label: Members
    type: structure
    entry: >
      <strong>{{membername}}</strong><br/>
      {{memberdescription}}
    fields:
      membername:
        type: text
        placeholder: Member name
      memberdescription:
        type: textarea
        placeholder: Member description
      memberquery:
        type: text
        placeholder: Member favorite query
      memberfacebook:
        type: text
        placeholder: Member Facebook
      membergithub:
        type: text
        placeholder: Member Github
      membertwitter:
        type: text
        placeholder: Member Twitter
      memberwebsite:
        type: text
        placeholder: Member website
      membermail:
        type: text
        placeholder: Member mail
      membervimeo:
        type: text
        placeholder: Member Vimeo
      memberphoto:
        type:select
        options: files


  section1TxtAfter:
    type: textarea
    placeholder: Text content after the members list
