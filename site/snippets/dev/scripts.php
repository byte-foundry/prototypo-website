<!-- build:js /assets/dist/scripts.min.js -->
<script src="/assets/js/jquery.js"></script>
<script src="/assets/js/prototypo.js"></script>
<script src="/assets/js/prototypo-canvas.js"></script>
<script src="/assets/js/font.js"></script>
<script src="/assets/js/main.js"></script>
<!-- endbuild -->

<script type="text/javascript">
  WebFontConfig = {
    google: { families: [ 'Playfair+Display:400italic:latin', 'Roboto+Slab:300:latin', 'PT+Sans:400,400italic,700italic,700:latin' ] }
	timeout: 2000
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();
</script>
