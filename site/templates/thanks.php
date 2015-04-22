<?php snippet('header') ?>

  <main class="PageContent Thanks" role="main">
  
    <header class="PageHeader text-left fitToContent">
  		<h1 class="textType-title textSize-title-large colorWhite"><?php echo $page->section1Title()->kirbytext(); ?></h1>
      <h3 class="textType-subtitle textSize-title-small colorBright"><?php echo $page->section1Subtitle()->kirbytext(); ?></h3>
		</header>
    
    <div class="fitToContent Thanks-content">
      <ul class="large-block-grid-3 medium-block-grid-2 small-block-grid-1">
      <?php snippet('backers', array('json' => 'site/snippets/f-reward999.json')); ?>
      <?php snippet('backers', array('json' => 'site/snippets/f-reward600.json')); ?>
      <?php snippet('backers', array('json' => 'site/snippets/f-reward300.json')); ?>
      <?php snippet('backers', array('json' => 'site/snippets/f-reward99.json')); ?>
      <?php snippet('backers', array('json' => 'site/snippets/f-reward60.json')); ?>
      <?php snippet('backers', array('json' => 'site/snippets/f-reward59.json')); ?>
      <?php snippet('backers', array('json' => 'site/snippets/f-reward35.json')); ?>
      <?php snippet('backers', array('json' => 'site/snippets/f-reward30.json')); ?>
      <?php snippet('backers', array('json' => 'site/snippets/f-reward25.json')); ?>
      <?php snippet('backers', array('json' => 'site/snippets/f-reward20.json')); ?>
      <?php snippet('backers', array('json' => 'site/snippets/f-reward12.json')); ?>
      <?php snippet('backers', array('json' => 'site/snippets/f-reward9.json')); ?>
      <?php snippet('backers', array('json' => 'site/snippets/f-reward5.json')); ?>
      <?php snippet('backers', array('json' => 'site/snippets/f-reward1.json')); ?>
      <?php snippet('backers', array('json' => 'site/snippets/f-rewardNo.json')); ?>
      </ul>
    </div>

  </main>

<?php snippet('footer') ?>
