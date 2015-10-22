$(function() {

	if ( $("body").hasClass("home") || $("body").hasClass("press") ) {

			/* Prototypo Demo in Canvas */
			var instance = new PrototypoCanvas({
					canvas: document.querySelector('#DemoCanvas'),
					jQueryListeners: false,
					fontObj: window.fontObj
				}),
				params = {
					xHeight: 500,
					capDelta: 250,
					ascender: 250,
					descender: -250,
					crossbar: 1,
					width: 1,
					roundness: 0.65,
					thickness: 85,
					_contrast: -1,
					breakPath: 0,
					aperture: 1,
					axis: 0,
					serifMedian: 1,
					serifWidth: 65,
					serifHeight: 20,
					serifCurve: 15,
					serifArc: 0,
					serifTerminal: 0,
					serifRotate: 1,
					serifRoundness: 1,
					midWidth: 1,
					serifTerminalCurve: 1,
					spurHeight: 1,
					overshoot: 10,
					slant: 0,
					curviness: 0.6,
					opticThickness: 1,
					serifBall: 1
				};

			instance.update(params);

			instance.displayChar('A');
			instance.currGlyph.fillColor = '#444';
			instance.zoom = 0.29;
			instance.view.center = [ 200, -350];

			// retrieve the colors used in the stylesheet.
			var colors =
				$('.DemoControls-Potentiometer')
				.css('background-image')
				.replace(/^.*?(rgb\(.*?\)).*?(rgb\(.*?\)).*$/, ' $1 | $2 ')
				.split('|'),
				updateSliderBg = function(el) {
					var amplitude = el.max - el.min,
						// the amplitude correction is empirical
						percent = 100 * (el.value - el.min + 0.05 * amplitude) / (el.max - el.min + 0.10 * amplitude);

					el.style['background-image'] =
						'linear-gradient( to right,' +
						colors[0] + percent + '%,' +
						colors[1] + (percent + 0.01) + '%)';
				};

			$('.DemoControls').on('input', '.DemoControls-Potentiometer', function(e) {
				updateSliderBg(e.target);
				params[e.target.getAttribute('data-param')] = +e.target.value;
				instance.update(params);
			});
			$('.DemoControls-Potentiometer').each(function() {
				updateSliderBg(this);
			});

			$('.DemoHome').on('mouseenter', function() {
				$('.Infobox').css('opacity', 0);
				$('#test-me').removeClass('test-me');
			}).on("mouseleave", function(){
				$('#test-me').addClass('test-me');
				$('.Infobox').css('opacity', 1);
			});
	}

});
