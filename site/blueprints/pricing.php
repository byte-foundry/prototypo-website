<?php if(!defined('KIRBY')) exit ?>

title: Home
pages: false

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
    
  section1Txt:
    type: textarea
    placeholder: Text content of the section
    
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
      packprice:
        type: text
        label: Pack price
        placeholder: eg. $20/month
      packservices:
        type: textarea
        label: Pack services (one per line)
      packdescription:
        type: textarea
        label: Font description
        placeholder: Font description
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
    