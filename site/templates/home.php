<?php snippet('header') ?>

<main class="home minHeight100">

	<div class="Section Section-homepage hide-for-print">
		<h1 class="Section-homepageGetStartedLineTitle colorWhite marginBottom30">
			Prototypo <span class="internal_header"><?php echo $page->getStartedTagline()->kirbytextSans(); ?></span>
		</h1>
		<section>

			<div class="Section-homepageWrap">

				<div class="Section-homepageGetStartedLine text-center marginBottom30">
				</div>

				<div class="DemoHome">

					<div class="toggleSwitch hide" style="width:100%; height: 100%;">
						<iframe id="videoplayer" data-src="//player.vimeo.com/video/140628893?badge=0&byline=0&color=49E4A9&autoplay=1" style="width:100%; height: 100%;" allowfullscreen></iframe>
					</div>

					<div class="toggleSwitch">
						<div class="DemoHome-windowBackground"></div>
						<div class="DemoHome-windowTopBar"></div>

						<img class="DemoHome-windowLogo" src="<?php echo url('assets/img/prototypoIcon.svg'); ?>" alt="">

						<div class="DemoHome-windowButton DemoHome-windowButtonRed"></div>
						<div class="DemoHome-windowButton DemoHome-windowButtonYellow"></div>
						<div class="DemoHome-windowButton DemoHome-windowButtonGreen"></div>

						<div class="DemoControls">
							<div class="DemoControls-PotentiometerItem">
								<img src="<?php echo url('assets/img/pictos/pictoDemoHomeControlsWeight.svg'); ?>" class="DemoControls-PotentiometerPicto" alt="">
								<div id="test-me" class="test-me">
									<input type="range" data-param="thickness" class="DemoControls-Potentiometer" min="20" max="160" value="85" step="1" />
								</div>
							</div>

							<div class="DemoControls-PotentiometerItem">
								<img src="<?php echo url('assets/img/pictos/pictoDemoHomeControlsContrast.svg'); ?>" class="DemoControls-PotentiometerPicto" alt="">
								<input type="range" data-param="_contrast" class="DemoControls-Potentiometer" min="-2" max="-0.15" value="-1" step="0.01" />
							</div>

							<div class="DemoControls-PotentiometerItem">
								<img src="<?php echo url('assets/img/pictos/pictoDemoHomeControlsHeight.svg'); ?>" class="DemoControls-PotentiometerPicto" alt="">
								<input type="range" data-param="serifHeight" class="DemoControls-Potentiometer" min="0" max="70" value="20" step="1" />
							</div>

							<div class="DemoControls-PotentiometerItem">
								<img src="<?php echo url('assets/img/pictos/pictoDemoHomeControlsSerif.svg'); ?>" class="DemoControls-PotentiometerPicto" alt="">
								<input type="range" data-param="serifWidth" class="DemoControls-Potentiometer" min="0" max="100" value="65" step="1" />
							</div>
						</div><!-- .DemoControls -->



						<canvas id="DemoCanvas" class="DemoCanvas"></canvas>

						<div class="Infobox Infobox-DemoHomeInfoboxLeft text-center hide-for-small-only">
							<?php echo $page->infobox1()->kirbytextSans() ?>
						</div>

						<div class="Infobox Infobox-DemoHomeInfoboxRight text-center hide-for-small-only">
							<?php echo $page->infobox2()->kirbytextSans() ?>
						</div>
					</div>


				</div><!-- .DemoHome -->



				<div class="Section-homepageDiscoverFeaturesLine text-center textSize-txt-large">
					<!-- <?php echo $page->textLineUnderDemo()->kirbytext(); ?> -->
					<fieldset class="switch round large override marginTop30" tabindex="0">
						<span class="switch-label">Demo</span>
						<input id="switchDemo" class="switchAction" type="checkbox">
						<label for="switchDemo"></label>
						<span class="switch-label">Video</span>
					</fieldset>

					<div class="textSize-txt-large text-center marginTop60">
						<h2 class="textType-subtitle textSize-title-small colorBrightest"><?php echo $page->getintothefullapp()->kirbytextSans(); ?></h2>
						<div class="marginTop30">
							<!-- <form class="" action="http://sendy.kuem.me.uk/subscribe" method="post">
								<input class="Newsletter-email NewsletterInput-text small-full-width" type="text" name="email" id="get-app-email" placeholder="<?php echo $page->newsletterMailPlaceholder(); ?>">
								<input type="hidden" name="list" value="KokibYEZQXsvsf8OkSnUww">
								<input class="NewsletterInput-submit callToAction" type="submit" id="get-app-submit" name="submit" value="<?php echo $page->getStartedButtonLabel()->kirbytextSans(); ?>">
							</form> -->
							<a href="pricing" class="NewsletterInput-submit callToAction" id="get-app-submit"><?php echo $page->getStartedButtonLabel()->kirbytextSans(); ?></a>
						</div>
					</div>
				</div>

			</div>



		</section>
	</div>


	<div class="Section-sepa Section-sepaAfter"></div>

	<section class="Section Section-parametricDesignTool colorDarkest text-center">
		<header class="SectionHeader fitToContent">
			<h2 class="textType-title textSize-title-large"><?php echo $page->section1Title()->kirbytextSans(); ?></h2>
			<h3 class="Section-parametricDesignToolSubtitle textType-subtitle textSize-title-small colorDark"><?php echo $page->section1Subtitle()->kirbytextSans(); ?></h3>
		</header>

		<div class="Section-wrapTxt textType-txt textSize-txt-large marginTop30 colorDarkest fitToContent">


			<!-- <?php $fonts = yaml($page->fonts());?>

			<style>
				<?php if (!empty($fonts[0]['fontfile'])): ?>
					@font-face {
						font-family: "Font1";
						src: url('<?php echo url('/content/'.$page->dirname().'/'.$fonts[0]['fontfile']); ?>');
					}
				<?php endif; if (!empty($fonts[1]['fontfile'])): ?>
					@font-face {
						font-family: "Font2";
						src: url('<?php echo url('/content/'.$page->dirname().'/'.$fonts[1]['fontfile']); ?>');
					}
				<?php endif; if (!empty($fonts[2]['fontfile'])): ?>
					@font-face {
						font-family: "Font3";
						src: url('<?php echo url('/content/'.$page->dirname().'/'.$fonts[2]['fontfile']) ?>');
					}
				<?php endif; ?>
			</style> -->

		<ul class="Section-fonts small-block-grid-1 medium-block-grid-3 large-block-grid-3">
			<li class="Section-fontsItem text-center">
				<div class="Section-fontsItemWrap radius">
					<!-- <div class="Section-fontsView colorDarkest" style="font-family:'Font1', inherit; font-size:<?php echo $fonts[0]['fontsize']; ?>px; line-height:<?php echo $fonts[0]['fontlineheight']; ?>px"><?php echo $fonts[0]['fontstring']; ?></div> -->
					<div class="Section-fontsView colorDarkest">
						<img src="<?php echo url('/content/'.$page->dirname().'/'.$fonts[0]['fontfile']); ?>" alt="<?php echo $fonts[0]['fontname']; ?>" />
					</div>
					<h4 class="Section-fontsName textType-subtitle textSize-txt-xlarge colorDarkest"><?php echo $fonts[0]['fontname']; ?></h4>

					<div class="Section-fontsInfos">
						<div class="Section-fontsDescription textType-subtxt textSize-txt-medium colorDark"><?php echo $fonts[0]['fontdescription']; ?></div>
						<!-- Remove for the pre-release website
						<a href="<?php if (!empty($fonts[0]['fontfile'])) echo url('/content/'.$page->dirname().'/'.$fonts[0]['fontfile']) ?>"
						 class="callToAction Section-fontsDownload text-center">
						<?php echo $page->downloadButtonLabel()->kirbytext(); ?>
						</a> -->
					</div>
				</div>
			</li>

			<li class="Section-fontsItem text-center">
				<div class="Section-fontsItemWrap">
					<!-- <div class="Section-fontsView colorDarkest" style="font-family:'Font2', inherit; font-size:<?php echo $fonts[1]['fontsize']; ?>px; line-height:<?php echo $fonts[1]['fontlineheight']; ?>px"><?php echo $fonts[1]['fontstring']; ?></div> -->
					<div class="Section-fontsView colorDarkest">
						<img src="<?php echo url('/content/'.$page->dirname().'/'.$fonts[1]['fontfile']); ?>" alt="<?php echo $fonts[1]['fontname']; ?>" />
					</div>
					<h4 class="Section-fontsName textType-subtitle textSize-txt-xlarge colorDarkest"><?php echo $fonts[1]['fontname']; ?></h4>

					<div class="Section-fontsInfos">
						<div class="Section-fontsDescription textType-subtxt textSize-txt-medium colorDark"><?php echo $fonts[1]['fontdescription']; ?></div>
						<!-- Remove for the pre-release website
						<a href="<?php if (!empty($fonts[1]['fontfile'])) echo url('/content/'.$page->dirname().'/'.$fonts[1]['fontfile']) ?>"
						 class="callToAction Section-fontsDownload text-center">
						<?php echo $page->downloadButtonLabel()->kirbytext(); ?>
						</a> -->
					</div>
				</div>
			</li>

			<li class="Section-fontsItem text-center">
				<div class="Section-fontsItemWrap">
					<!-- <div class="Section-fontsView colorDarkest" style="font-family:'Font2', inherit; font-size:<?php echo $fonts[2]['fontsize']; ?>px; line-height:<?php echo $fonts[2]['fontlineheight']; ?>px"><?php echo $fonts[2]['fontstring']; ?></div> -->
					<div class="Section-fontsView colorDarkest">
						<img src="<?php echo url('/content/'.$page->dirname().'/'.$fonts[2]['fontfile']); ?>" alt="<?php echo $fonts[2]['fontname']; ?>" />
					</div>
					<h4 class="Section-fontsName textType-subtitle textSize-txt-xlarge colorDarkest"><?php echo $fonts[2]['fontname']; ?></h4>

				<div class="Section-fontsInfos">
					<div class="Section-fontsDescription textType-subtxt textSize-txt-medium colorDark"><?php echo $fonts[2]['fontdescription']; ?></div>
					<!-- Remove for the pre-release website
					<a href="<?php if (!empty($fonts[2]['fontfile'])) echo url('/content/'.$page->dirname().'/'.$fonts[2]['fontfile']) ?>"
					 class="callToAction Section-fontsDownload text-center">
					<?php echo $page->downloadButtonLabel()->kirbytext(); ?>
					</a> -->
				</div>
				</div>
			</li>
		</ul>
		<div class="marginTop30 textSize-txt-small colorDarkest">
			<?php echo $page->section1Txt()->kirbytext(); ?>
		</div>
		</div>
	</section>

		<div class="Section-sepa Section-sepaAfter"></div>

		<section class="Section Section-features">

		<header class="SectionHeader text-left fitToContent">
			<h2 class="textType-title textSize-title-large colorLighterGray small-only-text-center"><?php echo $page->section2Title()->kirbytextSans(); ?></h2>
			<h3 class="Section-featuresSubtitle textType-subtitle textSize-title-small colorLightGray small-only-text-center"><?php echo $page->section2Subtitle()->kirbytextSans(); ?></h3>
		</header>

		<div class="Section-wrapTxt textType-txt fitToContent">

			<ul class="small-block-grid-1 medium-block-grid-3 large-block-grid-3">

				<?php
					$features = yaml($page->features());
					foreach($features as $feature) :
				?>

					<li class="Section-featuresItem text-center">
						<div class="Section-featuresPictoWrap">
							<img src="<?php echo url('content/'.$page->dirname().'/'.$feature['featureimg']); ?>" class="Section-featuresPicto" alt="">
						</div>
						<h4 class="Section-featuresTitle colorWhite textType-subtitle textSize-txt-large <?php if ( isset( $feature['featuredone'] ) ) echo ' done' ?>"><?php echo $feature['featurename']; ?></h4>

						<div class="Section-featuresDescription textType-subtxt textSize-txt-small colorBrightest">
							<?php echo $feature['featuredescription']; ?>
						</div>
					</li>

				<?php endforeach; ?>
			</ul>

			<div class="Section-featuresDescription textType-subtxt textSize-txt-xlarge text-center colorBrightest marginTop30 marginBottom30">
				<?php echo $page->section2Text()->kirbytextSans(); ?>
			</div>

		</div>

		</section>

		<div class="Section-sepa Section-sepaAfter"></div>

		<section class="Section Section-theytalkaboutus">

		<div class="text-center fitToContent">
			<h2 class="textType-title textSize-title-xsmall colorGray small-only-text-center"><?php echo $page->section4Title()->kirbytextSans(); ?></h2>
			<h3 class="textType-subtitle textSize-title-xsmall colorGray small-only-text-center"><?php echo $page->section4Subtitle()->kirbytextSans(); ?></h3>
		</div>

		<div class="Section-wrapTxt textType-txt fitToContent text-center">

			<ul class="small-block-grid-3 medium-block-grid-5">

			<?php
			$theytalkaboutus = yaml($page->theytalkaboutus());
			foreach($theytalkaboutus as $ttau) :
			?>

				<li class="Section-theytalkaboutusItem text-center">
					<a class="Section-theytalkaboutusPictoWrap" href="<?php echo $ttau['ttauurl']; ?>" target="_blank">
						<span class="Section-theytalkaboutusHelper"></span>
						<img alt="<?php echo $ttau['ttauname']; ?>" src="<?php echo url('content/'.$page->dirname().'/'.$ttau['ttauimg']); ?>" class="Section-theytalkaboutusPicto">
					</a>
				</li>

			<?php endforeach; ?>
			</ul>

		</div>

		</section>


		<div class="Section-sepa Section-sepaAfter"></div>

		<section id="subscribed" class="Section Section-subscribed hide-for-print text-center">
			<h2 class="textType-title textSize-title-medium colorWhite"><?php echo $page->sectionSubscribedTitle()->kirbytextSans(); ?></h2>
			<h3 class="textType-subtitle textSize-title-small colorBrightest marginTop30">
				<?php echo $page->SectionSubscribedSubtitle()->kirbytextSans(); ?>
			</h3>
		</section>

		<section id="newsletter" class="Section Section-newsletter hide-for-print">

			<header class="SectionHeader text-center fitToContent">
				<h2 class="textType-title textSize-title-medium colorWhite"><?php echo $page->section3Title()->kirbytextSans(); ?></h2>
				<h3 class="textType-subtitle textSize-title-small colorBrightest"><?php echo $page->section3Subtitle()->kirbytextSans(); ?></h3>
			</header>

			<div class="Section-wrapTxt textType-txt fitToContent">
				<form action="http://sendy.kuem.me.uk/subscribe" method="POST" accept-charset="utf-8" class="form-small Newsletter text-center">
					<input class="form-input form-newsletter-input Newsletter-name" type="text" name="name" id="name" placeholder="<?php echo $page->newsletterNamePlaceholder(); ?>">
					<input class="form-input form-newsletter-input Newsletter-email" type="text" name="email" id="email" placeholder="<?php echo $page->newsletterMailPlaceholder(); ?>">
					<input type="hidden" name="list" value="ytAwOnCM1u2l9ak9zwB7bw">
					<input class="form-newsletter-input NewsletterInput-submit callToAction" type="submit" id="submit" name="submit" value="<?php echo $page->newsletterSubmitLabel(); ?>">
				</form>
			</div>

		</section>

</main>
<?php snippet('footer') ?>
