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

                        <div id="<?= $packs[0]['packname'] ?>" class="infoPricing" month="<?= $packs[0]['packprice'] ?>" annual="<?= $packs[0]['packprice2'] ?>"></div>
                        <div id="<?= $packs[1]['packname'] ?>" class="infoPricing" month="<?= $packs[1]['packprice'] ?>" annual="<?= $packs[1]['packprice2'] ?>"></div>
                        <div id="<?= $packs[2]['packname'] ?>" class="infoPricing" month="<?= $packs[2]['packprice'] ?>" annual="<?= $packs[2]['packprice2'] ?>"></div>

						<form action="" method="POST" accept-charset="utf-8" class="subscribe">
							<div class="textSize-title-small mb20 clearfix">Your plan:
                                <select id="plan" class="plan right" name="creditCardExpMonthInput" id="creditCardExpMonthInput" placeholder="2018" required="required">
                                    <option value="<?= $packs[0]['packname'] ?>" <?php if( $plan == 'free' ) { echo 'selected'; } ?> ><?= $packs[0]['packname'] ?></option>
                                    <option value="<?= $packs[1]['packname'] ?>" <?php if( $plan == 'professional' || !$plan ) { echo 'selected'; } ?> ><?= $packs[1]['packname'] ?></option>
                                    <option value="<?= $packs[2]['packname'] ?>" <?php if( $plan == 'agency' ) { echo 'selected'; } ?> ><?= $packs[2]['packname'] ?></option>
                                </select>
                            </div>

							<div class="clearfix">
								<label class="radio text-center">
									<input type="radio" name="monthYearSwitch" value="monthly" <?php if( $billing == 'monthly' || !$billing ) { echo 'checked'; } ?>>
									<div class="plan"><div class="type">Monthly billing: </div><span class="price priceMonth">-</span></div>
								</label>
								<label class="radio text-center">
									<input type="radio" name="monthYearSwitch" value="annual"  <?php if( $billing == 'annual' ) { echo 'checked'; } ?>>
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
                                        <select id="taxamo-country-select width50">
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

							<p class="textSize-title-small marginTop60 ">Your details:</p>
							<label for="email">Your email</label>
							<input class="" type="email" name="email" id="email" placeholder="mj@domain.com" required="required">
							<label for="VAT">Your VAT number (optionnal)</label>
							<input class="" type="number" name="VAT" id="VAT" placeholder="AB 01 234567890">
							<p class="textSize-title-small mb20">Payment details:</p>
							<label for="buyerNameInput">Cardholder name</label>
							<input class="" type="text" name="buyerNameInput" id="buyerNameInput" placeholder="MJ Cat" required="required">
							<label for="cardNumberInput">Credit card number</label>
							<input class="" type="number" name="cardNumberInput" id="cardNumberInput" placeholder="1234 5678 9012 3456" required="required">
							<div class="width50 left">
								<label class="small" for="creditCardExpMonthInput">Expiration date</label>
								<select class="small" name="creditCardExpMonthInput" id="creditCardExpMonthInput" placeholder="01" required="required">
									<option value="" disabled selected>Month</option>
									<option value="0">01</option>
									<option value="1">02</option>
									<option value="2">03</option>
									<option value="3">04</option>
									<option value="4">05</option>
									<option value="5">06</option>
									<option value="6">07</option>
									<option value="7">08</option>
									<option value="8">09</option>
									<option value="9">10</option>
									<option value="10">11</option>
									<option value="11">12</option>
								</select>
								<select class="small" name="creditCardExpMonthInput" id="creditCardExpMonthInput" placeholder="2018" required="required">
									<option value="" disabled selected>Year</option>
									<option value="0">2015</option>
									<option value="1">2016</option>
									<option value="2">2017</option>
									<option value="3">2018</option>
									<option value="4">2019</option>
									<option value="5">2020</option>
								</select>
							</div>
							<div class="width50 left">
								<label for="cvcInput">CVC</label>
								<input class="small" type="number" name="cvcInput" id="cvcInput" placeholder="123" required="required">
							</div>
							<input class="NewsletterInput-submit right width100 callToAction call-success" type="submit" id="submit" name="submit" value="Subscribe to Prototypo">
						</form>
					</div>

				</section>

			</div>

		</section>

	</main>

<?php snippet('footer') ?>
