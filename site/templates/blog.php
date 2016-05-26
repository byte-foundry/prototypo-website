<?php snippet('header') ?>

  <main class="PageContent Blog" role="main">

    <header class="PageHeader text-left fitToContent">
      <a href="<?php echo url('blog'); ?>">
    		<h1 class="textType-title textSize-title-large"><?php echo $page->section1Title()->kirbytextSans(); ?></h1>
        <h3 class="textType-subtitle textSize-title-small colorDark"><?php echo $page->section1Subtitle()->kirbytextSans(); ?></h3>
      </a>
		</header>

    <div class="fitToContent">

      <?php

        $articles = $page->children()->visible()->flip();
        if($tag = param('tag')) {
          $articles = $articles->filterBy('tags', urldecode($tag), ',');
        }
        $articles = $articles->paginate(1);
      ?>




      <?php if($articles->pagination()->hasPages()): ?>
      <nav class="BlogPagination BlogPagination-before">

        <?php if($articles->pagination()->hasNextPage()): ?>

        <a class="BlogPagination-item BlogPagination-next textType-txt textSize-txt-small" href="<?php echo $articles->pagination()->nextPageURL() ?>"><span>next posts</span></a>
        <?php endif ?>

        <?php if($articles->pagination()->hasPrevPage()): ?>
        <a class="BlogPagination-item BlogPagination-prev textType-txt textSize-txt-small" href="<?php echo $articles->pagination()->prevPageURL() ?>"><span>previous posts</span></a>

        <?php endif ?>

      </nav>
      <?php endif ?>


      <?php  foreach($articles as $article): ?>

      <article class="Article">

        <header class="Article-header">
          <a class="Article-titleLink" href="<?php echo $article->url(); ?>">
            <h1 class="Article-title textType-title textSize-title-small"><?php echo $article->title()->html() ?></h1>
            <h3 class="Article-subtitle textType-subtitle textSize-txt-xlarge"><?php echo $article->subtitle()->kirbytext(); ?></h3>
          </a>

          <div class="Article-infos textType-txt textSize-txt-small colorDark">
            <?php echo $article->date('F j, Y') ?>
            <?php $tags = explode(',',$article->tags()); ?>
            <ul class="Article-tags">
              <?php foreach($tags as $tag): ?>
              <li class="Article-tag">
                <a class="Article-tagLink colorWhite" href="<?php echo url('blog/tag:' . $tag)?>">
                  <?php echo html($tag) ?>
                </a>
              </li>
              <?php endforeach ?>
            </ul>
          </div>
        </header>

        <div class="Article-content textType-txt textSize-txt-large">
          <?php echo nl2br($article->contentarticle()->kirbytext()); ?>
        </div>

        <a class="Article-leaveComment textType-txt textSize-txt-medium colorDarkGray" href="<?php echo $article->url(); ?>#Disqus">Interested? Leave your comment!</a>

      </article>

      <?php endforeach; ?>





      <?php if($articles->pagination()->hasPages()): ?>
      <nav class="BlogPagination BlogPagination-after">

        <?php if($articles->pagination()->hasNextPage()): ?>

        <a class="BlogPagination-item BlogPagination-next textType-txt textSize-txt-small" href="<?php echo $articles->pagination()->nextPageURL() ?>"><span>next posts</span></a>
        <?php endif ?>

        <?php if($articles->pagination()->hasPrevPage()): ?>
        <a class="BlogPagination-item BlogPagination-prev textType-txt textSize-txt-small" href="<?php echo $articles->pagination()->prevPageURL() ?>"><span>previous posts</span></a>

        <?php endif ?>

      </nav>
      <?php endif ?>

    </div>

  </main>

<?php snippet('footer') ?>
