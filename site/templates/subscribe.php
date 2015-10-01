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
							<p class="textSize-title-small mb20">Your plan:</p>

							<div class="clearfix">
								<label class="radio text-center">
									<input type="radio" name="monthYearSwitch" value="monthly" checked>
									<div class="plan"><div class="type">Monthly billing: </div><span class="price">15</span></div>
								</label>
								<label class="radio text-center">
									<input type="radio" name="monthYearSwitch" value="annual">
									<div class="plan"><div class="type">Annual billing: </div><span class="price">12</span></div>
								</label>
							</div>

							<p class="textSize-title-small mb20">Your details:</p>
							<label for="email">Your email</label>
							<input class="" type="email" name="email" id="email" placeholder="mj@domain.com">
							<label for="VAT">Your VAT number (optionnal)</label>
							<input class="" type="number" name="VAT" id="VAT" placeholder="AB 01 234567890">
							<p class="textSize-title-small mb20">Payment details:</p>
							<label for="buyerNameInput">Cardholder name</label>
							<input class="" type="text" name="buyerNameInput" id="buyerNameInput" placeholder="MJ Cat">
							<label for="cardNumberInput">Credit card number</label>
							<input class="" type="number" name="cardNumberInput" id="cardNumberInput" placeholder="1234 5678 9012 3456">
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
								<input class="small" type="number" name="cvcInput" id="cvcInput" placeholder="123">
							</div>
							<input class="NewsletterInput-submit  callToAction" type="submit" id="submit" name="submit" value="Subscribe to Prototypo">
						</form>
					</div>

				</section>

			</div>

		</section>

	</main>

<?php snippet('footer') ?>
