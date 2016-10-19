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
		type: text
		placeholder: Pricing
		default: Pricing
	ogDescription:
		label: Page description
		type: text

	ogImage:
		label: Page thumbnail
		type:  text

	line-a:
		type:line

	mainTitle:
		type: text
		placeholder: Simple plans for everyone!
		default: Simple plans for everyone!

	Subtitle:
		type: text
		placeholder: Subtitle of the section
		default: 3 packs that fit your needs

	headerImg:
			type: select
			label: Image header
			options: files

	descriptionPromo:
			label: message promo
			type:	textarea

	packs:
		label: Pricing packs
		type: structure
		entry: >
			<strong>{{packname}}</strong>
		fields:
			packname:
				type: text
				label: Pack name
				placeholder: Pack name
			price:
				type: text
				label: Pack price TTC
				placeholder: $15
			promo:
				type: text
				label: Pack price TTC
				placeholder: $10
			baseline:
				type: text
				label: advantages
				placeholder: the pack you're looking for
			options:
				type: textarea
				label: Pack service
			button:
				type: text
				label: Button label
				placeholder: "Get started now!" or "Available soon"

	TxtAfter:
		label: message under packs
		type:	textarea

	users:
		label: Our happy users
		type: structure
		entry: >
			<strong>{{name}}</strong>
		fields:
			name:
				type: text
				label: name
				placeholder: his name
			infos:
				type: text
				label: infos
				placeholder: his city, etc.
			quote:
				type: textarea
				label: quote
				placeholder: the quote
			portrait:
				type: text
				label: portrait
				placeholder: an already uploaded image.jpg

	faq:
		label: Classic FAQ
		type: structure
		entry: >
			{{question}}
		fields:
			question:
				type: text
				label: question
				placeholder: the question
			answer:
				type: text
				label: answer
				placeholder: the answer
