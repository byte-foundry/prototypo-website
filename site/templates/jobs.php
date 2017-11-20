<?php snippet('header') ?>

  <main class="PageContent Blog gradient-yellow" role="main">

	<header class="PageHeader text-left fitToContent">
		<a href="<?php echo url('blog'); ?>">
			<h1 class="textType-title textSize-title-large"><?php echo $page->parent()->section1Title()->kirbytextSans(); ?></h1>
			<h3 class="textType-subtitle textSize-title-small colorDark"><?php echo $page->parent()->section1Subtitle()->kirbytextSans(); ?></h3>
		</a>
	</header>

	<div class="fitToContent">

  		<article class="Jobs">

			<?php snippet('share-btn') ?>

			<header class="Article-header">
				<h1 class="Article-title textType-title textSize-title-small"><?php echo $page->title()->html() ?></h1>
				<h3 class="Article-subtitle textType-subtitle textSize-txt-xlarge"><?php echo $page->header()->kirbytext(); ?></h3>
			</header>

			<div class="Jobs-content textType-txt textSize-txt-medium">
				<?php echo nl2br($page->offer1()->kirbytext()); ?>
			</div>

			<div class="Jobs-content textType-txt textSize-txt-medium">
				<?php echo nl2br($page->offer2()->kirbytext()); ?>
			</div>

			<div class="Jobs-content textType-txt textSize-txt-medium">
				<?php echo nl2br($page->offer3()->kirbytext()); ?>
			</div>

			<div class="Jobs-content textType-txt textSize-txt-medium">
				<?php echo nl2br($page->offer4()->kirbytext()); ?>
			</div>

		</article>


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
