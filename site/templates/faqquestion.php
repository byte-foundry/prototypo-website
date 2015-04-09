<?php snippet('header') ?>

  <main class="PageContent Blog" role="main">
  
    <header class="PageHeader text-left fitToContent">
      <a href="<?php echo url('blog'); ?>">
    		<h1 class="textType-title colorWhite"><?php echo $page->parent()->section1Title()->kirbytext(); ?></h1>
        <h3 class="textType-subtitle colorBright"><?php echo $page->parent()->section1Subtitle()->kirbytext(); ?></h3>
      </a>
		</header>

    <div class="fitToContent">
  	
      <nav class="BlogPagination BlogPagination-before">
        <a class="BlogPagination-item BlogPagination-prev" href="<?php echo url('blog'); ?>">Back to blog</a>  
      </nav>
      
  		<article class="Article">
        
        <header class="Article-header">
          <a class="Article-titleLink" href="<?php echo $page->url(); ?>">
            <h1 class="Article-title textType-title"><?php echo $page->title()->html() ?></h1>
            <h3 class="Article-subtitle textType-subtitle"><?php echo $page->subtitle()->kirbytext(); ?></h3>
          </a>

          <div class="Article-infos">
            <?php echo $page->date('F j, Y') ?>
            <?php if (!empty($page->tags())) : $tags = explode(',',$page->tags()); ?>
            <ul class="Article-tags">
              <?php foreach($tags as $tag): ?>
              <li class="Article-tag">
                <a class="Article-tagLink" href="<?php echo url('blog/tag:' . $tag)?>">
                  <?php echo html($tag) ?>
                </a>
              </li>
              <?php endforeach ?>
            </ul>
            <?php endif; ?>
          </div>
        </header>
        
        <div class="Article-content textType-txt">
          
          <?php echo nl2br($page->contentarticle()->kirbytext()); ?>
        </div>
        
        <div class="Disqus" id="Disqus">
          <?php snippet('disqus', array('disqus_shortname' => 'myawesomeblog', 'disqus_developer' => true)) ?>
        </div>
        
      </article>
      
    </div>

  </main>

<?php snippet('footer') ?>