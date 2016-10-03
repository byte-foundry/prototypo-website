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
		type: text
		width: 1/4
		placeholder: Prototypo
		default: Prototypo

	ogDescription:
		label: description of the page
		type: textarea

	ogImage:
		label: Page thumbnail
		type: text

	getStartedTagline:
		label: Tagline of the website
		type: text
		width: 2/4
		placeholder: eg. Streamlining font creation
		default: Create your own font in 5 min

	getStartedButtonLabel:
		label: Label of the button
		type: text
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
		type: textarea
		width: 1/4

	infobox2:
		label: Infobox n°2 content
		type: textarea
		width: 1/4

	textLineUnderDemo:
		type: text
		placeholder: One text line under the home demo (eg. Discover all Prototypo features)
		default: Discover all Prototypo features

	line-b:
		type: line

	Title1:
		type: text
		placeholder: Title H2

	Content1:
		type: textarea
		placeholder: text

	line-b:
		type: line

	Title2:
		type: text
		placeholder: Title H2

	Content2:
		type: textarea
		placeholder: text

	steps:
		label: Steps
		type: structure
		entry: >
			{{title}}
		fields:
			title:
				type: text
				placeholder: Title H3
			Content:
				type: text
				placeholder: text
			cover:
				label: Cover Image
				type: select
				options: images

	CTA2:
		type: text
		placeholder: Text for the Call To Action

	line-b:
		type: line

	Title3:
		type: text
		placeholder: Title H2

	Testimonials:
		label: Testimonials
		type: structure
		entry: >
			{{name}}
		fields:
			Quote:
				type: text
				placeholder: The quote (h3)
			name:
				type: text
				placeholder: Who?
			Url:
				type: text
				placeholder: Url of the article
			logo:
				label: Cover Image
				type: select
				options: images

	Content3:
		type: textarea
		placeholder: text

	CTA3:
		type: text
		placeholder: Text for the Call To Action



	line-b:
		type: line

	Title4:
		type: text
		placeholder: Title H2

	features:
		label: Features
		type: structure
		entry: >
			<strong>{{featurename}}</strong>
		fields:
			featureimg:
				type: select
				label: Feature illustration
				type: select
				options: files
			featurename:
				type: text
				label: Feature name
				options: files
			featuredescription:
				type: textarea
				label: Feature description

	Content4:
		type: textarea
		placeholder: text

	CTA4:
		type: text
		placeholder: Text for the Call To Action

	line-b:
		type: line

	Title4:
		type: text
		placeholder: Title H2

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
			<strong>{{fontname}}</strong>
		fields:
			cover:
				label: Cover Image
				type: select
				options: images
			fontname:
				type: text
				label: Font name
				placeholder: Font name
			fontdescription:
				type: textarea
				label: Font description
				placeholder: Font description

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

	section2Text:
				type: text
				placeholder: Description

	line-e:
		type: line

	section3Info:
		type: info
		text: >
			**Section : Want to be the first to know the next features?**

			**Content** : A form (two inputs, one submit)

	SectionSubscribed:
		type: info
		text: >
		**Section : Displayed after successful subscribing**

	SectionSubscribedTitle:
		type: text
		placeholder: Title of the section
		default: Thank you for subscribing : )

	SectionSubscribedSubtitle:
		type: text
		placeholder: Subtitle of the section
		default: We also post more frequent updates on <a href="https://twitter.com/prototypoApp" target="_blank">Twitter, <a href="https://www.facebook.com/prototypoApp" target="_blank">Facebook</a> and our <a href="/blog">blog</a>.
