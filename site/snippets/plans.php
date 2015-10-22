<div id="<?= $packs[0]['packname'] ?>" class="infoPricing" month="<?= $packs[0]['packpricettc'] ?>" annual="<?= $packs[0]['packprice2ttc'] ?>"></div>
<div id="<?= $packs[1]['packname'] ?>" class="infoPricing" month="<?= $packs[1]['packpricelaunch'] ?>" annual="<?= $packs[1]['packpricelaunch']?>"></div>
<div id="<?= $packs[2]['packname'] ?>" class="infoPricing" month="<?= $packs[2]['packpricettc'] ?>" annual="<?= $packs[2]['packprice2ttc'] ?>"></div>


<div class="textSize-title-small mb20 clearfix">Your plan:
	<select id="plan" class="plan right" name="creditCardExpMonthInput" id="creditCardExpMonthInput" placeholder="2018" required="required" style="margin-right: 0">
		<option value="<?= $packs[0]['packname'] ?>" ><?= $packs[0]['packname'] ?></option>
		<option value="<?= $packs[1]['packname'] ?>" selected><?= $packs[1]['packname'] ?></option>
		<option value="<?= $packs[2]['packname'] ?>" disabled ><?= $packs[2]['packname'] ?></option>
	</select>
</div>


<div id="free-plan-infos" class="textType-txt textSize-txt-large marginBottom30 hidden general-infos">
	<?php echo $page->switchplans()->kirbytextSans() ?>
</div>

<div id="select-plan-wrap">

	<p class="textType-txt textSize-txt-large marginBottom30 general-infos">
		<?php echo $page->aboutlaunchdate()->kirbytextSans() ?>
	</p>

	<div class="radio-wrap" id="recurrence-selector">
		<input id="monthly" type="radio" name="monthYearSwitch" class="monthYearSwitch" value="monthly">
		<label class="radio text-center" for="monthly">
			<div class="plan"><div class="type">Monthly billing: <div class="launch-infos">The first 6 month, after <span class="currency">15</span></div></div><span class="price currency priceMonth">-</span></div>
		</label>
		<input id="annual" type="radio" name="monthYearSwitch" class="monthYearSwitch" value="annual" checked>
		<label class="radio text-center" for="annual">
			<div class="plan"><div class="type">Annual billing: <div class="launch-infos">One year for <span class="currency">96</span> instead of <span class="currency">144</span></div></div><span class="price currency priceAnnual">-</span></div>
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
</div>
