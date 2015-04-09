<?php snippet('header') ?>

  <main class="PageContent FAQ" role="main">
  
    <header class="PageHeader text-left fitToContent">
      <a href="<?php echo url('faq'); ?>">
    		<h1 class="textType-title colorWhite"><?php echo $page->section1Title()->kirbytext(); ?></h1>
        <h3 class="textType-subtitle colorBright"><?php echo $page->section1Subtitle()->kirbytext(); ?></h3>
      </a>
		</header>
  
    <div class="fitToContent">
      
      <?php 
        
        $questions = $page->children()->visible()->flip();
        if($tag = param('tag')) {
          $questions = $questions->filterBy('tags', $tag, ',');
        }
      //  $questions = $questions->paginate(1);
      ?>
      
      
      
      
      <?php  foreach($questions as $question): ?>
    
      <article class="Question">
        
        <header class="Question-header">
          <h1 class="Question-title textType-title"><?php echo $question->title()->html() ?></h1>
          
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
        
        <div class="Question-content textType-subtxt">
          <?php echo nl2br($question->answer()->kirbytext()); ?>
        </div>
        
      </article>
    
      <?php endforeach; ?>
      
    </div>

  </main>

<?php snippet('footer') ?>