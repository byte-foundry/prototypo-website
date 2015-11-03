<?php snippet('header') ?>

	<main class="main" role="main">
		<section class="Section Section-parametricDesignTool">

			<div class="fitToContent">

				<header class="PageHeader text-left fitToContent">
					<h1 class="textType-title textSize-title-large"><?php echo $page->title()->html(); ?></h1>
				</header>

				<section class="Article Section-fontsItemWrap">

					<div class="textType-txt textSize-txt-large marginTop30">
						<?php echo $page->text()->kirbytext() ?>
					</div>

					<div id="payment-container" class="Section-wrapTxt textType-txt">
					</div>

				</section>

			</div>

		</section>

	</main>

<?php snippet('footer') ?>
