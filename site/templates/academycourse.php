<?php snippet('header') ?>

  <main class="PageContent Academy AcademyCoursePage gradient-green" role="main">

	<header class="PageHeader text-left fitToContent">
		<a href="<?php echo url('academy'); ?>">
			<h1 class="textType-title textSize-title-large"><?php echo $page->parent()->section1Title()->kirbytextSans(); ?></h1>
			<h3 class="textType-subtitle textSize-title-small colorDark"><?php echo $page->parent()->section1Subtitle()->kirbytextSans(); ?></h3>
		</a>
	</header>

	<div class="fitToContent">

		<?php
			$Courses = $page->parent();
			if($tag = param('tag')) {
				$Courses = $Courses->filterBy('tags', urldecode($tag), ',');
			}
			$Courses = $Courses->paginate(1);
		?>

		<?php if($Courses->pagination()->hasPages()): ?>
			<nav class="AcademyPagination AcademyPagination-before">
				<?php if($page->hasNextVisible()): ?>
					<a class="AcademyPagination-item AcademyPagination-next textType-txt textSize-txt-small red bg-white" href="<?php echo $page->nextVisible()->url() ?>">newer course</a>
				<?php endif ?>
				<?php if($page->hasPrevVisible()): ?>
					<a class="AcademyPagination-item right textType-txt textSize-txt-small red bg-white" href="<?php echo $page->prevVisible()->url() ?>">older course</a>
				<?php endif ?>
			</nav>
		<?php endif ?>

		<nav class="AcademyPagination AcademyPagination-before">
		<a class="AcademyPagination-item left AcademyPagination-back textType-txt textSize-txt-small red bg-white" href="<?php echo url('academy'); ?>">Back to the course list</a>
		</nav>

  		<article class="Course">

			<?php snippet('share-btn') ?>

			<header class="Course-header">
				<h1 class="Course-title textType-title textSize-title-small"><?php echo $page->title()->html() ?></h1>
				<h3 class="Course-subtitle textType-subtitle textSize-txt-xlarge"><?php echo $page->header()->kirbytext(); ?></h3>
        <?php if($page->reward() != "null"): ?>
          <p>By completing this course you will earn:</p>
          <ul>
            <li><?php echo $page->reward(); ?></li>
          </ul>
        <?php endif ?>
        <?php if($page->readingTime() != ""): ?>
          <p class="Course-readingtime right">~ <?php echo $page->readingTime(); ?> min approx. reading time.</p>
        <?php endif ?>

				<div class="Course-infos textType-txt textSize-txt-small">
				<?php echo $page->date('F j, Y') ?>

				<?php if ( $page->tags() ) : $tags = explode(',',$page->tags()); ?>
          <?php if (count($tags) > 0 && $tags[0] != ""): ?>
    				<ul class="Course-tags">
    					<?php foreach($tags as $tag): ?>
    						<li class="Course-tag">
    					<a class="Course-tagLink colorWhite" href="<?php echo url('academy/tag:' . $tag)?>">
    						<?php echo html($tag) ?>
    					</a>
    					</li>
    					<?php endforeach ?>
    				</ul>
          <?php endif; ?>
				<?php endif; ?>

				</div>
			</header>

			<div class="Course-content textType-txt textSize-txt-medium">
        <?php if ( $page->basicsurl() ) : $basicsurl = explode(',',$page->basicsurl()); $basicstitle = explode(',',$page->basicstitle()); ?>
          <?php if (count($basicsurl) > 0 && $basicsurl[0] != ""): ?>
            <div class="Course-content-basics textType-txt textSize-txt-medium">
              <h3>Basics</h3>
              <?php foreach($basicsurl as $index=>$basicurl): ?>
              <a class="Course-tagLink colorWhite" href="<?php echo url('academy/' . $basicurl)?>">
    						<?php echo html($basicstitle[$index]) ?>
    					</a>
              <?php endforeach ?>
            </div>
          <?php endif; ?>
        <?php endif; ?>

				<?php echo nl2br($page->contentcourse()->kirbytext()); ?>
			</div>

			<div class="Disqus text-center textType-txt textSize-txt-small colorDark" id="Disqus">
				<?php snippet('disqus', array('disqus_shortname' => 'prototypoapp', 'disqus_developer' => true)) ?>
			</div>

		</article>

		<?php if($Courses->pagination()->hasPages()): ?>
			<nav class="AcademyPagination AcademyPagination-after">
				<?php if($page->hasNextVisible()): ?>
					<a class="AcademyPagination-item AcademyPagination-next textType-txt textSize-txt-small red bg-white" href="<?php echo $page->nextVisible()->url() ?>">newer course</a>
				<?php endif ?>
				<?php if($page->hasPrevVisible()): ?>
					<a class="AcademyPagination-item right textType-txt textSize-txt-small red bg-white" href="<?php echo $page->prevVisible()->url() ?>">older course</a>
				<?php endif ?>
			</nav>
		<?php endif ?>

    <div class="section-action">
      <h3 class="textType-subtitle colorBrightest textSize-txt-xlarge"><?php echo $page->parent()->ctaText(); ?></h3>
      <a href="<?php echo url('pricing'); ?>" class="NewsletterInput-submit callToAction center"><?php echo $page->parent()->ctaBtn(); ?></a>
    </div>


	</div>



	<!--  Surge hack to avoid 404 videos -->
	<div style="display: none;">
		<?php foreach($page->files() as $file): ?>
			<?php if ($file->extension() === 'mp4' ): ?>
				<a href="<?php echo $file->url() ?>"><?php echo $file->filename() ?></a>
			<?php endif; ?>
		<?php endforeach ?>
	</div>

</main>

<?php snippet('footer') ?>
