<!DOCTYPE html>
<html lang="en">
<head>

  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1.0">

  <title><?php echo $site->title()->html() ?> | <?php echo $page->title()->html() ?></title>
  <meta name="description" content="
		<?php
			if($page->ogDescription()->isNotEmpty()):
				echo $page->ogDescription();
			else:
				echo $site->description()->html();
			endif;
		?>
	">
  <meta name="keywords" content="<?php echo $site->keywords()->html() ?>">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <meta property="og:url" content="https://www.prototypo.io/<?php if ( $page->uri() !== 'home' ) { echo $page->uri(); } ?>"/>
  <meta property="og:title" content="<?php echo $page->title(); ?>"/>
  <meta property="og:type" content="website"/>
  <meta property="og:description" content="<?php echo $page->ogDescription(); ?>"/>
  <?php
    $ogImage = $page->ogImage();
    if ( isset($ogImage) && trim($ogImage) !== '' ) {
        $ogImage = '/content/' . $page->diruri() . '/' . $ogImage;
    }
    else {
        $ogImage = '';
    }
  ?>
  <meta property="og:image" content="<?php echo $ogImage; ?>"/>
  <?php // The following link is just here to make sure wget downloads local thumbnails ?>
  <?php if ( $ogImage !== '' ): ?>
    <link rel="image_src" type="image/png" href="<?php echo $ogImage; ?>">
  <?php endif; ?>

  <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png">
  <link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon-60x60.png">
  <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png">
  <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png">
  <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png">
  <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png">
  <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png">
  <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png">
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png">
  <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32">
  <link rel="icon" type="image/png" href="/android-chrome-192x192.png" sizes="192x192">
  <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96">
  <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16">
  <link rel="manifest" href="/manifest.json">
  <meta name="msapplication-TileColor" content="#232323">
  <meta name="msapplication-TileImage" content="/mstile-144x144.png">
  <meta name="theme-color" content="#232323">

  <?php
	snippet( c::get('env') . '/styles' );
  ?>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" media="screen" title="font-awesome">
<meta name="google-site-verification" content="Px8SWrJOuMrGjsW5ADtNqVVtVtkLyjCLv97ueqZGDYI" />
</head>
<body class="<?= $page->id(); ?>">
<script>
  WebFontConfig = {
	google: { families: [ 'Roboto+Slab:300:latin', 'PT+Sans:400,400italic,700italic,700:latin' ] },
	timeout: 2000
  };
  (function() {
	var wf = document.createElement('script');
	wf.src = '//ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
	wf.async = 1;
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(wf, s);
  })();
</script>

<!-- Facebook Pixel Code -->
<script>
	!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
		n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
	n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
	t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
			document,'script','https://connect.facebook.net/en_US/fbevents.js');
	fbq('init', '234652266880500');
	fbq('track', "PageView");
</script>
<noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=234652266880500&ev=PageView&noscript=1" /></noscript>
<!-- End Facebook Pixel Code -->

<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-41962243-1', 'auto');
  ga('send', 'pageview');

  window.addEventListener('error', function(e) {
	ga( 'send', 'event', 'js-error', e.message, e.filename + ':  ' + e.lineno );
  });
</script>

<script>
  window.intercomSettings = {
    app_id: "<?php echo c::get('env') === 'dev' ? 'desv6ocn' : 'mnph1bst'; ?>"
  };
</script>
<script>(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',intercomSettings);}else{var d=document;var i=function(){i.c(arguments)};i.q=[];i.c=function(args){i.q.push(args)};w.Intercom=i;function l(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/<?php echo c::get('env') === 'dev' ? 'desv6ocn' : 'mnph1bst'; ?>';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);}if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})()</script>



  <header class="Header">
	<!--
		When we remove this line, we need to update:
		- _layout.sccs #405: s/118/78
		- _layout.scss #393: s/105/65
		<div class="show-for-large-up" style="text-align: center; font-size: 20px; line-height: 40px; background-color: #FBD373;">
			This week of development is sponsored by Paul Rouget.
		</div>
	-->

    <nav class="Nav">

		<a href="<?php echo url('home'); ?>" class="Nav-logo">
			<span class="Nav-logoPicto keep-styles-for-print"></span>
			<span class="Nav-logoInner keep-styles-for-print">Prototypo</span>
		</a>

		<div id="header-container" class="right">
			<div class="header">
				<div class="header-window">
					<div class="header-part">
						<div>
							<a class="login" href="https://<?php echo c::get('env') === 'dev' ? 'dev' : 'app'; ?>.prototypo.io/#/signin" target="_blank" >Log in</a>
						</div>
						<div>
							<!-- <a class="callToAction header-part-button" href="https://<?php echo c::get('env') === 'dev' ? 'dev' : 'app'; ?>.prototypo.io/#/signup" target="_blank" >Design your first font</a> -->
							<a class="callToAction header-part-button" href="https://app.prototypo.io/#/signup" onclick="ga('send', 'event', 'Home', 'Click', 'CTA5');">Design your first font</a>
						</div>
					</div>
				</div>
			</div>
		</div>

		<?php snippet('menu') ?>

  		<div class="Social hide-for-small-only">
  			<a href="<?php echo $site->facebook()->html() ?>" target="_blank" class="Social-item Social-itemFacebook">
				<span class="show-for-sr">Facebook</span>
			</a>

			<a href="<?php echo $site->instagram()->html() ?>" target="_blank" class="Social-item Social-itemInstagram">
	  				<span class="show-for-sr">Instagram</span>
			</a>

			<a href="<?php echo $site->dribbble()->html() ?>" target="_blank" class="Social-item Social-itemDribbble">
	  				<span class="show-for-sr">Dribbble</span>
			</a>

			<a href="<?php echo $site->twitter()->html() ?>" target="_blank" class="Social-item Social-itemTwitter">
	  				<span class="show-for-sr">Twitter</span>
			</a>
  		</div>

	</nav>

	<button id="toggleMainNav" class="ToggleSwitch ToggleSwitch-hamburgerToCross Nav-hamburgerMenuHandler">
	  <span class="ToggleSwitch-inner">Toggle menu</span>
	</button>

  </header>
