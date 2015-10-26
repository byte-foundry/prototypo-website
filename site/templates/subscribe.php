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

					<div class="Section-wrapTxt textType-txt">
						<form action="" method="POST" accept-charset="utf-8" class="subscribe">
							<?php
								$pricing = $page->parent();
								$packs = yaml($pricing->packs());
							?>
							<?php snippet('plans', array('packs' => $packs)) ?>
							<div class="no-hoodie-account">
								<p class="textSize-title-small marginTop60 marginBottom30">
									Your details:
									<a href="/account" class="callToAction right">I already have an account</a>
								</p>
								<div class="not-logged-in-form no-hoodie-account">
									<div class="register">
										<div class="w50 left">
											<label for="email">Your email</label>
											<input type="email" name="email" id="email" placeholder="mj@domain.com" required="required">
										</div>
										<div class="w50 left">
											<label for="password">Your password</label>
											<input type="password" name="password" id="password" placeholder="abc123" required="required">
										</div>
										<label for="VAT">Your VAT number (optionnal)</label>
										<input type="text" name="VAT" id="VAT" placeholder="AB01234567890">
										<div class="marginTop15 marginBottom15">
											<input type="checkbox" id="tos-checkbox"></input><span class="tos-text">I agree with the <a href="/cgu" class="tos-link">terms of services</a></span>
										</div>
										<label class="hidden error" id="signin-error"></label>
									</div>
								</div>
							</div>
							<div class="logged-in-form clearfix hoodie-account subscribe">
								<p class="textSize-title-small ">Your details:</p>
								<div class="marginTop15">
									<div class="w50 left">
										<label for="email">Your email</label>
										<div class="user-infos marginTop15" id="logged-in-email"></div>
									</div>
									<div class="w50 left">
										<label for="subscription">Your current subscription</label>
										<div class="user-infos marginTop15" id="logged-in-subscription"></div>
									</div>
									<button id="change-subscription" class="change-subscription-toggle call-danger callToAction marginTop30 right clearfix account-plan-toggle-target">Change subscription</button>
								</div>
							</div>
							<div id="card-form">
								<p class="textSize-title-small marginBottom30">Payment details:</p>
								<?php snippet('card') ?>
							</div>
							<label class="hidden error" id="stripe-error"></label>
							<button class="NewsletterInput-submit right width100 callToAction call-success" id="submit" name="submit" >Subscribe to Prototypo</button>
						</form>
					</div>

				</section>

			</div>

		</section>

	</main>

<?php snippet('footer') ?>
