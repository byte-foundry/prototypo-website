<?php snippet('header') ?>

	<main class="main" role="main">
		<section class="Section Section-parametricDesignTool">

			<div class="fitToContent clearfix">
				<div class="no-account no-hoodie-account">
					<header class="PageHeader text-left fitToContent">
						<h1 class="textType-title textSize-title-large">Sign in</h1>
					</header>

					<section class="Article Section-fontsItemWrap">
						<div id="wrap-sign-in" class="signin subscribe no-account no-hoodie-account">
							<label for="login">Your email</label>
							<input type="text" id="email-sign-in" name="login" placeholder="mj@domain.com"></input>
							<label for="login">Password</label>
							<input type="password" id="password-sign-in" name="password" placeholder="abc123"></input>
							<label id="signin-error" for="" class="error hidden"></label>
							<label class="reset-password-toggle right marginBottom30 textSize-title-small colorGray">Forgotten your password?</label>
							<div class="marginTop30">
								<div id="sign-me-in" class="call-success callToAction marginBottom30 marginRight15">Sign in</div>
								<div class="call-danger callToAction marginBottom30"><a href="/pricing/subscribe" style="color:white">Sign up</a></div>
							</div>
						</div>
						<div id="wrap-reset-password" class="hidden subscribe">
							<label>Please fill the following input with the email address you've used to register.</label>
							<input type="text" id="email-reset-password" name="login" placeholder="mj@domain.com"></input>
							<label>We will send you a new password, and you will be able to change your password once connected in the profile panel.</label>
							<label id="hoodie-error" for="" class="error hidden"></label>
							<div id="hoodie-success" class="marginTop30 hidden">
								<label for="" class="success-message">A new password was sent to <span id="user-email"><span></label>
								<div class="reset-password-toggle call-success callToAction marginBottom30 marginRight15">Sign in</div>
							</div>
							<div id="reset-password-actions" class="marginTop30">
								<div class="reset-password-toggle call-danger callToAction marginBottom30 marginRight15">Cancel</div>
								<div id="reset-password" class="call-error callToAction marginBottom30 marginRight15">Reset</div>
							</div>
						</div>
					</section>
				</div>

				<div class="logged-in-form hoodie-account">
					<header class="PageHeader text-left fitToContent">
						<h1 class="textType-title textSize-title-large"><?php echo $page->title()->html(); ?></h1>
					</header>

					<section class="Article Section-fontsItemWrap">

						<div class="clearfix">
							<a href="http://app.prototypo.io" class="NewsletterInput-submit right callToAction call-success">Go to Prototypo App</a>
						</div>

						<div class="textType-txt textSize-txt-large marginTop30">
							<?php echo $page->text()->kirbytext() ?>
						</div>


						<div class="clearfix">
							<div class="logged-in-form clearfix hoodie-account subscribe">
								<p class="textSize-title-small">Your details:</p>
								<div class="marginTop15">
									<div class="clearfix">
										<div class="w50 left">
											<label for="email">Your email</label>
											<div class="user-infos marginTop15" id="logged-in-email"></div>
										</div>
										<div class="w50 left">
											<label for="subscription">Your current subscription</label>
											<div class="user-infos marginTop15" id="logged-in-subscription"></div>
										</div>
									</div>
									<div class="marginTop15 clearfix subscription-date hidden">
										<label for="subscription">Subscription turnaroundeedoo</label>
										<div class="user-infos marginTop15" id="subscription-date"></div>
									</div>
									<div id="error-create-customer" class="textType-txt textSize-txt-large marginBottom30 general-infos hidden">
										There was an error during your subscription. We've subscribed your account to the Free subscription. To subscribe you will need to add a valid card at the bottom of the page and then subscribe to the launch plan.
									</div>
									<button id="change-subscription" class="change-subscription-toggle call-danger callToAction marginTop30 right clearfix account-plan-toggle-target">Change subscription</button>
								</div>
							</div>

							<div id="account-plan" class="subscribe hidden account-plan-toggle-target">
								<?php
									$packs = yaml($page->packs());
								?>
								<?php snippet('plans', array('packs' => $packs)) ?>

							</div>
							<div id="no-card-plan" class="hidden textType-txt textSize-txt-large marginBottom30 general-infos">
								You cannot change subscription without first setting up a payment card.
							</div>
							<label id="success-plan-message" for="" class="success-message hidden">You've successfuly changed your plan!</label>
							<button id="submit-subscription" class="account-plan-toggle-target hidden call-success callToAction marginTop30 right clearfix hidden marginLeft15">Change my subscription</button>
							<button class="change-subscription-toggle account-plan-toggle-target hidden call-error callToAction marginTop30 right clearfix hidden">Cancel</button>
						</div>


						<div class="marginTop30 subscribe">
							<p class="textSize-title-small marginBottom15">Payment details:</p>
							<div class="card-info clearfix" id="card-details">
								<div class="w50 left">
									<label>Card number</label>
									<div class="user-infos marginTop15">**** **** **** <span id="last-four">4242</span></div>
								</div>
								<div class="w50 left">
									<label>Expiration date</label>
									<div class="user-infos marginTop15"><span id="card-month">10</span>/<span id="card-year">2044</span></div>
								</div>
								<div class="success-message hidden" id="success-card-message">Card successfuly submitted</div>
								<button id="change-card" class="account-card-form-toggle-target change-card-toggle call-danger callToAction marginTop30 right">Change card</button>
							</div>
							<div id="no-card">
								You don't have any cards registered.
								<button id="change-card" class="account-card-form-toggle-target change-card-toggle call-danger callToAction marginTop30 right">Add a card</button>
							</div>
							<div id="account-card-form" class="subscribe account-card-form-toggle-target">
								<div id="card-form">
									<p class="textSize-title-small ">Change Card:</p>
									<?php snippet('card') ?>
									<button id="change-card-submit" class="call-success callToAction marginTop30">Change my card</button>
								</div>
							</div>
							<button id="" class="account-card-form-toggle-target change-card-toggle account-card-form-toggle-target hidden call-error callToAction marginTop30 right">Cancel</button>
						</div>

					</section>
				</div>

			</div>

		</section>

	</main>

<?php snippet('footer') ?>
