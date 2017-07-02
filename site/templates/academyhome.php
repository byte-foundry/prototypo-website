<?php snippet('header') ?>

	<main class="PageContent Academy gradient-green">

	<header class="PageHeader text-left fitToContent">
		<a href="<?php echo url('academy'); ?>">
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

	<div class="fitToContent Course-list">

		<div class="Courses">


			<?php if($isTag = param('tag')): ?>
				<nav class="AcademyPagination AcademyPagination-before">
				  <a class="AcademyPagination-item AcademyPagination right textType-txt textSize-txt-small" href="<?php echo url('academy'); ?>">Back to academy</a>
				</nav>
			<?php endif; ?>

			<?php

				if($isTag = param('tag')):
					$courses = $page->children()->visible()->flip();
					$courses = $courses->filterBy('tags', urldecode($isTag), ',');
				else:
					$courses = $page->children()->visible()->paginate(8);
				endif;
			?>

			<?php if(!$isTag): ?>
				<?php if($courses->pagination()->hasPages()): ?>
					<nav class="AcademyPagination AcademyPagination-before">

						<?php if($courses->pagination()->hasNextPage()): ?>
							<a class="AcademyPagination-item right textType-txt textSize-txt-small red bg-white" href="<?php echo $courses->pagination()->nextPageURL() ?>">older posts</a>
						<?php endif ?>

						<?php if($courses->pagination()->hasPrevPage()): ?>
							<a class="AcademyPagination-item AcademyPagination-next textType-txt textSize-txt-small red bg-white" href="<?php echo $courses->pagination()->prevPageURL() ?>">newer posts</a>
						<?php endif ?>

					</nav>
				<?php endif ?>
			<?php endif ?>


			<?php foreach($courses as $course): ?>

					<article class="Course">

						<a class="Course-link" href="<?php echo $course->url(); ?>">
							<?php
								if( $course->ogImage() != "" || $course->headerImage() != "" ):
									if( $course->ogImage() != "" ):
										echo '<div class="Course-preview" style="background-image:url(' . $course->ogImage()->url() . ')"></div>';
									else:
										echo '<div class="Course-preview" style="background-image:url(' . $course->headerImage()->url() . ')"></div>';
									endif;
								endif;
							?>
						</a>

						<header class="Course-header">

							<a class="Course-link" href="<?php echo $course->url(); ?>">
								<h2 class="Course-title textType-title textSize-title-xsmall"><?php echo $course->title()->html() ?></h2>
								<h3 class="Course-subtitle textType-subtitle textSize-txt-xlarge"><?php echo $course->header()->kirbytext(); ?></h3>
                <?php if($course->reward() != ""): ?>
                  <p>By completing this course you will earn:</p>
                  <ul>
                    <li><?php echo $course->reward(); ?></li>
                  </ul>
                <?php endif ?>
                <?php if($course->readingTime() != ""): ?>
                  <p class="Course-readingtime right">~ <?php echo $course->readingTime(); ?> min approx. reading time.</p>
                <?php endif ?>
                <br/>
							</a>

							<div class="Course-infos textType-txt textSize-txt-small colorDark">
							<?php echo $course->date('F j, Y') ?>
							<?php $tags = explode(',',$course->tags()); ?>
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
                <?php endif ?>
							</div>
						</header>

					</article>

			<?php endforeach; ?>

			<?php if(!$isTag): ?>
				<?php if($courses->pagination()->hasPages()): ?>
					<nav class="AcademyPagination AcademyPagination-after">

						<?php if($courses->pagination()->hasNextPage()): ?>
							<a class="AcademyPagination-item right textType-txt textSize-txt-small  red bg-white" href="<?php echo $courses->pagination()->nextPageURL() ?>">older posts</a>
						<?php endif ?>

						<?php if($courses->pagination()->hasPrevPage()): ?>
							<a class="AcademyPagination-item AcademyPagination-next textType-txt textSize-txt-small  red bg-white" href="<?php echo $courses->pagination()->prevPageURL() ?>">newer posts</a>
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
			<ul class="Course-tags">
				<?php foreach($tags as $tag): ?>
					<li class="Course-tag">
						<a class="Course-tagLink colorWhite" href="<?php echo $page->url() . '/tag:' . $tag; ?>">
							<?php echo html($tag) ?>
						</a>
					</li>
				<?php endforeach ?>
			</ul>
		</div>


	</div>

	</main>

<?php snippet('footer') ?>
