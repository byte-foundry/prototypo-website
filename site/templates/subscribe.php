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

						<?php
							$plan = $_GET['plan'];
							$billing = $_GET['billing'];

							$pricing = $page->parent();

							$packs = yaml($pricing->packs());
						?>

						<div id="<?= $packs[0]['packname'] ?>" class="infoPricing" month="<?= $packs[0]['packpricettc'] ?>" annual="<?= $packs[0]['packprice2ttc'] ?>"></div>
						<div id="<?= $packs[1]['packname'] ?>" class="infoPricing" month="<?= $packs[1]['packpricettc'] ?>" annual="<?= $packs[1]['packprice2ttc'] ?>"></div>
						<div id="<?= $packs[2]['packname'] ?>" class="infoPricing" month="<?= $packs[2]['packpricettc'] ?>" annual="<?= $packs[2]['packprice2ttc'] ?>"></div>

						<form action="" method="POST" accept-charset="utf-8" class="subscribe">
							<div class="textSize-title-small mb20 clearfix">Your plan:
								<select id="plan" class="plan right" name="creditCardExpMonthInput" id="creditCardExpMonthInput" placeholder="2018" required="required">
									<option value="<?= $packs[0]['packname'] ?>" <?php if( $plan == 'free' ) { echo 'selected'; } ?> ><?= $packs[0]['packname'] ?></option>
									<option value="<?= $packs[1]['packname'] ?>" <?php if( $plan == 'professional' || !$plan ) { echo 'selected'; } ?> ><?= $packs[1]['packname'] ?></option>
									<option value="<?= $packs[2]['packname'] ?>" <?php if( $plan == 'agency' ) { echo 'selected'; } ?> disabled ><?= $packs[2]['packname'] ?></option>
								</select>
							</div>

							<div class="clearfix radio-wrap">
								<input id="monthly" type="radio" name="monthYearSwitch" class="monthYearSwitch" value="monthly" <?php if( $billing == 'monthly' || !$billing ) { echo 'checked'; } ?>>
								<label class="radio text-center" for="monthly">
									<div class="plan"><div class="type">Monthly billing: </div><span class="price priceMonth">-</span></div>
								</label>
								<input id="annual" type="radio" name="monthYearSwitch" class="monthYearSwitch" value="annual"  <?php if( $billing == 'annual' ) { echo 'checked'; } ?>>
								<label class="radio text-center" for="annual">
									<div class="plan"><div class="type">Annual billing: </div><span class="price priceAnnual">-</span></div>
								</label>
							</div>

							<div class="textType-txt textSize-txt-large notabene">
								<?php echo $page->text0()->kirbytext() ?>

								<div class="marginTop30 hide taxamo-country">
									<button class="listCountry callToAction call-success" style="width: 100%">I confirm that my country of
										residence is <span class="countryName">…</span>.
									</button>

									<div class="marginTop30">
										<select id="taxamo-country-select" class="width50">
											<option value="FR">FR - France</option>
											<option value="AT">AT - Austria</option>
											<option value="BE">BE - Belgium</option>
											<option value="BG">BG - Bulgaria</option>
											<option value="HR">HR - Croatia</option>
											<option value="CY">CY - Cyprus</option>
											<option value="CZ">CZ - Czech Republic</option>
											<option value="DK">DK - Denmark</option>
											<option value="EE">EE - Estonia</option>
											<option value="FI">FI - Finland</option>
											<option value="DE">DE - Germany</option>
											<option value="GR">GR - Greece</option>
											<option value="HU">HU - Hungary</option>
											<option value="IE">IE - Ireland</option>
											<option value="IT">IT - Italy</option>
											<option value="JP">JP - Japan</option>
											<option value="LV">LV - Latvia</option>
											<option value="LT">LT - Lithuania</option>
											<option value="LU">LU - Luxembourg</option>
											<option value="MT">MT - Malta</option>
											<option value="MC">MC - Monaco</option>
											<option value="NL">NL - Netherlands</option>
											<option value="NO">NO - Norway</option>
											<option value="PL">PL - Poland</option>
											<option value="PT">PT - Portugal</option>
											<option value="RO">RO - Romania</option>
											<option value="SK">SK - Slovakia</option>
											<option value="SI">SI - Slovenia</option>
											<option value="ES">ES - Spain</option>
											<option value="SE">SE - Sweden</option>
											<option value="GB">GB - United Kingdom</option>
											<option value="US">US - United States</option>
										</select>
										<button class="callToAction call-danger validateCountry" id="validateCountry">Confirm selection</button>
										<button class="callToAction call-danger validateCountry" id="outsideEU">I live outside of EU</button>
									</div>

									<p>If you are a resident of a different country, you will need to provide additional evidence, such as card number prefix.</p>
								</div>

							</div>

							<p class="textSize-title-small marginTop60 ">
								Your details:
								<span id="already-account" class="callToAction right">I already have an account</span>
								<span id="no-account" class="callToAction right">I don't have an account</span>
							</p>
							<div class="not-logged-in-form">
								<div class="signin">
									<div class="w50 left">
										<label for="email">Your email</label>
										<input type="email" name="email" id="email-sign-in" placeholder="mj@domain.com" required="required">
									</div>
									<div class="w50 left">
										<label for="password">Your password</label>
										<input type="password" name="password" id="password-sign-in" placeholder="abc123" required="required">
									</div>
									<label class="hidden error" id="signin-error"></label>
									<div id="sign-me-in" class="call-success callToAction marginBottom30">Sign in</div>
								</div>
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
								</div>
							</div>
							<div class="logged-in-form clearfix">
								<div class="w50 left">
									<label for="email">Your email</label>
									<div class="user-infos" id="logged-in-email"></div>
								</div>
								<div class="w50 left">
									<label for="subscription">Your current subscription</label>
									<div class="user-infos" id="logged-in-subscription"></div>
								</div>
								<button class="call-error callToAction logout marginTop30 right clearfix">This is not me!</button>
							</div>
							<div id="card-form">
								<p class="textSize-title-small mb20">Payment details:</p>
								<label for="buyerNameInput">Cardholder name</label>
								<input type="text" name="buyerNameInput" id="buyerNameInput" placeholder="MJ Cat" required="required">
								<label for="cardNumberInput">Credit card number</label>
								<input type="number" name="cardNumberInput" id="cardNumberInput" placeholder="1234 5678 9012 3456" required="required">
								<div class="width50 left">
									<label class="small" for="creditCardExpMonthInput">Expiration date</label>
									<select class="small" name="creditCardExpMonthInput" id="creditCardExpMonthInput" placeholder="01" required="required">
										<option value="" disabled selected>Month</option>
										<option value="1">01</option>
										<option value="2">02</option>
										<option value="3">03</option>
										<option value="4">04</option>
										<option value="5">05</option>
										<option value="6">06</option>
										<option value="7">07</option>
										<option value="8">08</option>
										<option value="9">09</option>
										<option value="10">10</option>
										<option value="11">11</option>
										<option value="12">12</option>
									</select>
									<select class="small" name="creditCardExpYearInput" id="creditCardExpYearInput" placeholder="2018" required="required">
										<option value="" disabled selected>Year</option>
										<option value="2015">2015</option>
										<option value="2016">2016</option>
										<option value="2017">2017</option>
										<option value="2018">2018</option>
										<option value="2019">2019</option>
										<option value="2020">2020</option>
									</select>
								</div>
								<div class="width50 left">
									<label for="cvcInput">CVC</label>
									<input class="small" type="number" name="cvcInput" id="cvcInput" placeholder="123" required="required">
								</div>
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
