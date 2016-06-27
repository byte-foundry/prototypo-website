<?php snippet('header') ?>

	<main class="PageContent Blog">

	<header class="PageHeader text-left fitToContent">
		<a href="<?php echo url('blog'); ?>">
			<h1 class="textType-title textSize-title-large">
				<?php echo $page->section1Title()->kirbytextSans(); ?>
				<div class="textType-subtitle textSize-title-small colorDark"><?php echo $page->section1Subtitle()->kirbytextSans(); ?></div>
			</h1>
		</a>

		<?php if($isTag = param('tag')): ?>
			<h3 class="textType-subtitle textSize-title-small colorDark">
				Posts tagged “<?php echo str_replace("%20"," ",$isTag); ?>”
			</h3>
		<?php endif; ?>

	</header>

	<div class="fitToContent Article-list">

		<div class="Articles">


			<?php if($isTag = param('tag')): ?>
				<nav class="BlogPagination BlogPagination-before">
				  <a class="BlogPagination-item BlogPagination right textType-txt textSize-txt-small" href="<?php echo url('blog'); ?>">Back to blog</a>
				</nav>
			<?php endif; ?>

			<?php

				if($isTag = param('tag')):
					$articles = $page->children()->visible()->flip();
					$articles = $articles->filterBy('tags', urldecode($isTag), ',');
				else:
					$articles = $page->children()->visible()->flip()->paginate(8);
				endif;
			?>

			<?php if(!$isTag): ?>
				<?php if($articles->pagination()->hasPages()): ?>
					<nav class="BlogPagination BlogPagination-before">

						<?php if($articles->pagination()->hasNextPage()): ?>
							<a class="BlogPagination-item right textType-txt textSize-txt-small" href="<?php echo $articles->pagination()->nextPageURL() ?>">older post</a>
						<?php endif ?>

						<?php if($articles->pagination()->hasPrevPage()): ?>
							<a class="BlogPagination-item BlogPagination-next textType-txt textSize-txt-small" href="<?php echo $articles->pagination()->prevPageURL() ?>">newer post</a>
						<?php endif ?>

					</nav>
				<?php endif ?>
			<?php endif ?>


			<?php foreach($articles as $article): ?>

					<article class="Article">

						<a class="Article-link" href="<?php echo $article->url(); ?>">
							<?php
								if( is_object($article->image()) ):
									if( $article->ogImage() != "" ):
										echo '<div class="Article-preview" style="background-image:url(' . $article->image($article->ogImage()) . ')"></div>';
									else:
										echo '<div class="Article-preview" style="background-image:url(' . $article->image()->url() . ')"></div>';
									endif;
								endif;
							?>
						</a>

						<header class="Article-header">

							<a class="Article-link" href="<?php echo $article->url(); ?>">
								<h2 class="Article-title textType-title textSize-title-xsmall"><?php echo $article->title()->html() ?></h2>
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

					</article>

			<?php endforeach; ?>

			<?php if(!$isTag): ?>
				<?php if($articles->pagination()->hasPages()): ?>
					<nav class="BlogPagination BlogPagination-after">

						<?php if($articles->pagination()->hasNextPage()): ?>
							<a class="BlogPagination-item right textType-txt textSize-txt-small" href="<?php echo $articles->pagination()->nextPageURL() ?>">older post</a>
						<?php endif ?>

						<?php if($articles->pagination()->hasPrevPage()): ?>
							<a class="BlogPagination-item BlogPagination-next textType-txt textSize-txt-small" href="<?php echo $articles->pagination()->prevPageURL() ?>">newer post</a>
						<?php endif ?>

					</nav>
				<?php endif ?>
			<?php endif ?>

		</div>



		<div class="cloudTags">

			<?php
				// fetch all tags
				$tags = $page->children()->visible()->pluck('tags', ',', true);
			?>
			<ul class="Article-tags">
				<?php foreach($tags as $tag): ?>
					<li class="Article-tag">
						<a class="Article-tagLink colorWhite" href="<?php echo $page->url() . '/tag:' . $tag; ?>">
							<?php echo html($tag) ?>
						</a>
					</li>
				<?php endforeach ?>
			</ul>
		</div>


	</div>

	</main>

<?php snippet('footer') ?>
