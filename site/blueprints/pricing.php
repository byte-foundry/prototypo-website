<?php if(!defined('KIRBY')) exit ?>

title: Home
pages: true

fields:
  off-css:
    type: info
    text: >
      <style>
        @media screen and (min-width: 60em){.field-with-line { margin: 0.5em 0 2.5em; }}
        .structure-entry {width:33%;display:inline-block;vertical-align:top}
      </style>

  title:
    label: Page name
    type:  text
    placeholder: Pricing
    default: Pricing




  line-a:
    type:line

  section0Info:
    type: info
    text: >
      **Section : Get access to Prototypo**

      **Content** : Access to freemium.

  section0Title:
    type: text
    placeholder: Title of the section
    default: Get access to Prototypo

  section0Subtitle:
    type: text
    placeholder: Subtitle of the section
    default: Try prototypo for free with the freemium version

  section0Txt:
    type: textarea
    placeholder: Text content of the section

  freemiumImg:
    type: select
    label: Image of freemium version
    options: files

  freemiumToS:
    type: textarea
    label: Terms of Service

  freemiumSubmit:
    type: text
    label: Try Prototypo button label



  section1Info:
    type: info
    text: >
      **Section : Your Prototypo is here**

      **Content** : Three pricing packs.

  section1Title:
    type: text
    placeholder: Title of the section
    default: Your Prototypo is here

  section1Subtitle:
    type: text
    placeholder: Subtitle of the section
    default: 3 packs that fit your needs

  packs:
    label: Pricing packs
    type: structure
    entry: >
      <strong>{{packname}}</strong><br/>
      {{packprice}}<br/>
      {{packservices}}<br/>
      {{packdescription}}
    fields:
      packname:
        type: text
        label: Pack name
        placeholder: Pack name
      packpricettc:
        type: text
        label: Pack price (monthly) TTC
        placeholder: Price/mo (monthly)
      packprice2ttc:
        type: text
        label: Pack price (annually) TTC
        placeholder: Price/mo (annually)
      packservices:
        type: textarea
        label: Pack service
      packservices2:
        type: textarea
        label: Pack service (user)
      packstate:
        type:select
        options:
          available: Available
          notavailable: Not available yet
      packbuttonlabel:
        type: text
        label: Button label
        placeholder: "Get started now!" or "Available soon"



  section1TxtAfter:
    type: textarea
    placeholder: Text content after the pricing packs
