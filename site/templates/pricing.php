<?php snippet('header') ?>
<main class="PageContent Pricing showAnnualBilling">
	<div class="PricingItemFree" style="background-image:url(<?php
		echo $page->file($page->headerImg())->url(); ?>)">
		<div class="PricingItemFree-wrap">
			<header class="PageHeader text-center fitToContent marginTop60">
				<h1 class="textType-title textSize-title-large colorWhite">
					<?php echo $page->mainTitle()->kirbytextSans(); ?>
				</h1>

				<?php if($page->subtitle()->kirbytextSans()->isNotEmpty()): ?>
					<h2 class="Section-wrapTxt textType-txt marginTop30 marginBottom15 colorBrightest text-center textSize-title-medium textType-subtitle">
						<?php echo $page->subtitle()->kirbytextSans(); ?>
					</h2>
				<?php endif ?>

			</header>
		</div>
	</div>
	<div class="fitToContent">

		<?php if($page->descriptionPromo()->isNotEmpty()): ?>
			<h2 class="txt-promo Section-wrapTxt textType-txt marginTop30 marginBottom15 colorBrightest text-center textSize-title-medium textType-subtitle">
				<?php echo $page->descriptionPromo(); ?>
			</h2>
		<?php endif ?>

		<ul class="small-block-grid-1 medium-block-grid-4 large-block-grid-4 PricingTable marginTop60">
			<?php
				$packs = yaml($page->packs());
				foreach($packs as $id => $pack):
			?>
			<li class="PricingItem">
				<div class="PricingItem-wrap">

					<div class="PricingItem-header">

						<h2 class="PricingItem-packtitle textType-txt textSize-txt-small">
							<?php echo $pack['packname']; ?>
						</h2>

						<p class="PricingItem-title textType-txt textSize-title-small colorSecondBackgroundColor">
							<?php if ($pack['price'] === ''): ?>
								<img src="<?php echo url('assets/img/Enterprise.svg'); ?>" alt="">
							<?php else: ?>
									<span class="PricingItem-priceBefore textSize-txt-large">€/$</span>

									<span class="PricingItem-price textSize-title-xlarge">
										<?php
											if (isset( $pack['promo'] ) && $pack['promo'] != '' ):
												echo '<span class="solded">' . $pack['price'] . '</span>';
												echo $pack['promo'];
											else:
												echo $pack['price'];
											endif;
										?>
									</span>

									<span class="PricingItem-priceAfter textSize-txt-medium">
										<?php
											if ( str::contains($pack['packname'], 'monthly', $i = true) ):
												echo '/mo. *';
											elseif ( str::contains($pack['packname'], 'annual', $i = true) ):
												echo '/yr. *';
											else:
												echo '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
											endif;
										?>
									</span>

							<?php endif; ?>
						</p>

						<p class="textType-txt textSize-txt-small marginTop15 red">
							<?php echo $pack['baseline']; ?>
						</p>

					</div>

					<div class="PricingItem-infos textType-subtxt colorDarkGray">

						<div class="PricingItem-pack textType-txt textSize-txt-medium">
							<?php echo nl2br($pack['options']); ?>
						</div>

						<div class="PricingItem-getStarted">
							<?php
								$subdomain = c::get('env') === 'dev' ? 'dev' : 'app';
								$hash = str::contains($pack['packname'], 'free', $i = true) ? '/signup' : '/account/create';

								if ( str::contains($pack['packname'], 'schools/agencies', $i = true) ):
									echo "<a href=\"mailto:contact@prototypo.io\" class=\"callToAction \">{$pack['button']}</a>";
								else:
									$packNameId = null;
									switch($pack['packname']) {
										case 'Monthly billing' :
											$packNameId = 'personal_monthly';
											break;
										case 'Annual billing' :
											$packNameId = 'personal_annual_99';
											break;
										default:
											$packNameId = null;
											break;
									}

									if ($packNameId):
										echo "<a href=\"https://{$subdomain}.prototypo.io/#{$hash}?fromWebsite=true&plan={$packNameId}\" name=\"{$pack['packname']}\" class=\"choose-plan subscribe-page billing callToAction\">{$pack['button']}</a>";
									else:
										echo "<a href=\"https://{$subdomain}.prototypo.io/#{$hash}\" name=\"{$pack['packname']}\" class=\"choose-plan subscribe-page billing callToAction\">{$pack['button']}</a>";
									endif;
								endif;
							?>
						</div>

					</div>
				</div>
			</li>
			<?php
				endforeach;
				?>
		</ul>

		<div class="Section-wrapTxt textType-txt textSize-txt-large marginTop60 colorBrightest text-center">
			<?php echo $page->TxtAfter()->kirbytext(); ?>
		</div>

		<h2 class="big bold text-center marginTop60 marginBottom60 white">Some happy users!</h2>

		<ul class="marginTop60 testimonials">
			<?php
				$users = yaml($page->users());
				foreach($users as $id => $user):
			?>
			<li class="">
				<img  class="portrait" src="<?php echo $page->file($user['portrait'])->url(); ?>" alt="" />
				<h3><?php echo $user['name']; ?></h3>
				<p class="testimonials_description"><?php echo $user['infos']; ?></p>
				<p>“<?php echo $user['quote']; ?>”</p>
			</li>
			<?php endforeach; ?>
		</ul>

		<h2 class="big bold text-center marginTop60 marginBottom60 white">Any questions?</h2>

		<ul class="marginTop60 marginBottom60 faq">
			<?php
				$faq = yaml($page->faq());
				foreach($faq as $id => $question):
			?>
			<li>
				<div class="">
					<p class="anyquestion_question"><?php echo $question['question']; ?></p>
					<p><?php echo $question['answer']; ?></p>
				</div>
			</li>
			<?php endforeach; ?>
		</ul>

		<h2 class="big bold text-center marginTop60 marginBottom60 white">Need help?</h2>

		<div class="textarea">
			<textarea id="question" name="name" rows="8" cols="40" placeholder="If you have any questions about the app, the features, etc. just ask us!" class="marginTop30"></textarea>
			<button onclick="javascript:sendMail()" id="mailto" type="button" name="button" class="marginTop15">Send</button>
		</div>

		<script>
			function sendMail() {
			    var yourMessage = document.getElementById("question").value;
			    document.location.href = "mailto:contact@prototypo.io?subject=I have a question about…" + "&body=" + encodeURIComponent(yourMessage);
			}
		</script>


	</div>
</main>
<?php snippet('footer') ?>
