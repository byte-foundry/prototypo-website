<?php snippet('header') ?>

  <main class="PageContent FAQ" role="main">

    <header class="PageHeader text-left fitToContent">
      <a href="<?php echo url('faq'); ?>">
    		<h1 class="textType-title textSize-title-large"><?php echo $page->section1Title()->kirbytextSans(); ?></h1>
        <h3 class="textType-subtitle textSize-title-small colorDark"><?php echo $page->section1Subtitle()->kirbytextSans(); ?></h3>
      </a>
		</header>

    <div class="fitToContent">

      <?php

        $questions = $page->children()->visible();
        if($tag = param('tag')) {
          $questions = $questions->filterBy('tags', $tag, ',');
        }
      //  $questions = $questions->paginate(1);
      ?>




      <?php  foreach($questions as $question): ?>

      <article class="Question" id="<?php echo $question->slug(); ?>">

        <header class="Question-header">
          <a class="Question-anchor textSize-txt-large textType-txt colorGray" href="<?php echo url('faq'); ?>#<?php echo $question->slug(); ?>">#</a>
          <h1 class="Question-title textType-title textSize-txt-xlarge"><?php echo $question->title()->html() ?></h1>

          <div class="Question-infos">
            <?php $tags = explode(',',$question->tags()); ?>
            <ul class="Question-tags">
              <?php foreach($tags as $tag): ?>
              <li class="Question-tag">
                <a class="Question-tagLink" href="<?php echo url('faq/tag:' . $tag)?>">
                  <?php echo html($tag) ?>
                </a>
              </li>
              <?php endforeach ?>
            </ul>
          </div>
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
