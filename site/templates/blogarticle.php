<?php snippet('header') ?>

  <main class="PageContent Blog gradient-yellow" role="main">

	<header class="PageHeader text-left fitToContent">
		<a href="<?php echo url('blog'); ?>">
			<h1 class="textType-title textSize-title-large"><?php echo $page->parent()->section1Title()->kirbytextSans(); ?></h1>
			<h3 class="textType-subtitle textSize-title-small colorDark"><?php echo $page->parent()->section1Subtitle()->kirbytextSans(); ?></h3>
		</a>
	</header>

	<div class="fitToContent">

		<?php
			$articles = $page->parent();
			if($tag = param('tag')) {
				$articles = $articles->filterBy('tags', urldecode($tag), ',');
			}
			$articles = $articles->paginate(1);
		?>

		<?php if($articles->pagination()->hasPages()): ?>
			<nav class="BlogPagination BlogPagination-before">
				<?php if($page->hasNextVisible()): ?>
					<a class="BlogPagination-item BlogPagination-next textType-txt textSize-txt-small red bg-white" href="<?php echo $page->nextVisible()->url() ?>">newer post</a>
				<?php endif ?>
				<?php if($page->hasPrevVisible()): ?>
					<a class="BlogPagination-item right textType-txt textSize-txt-small red bg-white" href="<?php echo $page->prevVisible()->url() ?>">older post</a>
				<?php endif ?>
			</nav>
		<?php endif ?>

		<nav class="BlogPagination BlogPagination-before">
		<a class="BlogPagination-item left BlogPagination-back textType-txt textSize-txt-small red bg-white" href="<?php echo url('blog'); ?>">Back to blog</a>
		</nav>

  		<article class="Article">

			<?php snippet('share-btn') ?>

			<header class="Article-header">
				<h1 class="Article-title textType-title textSize-title-small"><?php echo $page->title()->html() ?></h1>
				<h3 class="Article-subtitle textType-subtitle textSize-txt-xlarge"><?php echo $page->subtitle()->kirbytext(); ?></h3>

				<div class="Article-infos textType-txt textSize-txt-small">
				<?php echo $page->date('F j, Y') ?>

				<?php if ( $page->tags() ) : $tags = explode(',',$page->tags()); ?>

				<ul class="Article-tags">
					<?php foreach($tags as $tag): ?>
						<li class="Article-tag">
					<a class="Article-tagLink colorWhite" href="<?php echo url('blog/tag:' . $tag)?>">
						<?php echo html($tag) ?>
					</a>
					</li>
					<?php endforeach ?>
				</ul>

				<?php endif; ?>

				</div>
			</header>

			<div class="Article-content textType-txt textSize-txt-medium">
				<?php echo nl2br($page->contentarticle()->kirbytext()); ?>
			</div>

			<div class="Disqus text-center textType-txt textSize-txt-small colorDark" id="Disqus">
				<?php snippet('disqus', array('disqus_shortname' => 'prototypoapp', 'disqus_developer' => true)) ?>
			</div>

		</article>

		<?php if($articles->pagination()->hasPages()): ?>
			<nav class="BlogPagination BlogPagination-after">
				<?php if($page->hasNextVisible()): ?>
					<a class="BlogPagination-item BlogPagination-next textType-txt textSize-txt-small red bg-white" href="<?php echo $page->nextVisible()->url() ?>">newer post</a>
				<?php endif ?>
				<?php if($page->hasPrevVisible()): ?>
					<a class="BlogPagination-item right textType-txt textSize-txt-small red bg-white" href="<?php echo $page->prevVisible()->url() ?>">older post</a>
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
