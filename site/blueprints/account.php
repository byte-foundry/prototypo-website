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
    placeholder: Account
    default: Account

  ogDescription:
    label: description of the page
    type:  textarea

  ogImage:
    label: Page thumbnail
    type:  text

  text0:
    label: Note à propos de la TVA
    type:  textarea

  aboutlaunchdate:
    label: Note à propos de l'offre launch
    type:  textarea

  switchplans:
    label: Note à propos du changement de plan
    type:  textarea

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
        label: Pack price (annual) TTC
        placeholder: Price/mo (annual)
      packpricelaunch:
        type: text
        label: Pack price launch TTC
        placeholder: Price/mo (monthly)
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
