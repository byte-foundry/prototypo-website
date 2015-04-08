<?php snippet('header') ?>

  <main class="PageContent Blog" role="main">
  
    <header class="PageHeader text-left fitToContent">
      <a href="<?php echo url('blog'); ?>">
    		<h1 class="textType-title colorWhite"><?php echo $page->section1Title()->kirbytext(); ?></h1>
        <h3 class="textType-subtitle colorBright"><?php echo $page->section1Subtitle()->kirbytext(); ?></h3>
      </a>
		</header>
  
    <div class="fitToContent">
      
      <?php 
        
        $articles = $page->children()->visible()->flip();
        if($tag = param('tag')) {
          $articles = $articles->filterBy('tags', $tag, ',');
        }
        $articles = $articles->paginate(1);
      ?>
      
      
      
      
      <?php if($articles->pagination()->hasPages()): ?>
      <nav class="BlogPagination BlogPagination-before">
      
        <?php if($articles->pagination()->hasNextPage()): ?>
        <a class="BlogPagination-item BlogPagination-next" href="<?php echo $articles->pagination()->nextPageURL() ?>">newer posts</a>
        <?php endif ?>
      
        <?php if($articles->pagination()->hasPrevPage()): ?>
        <a class="BlogPagination-item BlogPagination-prev" href="<?php echo $articles->pagination()->prevPageURL() ?>">older posts</a>
        <?php endif ?>
      
      </nav>
      <?php endif ?>
      
      
      <?php  foreach($articles as $article): ?>
    
      <article class="Article">
        
        <header class="Article-header">
          <a class="Article-titleLink" href="<?php echo $article->url(); ?>">
            <h1 class="Article-title textType-title"><?php echo $article->title()->html() ?></h1>
            <h3 class="Article-subtitle textType-subtitle"><?php echo $article->subtitle()->kirbytext(); ?></h3>
          </a>
          
          <div class="Article-infos">
            <?php echo $article->date('F j, Y') ?>
            <?php $tags = explode(',',$article->tags()); ?>
            <ul class="Article-tags">
              <?php foreach($tags as $tag): ?>
              <li class="Article-tag">
                <a class="Article-tagLink" href="<?php echo url('blog/tag:' . $tag)?>">
                  <?php echo html($tag) ?>
                </a>
              </li>
              <?php endforeach ?>
            </ul>
          </div>
        </header>
        
        <div class="Article-content textType-txt">
          <?php echo nl2br($article->contentarticle()->kirbytext()); ?>
        </div>
        
        <a class="Article-leaveComment" href="<?php echo $article->url(); ?>#Disqus">Interested? Leave your comment!</a>
        
      </article>
    
      <?php endforeach; ?>
      
      
      
      
      
      <?php if($articles->pagination()->hasPages()): ?>
      <nav class="BlogPagination BlogPagination-after">
      
        <?php if($articles->pagination()->hasNextPage()): ?>
        <a class="BlogPagination-item BlogPagination-next" href="<?php echo $articles->pagination()->nextPageURL() ?>">newer posts</a>
        <?php endif ?>
      
        <?php if($articles->pagination()->hasPrevPage()): ?>
        <a class="BlogPagination-item BlogPagination-prev" href="<?php echo $articles->pagination()->prevPageURL() ?>">older posts</a>
        <?php endif ?>
      
      </nav>
      <?php endif ?>
      
    </div>

  </main>

<?php snippet('footer') ?>