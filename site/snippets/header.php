<!DOCTYPE html>
<html lang="en">
<head>

  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1.0">

  <title><?php echo $site->title()->html() ?> | <?php echo $page->title()->html() ?></title>

  <meta name="description" content="<?php echo $site->description()->html() ?>">
  <meta name="keywords" content="<?php echo $site->keywords()->html() ?>">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	
  <link href='http://fonts.googleapis.com/css?family=Playfair+Display:400italic|Roboto+Slab:300|PT+Sans:400,400italic,700,700italic' rel='stylesheet' type='text/css'>

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

  <?php echo css('assets/styles.min.css') ?>

</head>
<body>
  
  <header class="Header" role="banner">

    <nav class="Nav" role="navigation">
    
      <a href="<?php echo url('home'); ?>" class="Nav-logo">
        <span class="Nav-logoPicto keep-styles-for-print"></span>
        <span class="Nav-logoInner keep-styles-for-print">Prototypo</span>
      </a>
      
      <a href="#" class="Nav-callToAction Nav-callToActionCreateYourFont callToAction">
        		<span class="show-for-medium-up">Create your font now!</span>
        		<span class="show-for-small-only text-center">Get started!</span>
      </a>
    
      <?php snippet('menu') ?>     
    			
  		<div class="Social">
  			<a href="<?php echo $site->facebook()->html() ?>" class="Social-item Social-itemFacebook">
    			<span class="show-for-sr">Facebook</span>
    		</a>
    		
    		<a href="<?php echo $site->twitter()->html() ?>" class="Social-item Social-itemTwitter">
      		<span class="show-for-sr">Twitter</span>
        </a>
  		</div>
    
    </nav>
    
    <button id="toggleMainNav" class="ToggleSwitch ToggleSwitch-hamburgerToCross Nav-hamburgerMenuHandler">
      <span class="ToggleSwitch-inner">Toggle menu</span>
    </button>

  </header>