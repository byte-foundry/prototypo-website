<?php snippet('header') ?>

	<main class="main ">
		<section class="Section Section-parametricDesignTool gradient-yellow">

			<div class="fitToContent">

				<header class="PageHeader text-left fitToContent">
					<h1 class="textType-title textSize-title-large"><?php echo $page->title()->html(); ?></h1>
				</header>

				<article class="Article Section-fontsItemWrap">

					<div class="Article-content textType-txt textSize-txt-large">
						<?php echo $page->text()->kirbytext() ?>


						<div class="marginTop60">
							<h2>Show time!</h2>
							<iframe src="https://player.vimeo.com/video/140628893?badge=0&byline=0&color=49E4A9" style="width:100%; height: 100%; min-height:300px;" allowfullscreen></iframe>
						</div>

						<div class="demo">
							<h2>A quick demo</h2>
							<div class="DemoControls" style="position: relative; height: auto; margin-left: -60px;">
								<div class="DemoControls-PotentiometerItem">
									<img alt="" src="<?php echo url('assets/img/pictos/pictoDemoHomeControlsWeight.svg'); ?>" class="DemoControls-PotentiometerPicto">
									<input type="range" data-param="thickness" class="DemoControls-Potentiometer" min="20" max="160" value="85" step="1" />
								</div>

								<div class="DemoControls-PotentiometerItem">
									<img alt="" src="<?php echo url('assets/img/pictos/pictoDemoHomeControlsContrast.svg'); ?>" class="DemoControls-PotentiometerPicto">
									<input type="range" data-param="_contrast" class="DemoControls-Potentiometer" min="-2" max="-0.15" value="-1" step="0.01" />
								</div>

								<div class="DemoControls-PotentiometerItem">
									<img alt="" src="<?php echo url('assets/img/pictos/pictoDemoHomeControlsHeight.svg'); ?>" class="DemoControls-PotentiometerPicto">
									<input type="range" data-param="serifHeight" class="DemoControls-Potentiometer" min="0" max="70" value="20" step="1" />
								</div>

								<div class="DemoControls-PotentiometerItem">
									<img alt="" src="<?php echo url('assets/img/pictos/pictoDemoHomeControlsSerif.svg'); ?>" class="DemoControls-PotentiometerPicto">
									<input type="range" data-param="serifWidth" class="DemoControls-Potentiometer" min="0" max="100" value="65" step="1" />
								</div>
							</div><!-- .DemoControls -->

							<canvas id="DemoCanvas" class="DemoCanvas" style="position: relative; top: 0; left: 40%"></canvas>
						</div>

						<div class="marginTop60 pressDocs clearfix">
							<h2>Downloadable assets and documentation</h2>
							<?php foreach($page->files() as $file): ?>
								<a href="<?php echo $file->url() ?>"><?php echo $file->filename() ?></a>
							<?php endforeach ?>
						</div>

						<div class="marginTop60">
							<h2>They talk about Prototypo</h2>
							<?php $articles = $page->children(); ?>
							<div class="pressArticles row expanded table">
								<?php foreach($articles as $article): ?>
									<a href="<?php echo $article->urlblog(); ?>" target="_blank">
										<div class="table-row">
											<div class="table-cell columns large-4 medium-12">
												<h4><?php echo $article->siteblog(); ?></h4>
											</div>
											<div class="table-cell columns large-7 medium-12">
												<?php echo $article->title(); ?>
											</div>
											<div class="table-cell columns large-1 show-for-large-up">
												<?php echo $article->lang(); ?>
											</div>
										</div class="table-row">
									</a>
								<?php endforeach; ?>
							</div>
						</div>
					</div>

				</article>

				<section class="Section Section-newsletter support-newsletter hide-for-print">

					<header class="SectionHeader text-center fitToContent">
						<h3 class="textType-subtitle textSize-title-small colorBrightest">Subscribe to our newsletter</h3>
					</header>

					<div class="Section-wrapTxt textType-txt fitToContent">
						<form action="http://sendy.kuem.me.uk/subscribe" method="POST" accept-charset="utf-8" class="form-small Newsletter text-center">
							<input class="form-input form-newsletter-input bg-grey Newsletter-name" type="text" name="name" id="name" placeholder="Your name">
							<input class="form-input form-newsletter-input bg-grey Newsletter-email" type="text" name="email" id="email" placeholder="Your email">
							<input type="hidden" name="list" value="Y184XoR6ydCgo8ar4qA892rg">
							<input class="form-newsletter-input NewsletterInput-submit callToAction" type="submit" id="submit" name="submit" value="Keep me posted">
						</form>
					</div>

				</section>

			</div>

		</section>

	</main>

<?php snippet('footer') ?>
