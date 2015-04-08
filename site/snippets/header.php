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
	
  <link href='http://fonts.googleapis.com/css?family=Playfair+Display:400italic|PT+Sans:400,400italic,700,700italic' rel='stylesheet' type='text/css'>

  <?php echo css('assets/styles.min.css') ?>

</head>
<body>
  
  <header class="Header" role="banner">

    <nav class="Nav" role="navigation">
    
      <a href="./" class="Nav-logo">
        <span class="Nav-logoPicto"></span>
        <span class="Nav-logoInner">Prototypo</span>
      </a>
      
      <a href="#" class="Nav-callToAction Nav-callToActionCreateYourFont callToAction">Create your font now!</a>
    
      <?php snippet('menu') ?>     
    			
  		<div class="Social">
  			<a href="https://www.facebook.com/prototypoApp" class="Social-item Social-itemFacebook">
    			<span class="show-for-sr">Facebook</span>
    		</a>
    		
    		<a href="https://twitter.com/prototypoApp" class="Social-item Social-itemTwitter">
      		<span class="show-for-sr">Twitter</span>
        </a>
  		</div>
    
    </nav>
    
    <button id="toggleMainNav" class="ToggleSwitch ToggleSwitch-hamburgerToCross Nav-hamburgerMenuHandler">
      <span class="ToggleSwitch-inner">Toggle menu</span>
    </button>

  </header>