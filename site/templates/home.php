<?php snippet('header') ?>

<main class="home minHeight100">

	<section class="section breath gradient-green">
		<div class="fitToContent">

			<h1 class="white centered marginBottom30 marginTop30">
				<span class="internal_header">
					<?php echo $page->getStartedTagline()->kirbytextSans(); ?>
				</span>
			</h1>

			<?php snippet('demo-home') ?>

			<div class="textSize-txt-large text-center marginTop60">
				<div class="marginTop30 row">
					<div class="columns large-9 medium-9">
						<input id="emailSignUp" type="text" placeholder="Your email" class="form-input Newsletter-name" style="height:50px"/>
					</div>
					<a class="NewsletterInput-submit callToAction medium columns large-3 medium-3"
						onclick="ga('send', 'event', 'Home', 'Click', 'CTA1');location.href='https://app.prototypo.io/#/signup?emailSignUp=' + document.getElementById('emailSignUp').value;">
					<?php echo $page->getStartedButtonLabel()->kirbytextSans(); ?></a>
				</div>
			</div>

			<h2 class="white marginTop60">
				<?php echo $page->Title1()->kirbytextSans(); ?>
			</h2>
			<p class="white bold medium">
				<?php echo $page->Content1(); ?>
			</p>



		</div>

	</section>

	<section class="section bg-white">
		<div class="">
			<h2 class="red marginBottom30">
				<?php echo $page->Title2()->kirbytextSans(); ?>
			</h2>
			<p class="black fitToContent marginBottom60">
				<?php echo $page->Content2()->kirbytextSans(); ?>
			</p>

			<?php
				$steps = yaml($page->steps());
				$i = 1;
			?>

			<div class="steps text-left row" style="max-width: 100%;">

				<div class="columns large-2 medium-1 small-1">&nbsp;</div>

				<div class="columns large-4 medium-11 small-11">
					<?php  foreach($steps as $step): ?>

							<div class="content ">
								<?php if (!empty($step['title'])) : ?>
									<h3 class="black marginTop30 marginBottom15 medium">
										<span class="red bold"><?php echo $i; ?></span>
										<?php echo $step['title']; ?>
									</h3>
								<?php endif; ?>

								<?php if (!empty($step['content'])) : ?>
									<p class="black marginBottom30"><?php echo $step['content']; ?></p>
								<?php endif; ?>
							</div>

							<div class="hide-for-large-up marginTop15 marginBottom60">
								<?php if (!empty($step['cover'])) : ?>
									<img style="width:90%" src="<?php echo url('content/'.$page->dirname().'/'.$step['cover']); ?>" alt="Prototypo: <?php echo $step['title']; ?>" title="Prototypo: <?php echo $step['title']; ?>">
								<?php endif; ?>
							</div>

						<?php $i++; ?>
					<?php endforeach; ?>

					<div class="textSize-txt-large marginTop60">
						<div class="marginTop30">
							<a href="https://app.prototypo.io/#/signup" class="callToAction medium" onclick="ga('send', 'event', 'Home', 'Click', 'CTA2');">
								<?php echo $page->CTA2()->kirbytextSans(); ?>
							</a>
						</div>
					</div>

				</div>

				<div class="columns large-6 medium-12 small-12 image show-for-large-up">
					<?php  foreach($steps as $step): ?>
						<?php if (!empty($step['cover'])) : ?>
							<img src="<?php echo url('content/'.$page->dirname().'/'.$step['cover']); ?>" alt="Prototypo: <?php echo $step['title']; ?>" title="Prototypo: <?php echo $step['title']; ?>">
						<?php endif; ?>
					<?php endforeach; ?>
				</div>

			</div>



		</div>
	</section>


	<section class="section bg-white gradient-yellow">
		<div class="fitToContent">
			<h2 class="red">
				<?php echo $page->Title3()->kirbytextSans(); ?>
			</h2>

			<div class="home-testimonials clearfix marginBottom60">
				<?php $testimonials = yaml($page->testimonials()); ?>
				<?php foreach($testimonials as $testimonial): ?>
					<?php if (!empty($testimonial['quote'])) : ?>
						<h3 class="dark-grey">
							“<?php echo $testimonial['quote']; ?>”
							<?php if (!empty($testimonial['name'])) : ?>
								<a target="_blank" href="<?php echo $testimonial['url']; ?>">
									<span class="red">
										<img alt="<?php echo $testimonial['name']; ?>" src="<?php echo url('content/'.$page->dirname().'/'.$testimonial['logo']); ?>">
									</span>
								</a>
							<?php endif; ?>
						</h3>
					<?php endif; ?>

				<?php endforeach; ?>
			</div>

			<p class="black">
				<?php echo $page->Content3()->kirbytextSans(); ?>
			</p>

			<div class="textSize-txt-large text-center marginTop60">
				<div class="marginTop30">
					<a href="https://app.prototypo.io/#/signup" class="callToAction medium" onclick="ga('send', 'event', 'Home', 'Click', 'CTA3');">
						<?php echo $page->CTA3()->kirbytextSans(); ?>
					</a>
				</div>
			</div>

		</div>
	</section>




	<section class="section gradient-black">
		<div class="fitToContent">
			<h2 class="red">
				<?php echo $page->Title4()->kirbytextSans(); ?>
			</h2>

			<ul class="small-block-grid-1 medium-block-grid-2">
				<?php $features = yaml($page->features()); ?>
				<?php foreach($features as $feature): ?>
					<li class="medium-block-grid-2 home-feature">
						<div class="">
							<img src="<?php echo url('content/'.$page->dirname().'/'.$feature['featureimg']); ?>" class="Section-featuresPicto" alt="Prototypo: <?php echo $feature['featurename']; ?>" title="Prototypo: <?php echo $feature['featurename']; ?>">
						</div>
						<div class="">
							<h3 class="white marginTop30 marginBottom15"><?php echo $feature['featurename']; ?></h3>
							<p class="white">
								<?php echo $feature['featuredescription']; ?>
							</p>
						</div>
					</li>

				<?php endforeach; ?>
			</ul>

			<p class="dark-grey">
				<?php echo $page->Content4()->kirbytextSans(); ?>
			</p>

			<div class="textSize-txt-large text-center marginTop60">
				<div class="marginTop30 row">
					<div class="columns large-9 medium-9">
						<input id="emailSignUpBot" type="text" placeholder="Your email" class="form-input Newsletter-name" style="height:50px"/>
					</div>
					<a class="NewsletterInput-submit callToAction medium columns large-3 medium-3"
						onclick="ga('send', 'event', 'Home', 'Click', 'CTA1');location.href='https://app.prototypo.io/#/signup?emailSignUp=' + document.getElementById('emailSignUpBot').value;">
					<?php echo $page->CTA4()->kirbytextSans(); ?>
					</a>
				</div>
			</div>

		</div>
	</section>

</main>
<?php snippet('footer') ?>
