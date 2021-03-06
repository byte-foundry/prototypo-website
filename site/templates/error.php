<?php snippet('header') ?>

  <main class="PageContent Error" role="main">

    <div class="fitToContent">
      
  		<header class="PageHeader text-center fitToContent">
    		<img src="<?php echo url('content/'.$page->dirname().'/'.$page->errorImage()); ?>">
    		<h1 class="textType-title textSize-title-large colorWhite"><?php echo $page->section1Title()->kirbytext(); ?></h1>
        <h3 class="textType-subtitle textSize-title-small  colorBright"><?php echo $page->section1Subtitle()->kirbytext(); ?></h3>
  		</header>

  		<div class="Section-wrapTxt textType-txt textSize-txt-medium marginTop30 colorBrightest text-center">
        <?php echo ($page->section1Txt()->kirbytext()); ?>
  		</div>

  </main>

<?php snippet('footer') ?>