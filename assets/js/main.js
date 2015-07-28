$(function() {
    /* Analytics events */
    // track users subscribing to the newsletter
    $(document.body).on('submit', '[action$="subscribe"]', function(e) {
        ga('send', 'event', 'newsletter', 'subscribe');
    });

    // track subscribtions once user is redirected (just to make sure)
    if ( window.location.hash === '#subscribed' ) {
        ga('send', 'event', 'newsletter', 'subscribed');
    }

    // track clicks on outbount links
    $(document.body).on('click', '[target="_blank"]', function(e) {
        ga( 'send', 'event', 'outbound', 'click', e.target.href );
    });

    /* Demo/Video switch */
    $('.switchAction').on('click', function(e) {
        $('.toggleSwitch').toggle();
    });

    $('#toggleMainNav').on('click', function() {
        $('body').toggleClass('js-showMainNav');
        $(this).toggleClass('active');
    });

    /* FAQ Code */
    $('.Question-header').not('.Question-anchor').on('click', function() {
        $(this).parent().find('.Question-content').slideToggle(200);
    });

    // What's the point of this reload?
    // $('.Question-anchor').on('click', function() {
    //     window.location.reload();
    // });

    function FAQ__checkIfAnchorToQuestion() {
        if (window.location.hash) {
            if (!$(window.location.hash).hasClass('focus')) {
                $('.Question').removeClass('focus');
                $(window.location.hash).addClass('focus').find('.Question-header').trigger('click');
            }
        }
    }

    FAQ__checkIfAnchorToQuestion();

    $('.js_annualBilling').on('mousedown', function() {
        $('.Pricing').removeClass('showMonthlyBilling').addClass('showAnnualBilling');
    });

    $('.js_monthlyBilling').on('mousedown', function() {
        $('.Pricing').removeClass('showAnnualBilling').addClass('showMonthlyBilling');
    });

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

});
