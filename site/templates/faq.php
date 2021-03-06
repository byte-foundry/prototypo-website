<?php snippet('header') ?>

  <main class="PageContent FAQ gradient-green">

    <header class="PageHeader text-left fitToContent">
      <a href="<?php echo url('faq'); ?>">
    		<h1 class="textType-title textSize-title-large"><?php echo $page->section1Title()->kirbytextSans(); ?></h1>
        <p class="faq_subtitle textType-subtitle textSize-title-small colorDark"><?php echo $page->section1Subtitle()->kirbytextSans(); ?></p>
      </a>
		</header>

    <div class="fitToContent">

      <?php $questions = $page->children()->visible(); ?>

      <?php  foreach($questions as $question): ?>

      <article class="Question" id="<?php echo $question->slug(); ?>">

        <header class="Question-header">
          <a class="Question-anchor textSize-txt-large textType-txt colorGray" href="<?php echo url('faq'); ?>#<?php echo $question->slug(); ?>">#</a>
          <h2 class="Question-title textType-title textSize-txt-xlarge"><?php echo $question->title()->html() ?></h2>
        </header>

        <div class="Question-content textType-subtxt textSize-txt-small">
          <?php echo nl2br($question->answer()->kirbytext()); ?>
        </div>

      </article>

      <?php endforeach; ?>

      <div class="Section-wrapTxt textType-txt textSize-txt-large marginTop30 colorDark text-center">
        <?php echo $page->section1TxtAfter()->kirbytext(); ?>
  		</div>
    </div>

  </main>

<?php snippet('footer') ?>
