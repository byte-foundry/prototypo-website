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
    
    
  packs:
    label: Pricing packs
    type: structure
    entry: >
      <strong>{{packname}}</strong><br/>
      {{packdescription}}
    fields:
      fontfile:
        type: select
        label: Font file
        options: files
      fontname:
        type: text
        label: Font name
        placeholder: Font name
      fontdescription:
        type: textarea
        label: Font description
        placeholder: Font description
      fontstring:
        type: text
        label: Characters to show
        placeholder: Characters to show
        default: Az
        
  downloadButtonLabel:
    type: text
    label: Download button label
    placeholder: eg. Download this font
    default: Download this font
    
    
      
    
    
  line-c:
    type: line
    
  section2Info:
    type: info
    text: >
      **Section : A bunch of great features**
      
      **Content** : A grid of some features with a figure, a title and a description for each.
    
  section2Title:
    type: text
    placeholder: Title of the section
    default: A parametric type design tool
    
  section2Subtitle:
    type: text
    placeholder: Subtitle of the section
    default: Sketch ideas, export fonts
    
  features:
    label: Features
    type: structure
    entry: >
      <strong>{{featurename}}</strong><br/>
      {{featuredescription}}
    fields:
      featureimg:
        type: select
        label: Feature illustration
        options: files
      featurename:
        type: text
        label: Feature name
        options: files
      featuredescription:
        type: textarea
        label: Feature description
      
    
    
    
  line-d:
    type: line
    
  section3Info:
    type: info
    text: >
      **Section : Want to be the first to know the next features?**
      
      **Content** : A form (two inputs, one submit)
    
  section3Title:
    type: text
    placeholder: Title of the section
    default: Want to be the first to know the next features?
    
  section3Subtitle:
    type: text
    placeholder: Subtitle of the section
    default: Subscribe to our newsletter
    
  newsletterNamePlaceholder:
    type: text
    placeholder: Newsletter name placeholder
    default: Your name
    width: 1/4
    
  newsletterMailPlaceholder:
    type: text
    placeholder: Newsletter mail placeholder
    default: Your mail
    width: 1/4
    
  newsletterSubmitLabel:
    type: text
    placeholder: Newsletter submit label
    default: Keep me tuned
    width: 2/4
    