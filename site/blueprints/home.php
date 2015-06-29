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
    label: Website name
    type:  text
    width: 1/4
    placeholder: Prototypo
    default: Prototypo
    
  getStartedTagline:
    label: Tagline of the website
    type:  text
    width: 2/4
    placeholder: eg. Streamlining font creation
    default: Streamlining font creation
    
  getStartedButtonLabel:
    label: Label of the button
    type:  text
    width: 1/4
    placeholder: eg. Get started
    default: Get started
    
    
    
  line-a:
    type:line
    
  infoInfobox:
    label: Infobox on the home demo
    type: info
    text: >
      The first infobox content (on the left) is linked to the cursors,
      and the second infobox content (on the right) is linked to the live render.
    width: 2/4
    
  infobox1:
    label: Infobox n°1 content
    type:  textarea
    width:  1/4
    
  infobox2:
    label: Infobox n°2 content
    type:  textarea
    width:  1/4
    
  textLineUnderDemo:
    type:  text
    placeholder: One text line under the home demo (eg. Discover all Prototypo features)
    default: Discover all Prototypo features
    
    
    
  line-b:
    type: line
    
  section1Info:
    type: info
    text: >
      **Section : A parametric type design tool**
      
      **Content** : A text, and three columns with the font view, its name, description and download button.
    
  section1Title:
    type: text
    placeholder: Title of the section
    default: A parametric type design tool
    
  section1Subtitle:
    type: text
    placeholder: Subtitle of the section
    default: Sketch ideas, export fonts
    
  section1Txt:
    type: textarea
    placeholder: Text content of the section
    
    
  fonts:
    label: Fonts to display
    type: structure
    entry: >
      <strong>{{fontname}}</strong><br/>
      {{fontdescription}}
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
      fontsize:
        type: number
        placeholder: Font size
        default: 100px
      fontlineheight:
        type: number
        placeholder: Line height
        default: 120px
        
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
      
    
  line-e:
    type: line
    
  section4Info:
    type: info
    text: >
      **Section : They talk about us**
      
      **Content** : A list of media
    
  section4Title:
    type: text
    placeholder: Title of the section
    default: They talk about us
    
  section4Subtitle:
    type: text
    placeholder: Subtitle of the section
    default: 
    
    
  theytalkaboutus:
    label: They talk about us
    type: structure
    entry: >
      <strong>{{ttauname}}</strong><br/>
      {{ttauurl}}
    fields:
      ttauimg:
        type: select
        label: Logo file
        options: files
      ttauname:
        type: text
        label: Organization name
        placeholder: Organization name
      ttauurl:
        type: text
        label: Link to
        placeholder: http://
    
    
    
    
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
    