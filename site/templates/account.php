<?php snippet('header') ?>

	<main class="main" role="main">
		<section class="Section Section-parametricDesignTool">

			<div class="fitToContent clearfix">
				<div id="account-container">
				</div>
				<!--<div class="no-account no-hoodie-account">
					<header class="PageHeader text-left fitToContent">
						<h1 class="textType-title textSize-title-large">Sign in</h1>
					</header>

					<section class="Article Section-fontsItemWrap">
						<div id="wrap-sign-in" class="signin subscribe no-account no-hoodie-account">
							<label for="login">Your email:</label>
							<input type="text" id="email-sign-in" name="login" placeholder="mj@domain.com"></input>
							<label for="login">Password:</label>
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

					<div>
						<div class="account-tabs">
							<ul class="account-tabs-list clearfix">
								<li id="tab-user" class="account-tabs-list-item active">User</li>
								<li id="tab-account" class="account-tabs-list-item">Account</li>
								<li id="tab-app" class="account-tabs-list-item">App</li>
							</ul>
						</div>

						<section class="Article">

							<div class="clearfix">
								<a href="http://app.prototypo.io" class="NewsletterInput-submit marginTop15 right callToAction call-success">Go to Prototypo App</a>
							</div>

							<div class="textType-txt textSize-txt-large marginTop30">
								<?php echo $page->text()->kirbytext() ?>
							</div>

							<div id="target-tab-user" class="target-tab clearfix">
								<div class="logged-in-form clearfix hoodie-account subscribe">
									<p class="textSize-title-small">Your details:</p>
									<div class="marginTop15">
										<div class="clearfix">
											<label for="email">Your email:</label>
											<div class="user-infos marginTop15 marginBottom15" id="logged-in-email"></div>
										</div>

										<div id="wrap-change-password" class="change-password-toggle-target hidden subscribe marginBottom30 clearfix">
											<label for="current-password">Please fill your current password:</label>
											<input type="password" id="current-password" name="current-password" placeholder="******"></input>
											<div class="w50 left">
												<label for="change-password-1">New password (at least 6 characters):</label>
												<input type="password" id="new-password-1" name="change-password-1" placeholder="abc123"></input>
											</div>
											<div class="w50 left">
												<label for="change-password-2">Type your new password again, as confirmation:</label>
												<input type="password" id="new-password-2" name="change-password-2" placeholder="abc123"></input>
											</div>
											<label id="password-success" for="" class="success-message hidden"></label>
											<label id="password-error" for="" class="error hidden"></label>
											<div class="change-password-actions clearfix right marginTop15">
												<button class="change-password-toggle call-error callToAction marginRight15 account-plan-toggle-target">Cancel</button>
												<button id="change-password" class="call-success callToAction account-plan-toggle-target">Submit new password</button>
											</div>
											<div class="change-password-actions hidden clearfix right marginTop15">
												<button class="change-password-toggle call-error callToAction account-plan-toggle-target">Close</button>
											</div>
										</div>

										<p class="textSize-title-xsmall marginTop30 marginBottom30 colorDarkGray">All following details are optional:</p>
										<div class="clearfix ">
											<div class="w50 left">
												<label for="first-name">First name:</label>
												<input type="text" id="first-name" name="first-name" placeholder="MJ"></input>
											</div>
											<div class="w50 left">
												<label for="last-name">Last name:</label>
												<input type="text" id="last-name" name="last-name" placeholder="Cat"></input>
											</div>
										</div>
										<div class="w50 left">
											<label for="user-website">Your website:</label>
											<input type="text" id="user-website" name="user-website" placeholder="www.mywebsite.com"></input>
										</div>
										<div class="w50 left">
											<label for="user-twitter">Your Twitter:</label>
											<input type="text" id="user-twitter" name="user-twitter" placeholder="@mytwitter"></input>
										</div>

										<div class="clearfix right marginTop30">
											<button class="change-password-toggle call-danger callToAction change-password-toggle-target">Change password</button>
										</div>
									</div>
								</div>
							</div>

							<div id="target-tab-account" class="target-tab clearfix">
								<div class="subscribe">

									<div class="clearfix">
										<label for="subscription">Your current subscription</label>
										<div class="user-infos marginTop15 marginBottom15" id="logged-in-subscription"></div>
										<div class="subscription-date hidden">
											<label for="subscription">Subscription turnaround</label>
											<div class="user-infos marginTop15" id="subscription-date"></div>
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

									<div class="clearfix marginTop30">
										<div class="right">
											<label id="success-plan-message" for="" class="success-message hidden">You've successfuly changed your plan!</label>
											<button id="submit-subscription" class="account-plan-toggle-target hidden call-success callToAction marginTop30 right clearfix hidden marginLeft15">Change my subscription</button>
											<button class="change-subscription-toggle account-plan-toggle-target hidden call-error callToAction marginTop30 right clearfix hidden">Cancel</button>
											<button id="change-subscription" class="change-subscription-toggle call-danger callToAction account-plan-toggle-target">Change subscription</button>
										</div>
									</div>

									<div id="error-create-customer" class="textType-txt textSize-txt-large marginBottom30 general-infos hidden">
										There was an error during your subscription. We've subscribed your account to the Free subscription. To subscribe you will need to add a valid card at the bottom of the page and then subscribe to the launch plan.
									</div>

									<div class="clearfix marginTop30">
										<p class="textSize-title-small marginTop30 marginBottom15">Payment details:</p>
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
												<button id="change-card-submit" class="call-success callToAction marginTop30 right">Change my card</button>
												<button id="" class="account-card-form-toggle-target change-card-toggle account-card-form-toggle-target hidden call-error callToAction marginRight15 marginTop30 right">Cancel</button>
											</div>
										</div>
									</div>

									<div class="clearfix marginTop30">
										<p class="textSize-title-small marginBottom15">Your invoices:</p>
										<ul class="list marginTop30">
											<li class="list-item">
												<span class="list-item-date">Dec. 2015</span>
												<span class="list-item-text">in_171eCfEHNnZkutNMRKWwAHPN</span>
												<span class="list-item-download">Download</span>
											</li>
											<li class="list-item">
												<span class="list-item-date">Nov. 2015</span>
												<span class="list-item-text">in_171eCfEHNnZkutNMRKWwAHPN</span>
												<span class="list-item-download">Download</span>
											</li>
											<li class="list-item">
												<span class="list-item-date">Oct. 2015</span>
												<span class="list-item-text">in_171eCfEHNnZkutNMRKWwAHPN</span>
												<span class="list-item-download">Download</span>
											</li>
										</ul>
									</div>

								</div>

							</div>

							<div id="target-tab-app" class="target-tab clearfix">
								<p class="textSize-title-small marginBottom15 user-infos">You have exported <span id="projects-exported-number">5</span> fonts. Congrats!</p>
								<div class="subscribe clearfix">
									<p class="textSize-title-small marginTop30 marginBottom15">Your projects folder</p>
									<ul class="list marginTop30">
										<li class="list-item" id="">My project 1</li>
										<li class="list-item" id="">My project 2</li>
										<li class="list-item" id="">My project 3</li>
									</ul>
								</div>
							</div>

						</section>

					</div>
				</div>-->
			</div>

		</section>

	</main>

<?php snippet('footer') ?>
