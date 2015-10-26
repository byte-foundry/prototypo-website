<div id="<?= $packs[0]['packname'] ?>" class="infoPricing" month="<?= $packs[0]['packpricettc'] ?>" annual="<?= $packs[0]['packprice2ttc'] ?>"></div>
<div id="<?= $packs[1]['packname'] ?>" class="infoPricing" month="<?= $packs[1]['packpricelaunch'] ?>" annual="<?= $packs[1]['packpricelaunch']?>"></div>
<div id="<?= $packs[2]['packname'] ?>" class="infoPricing" month="<?= $packs[2]['packpricettc'] ?>" annual="<?= $packs[2]['packprice2ttc'] ?>"></div>


<div class="textSize-title-small marginBottom15 clearfix">Your plan:
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
			<div class="plan"><div class="type">Monthly billing: <div class="launch-infos">The first 6 month, <span class="currency">15</span> after</div></div><span class="price currency priceMonth">-</span></div>
		</label>
		<input id="annual" type="radio" name="monthYearSwitch" class="monthYearSwitch" value="annual" checked>
		<label class="radio text-center" for="annual">
			<div class="plan"><div class="type">Annual billing: <div class="launch-infos">One year for <span class="currency">96</span> instead of <span class="currency">144</span></div></div><span class="price currency priceAnnual">-</span></div>
		</label>
	</div>

	<div class="textType-txt textSize-txt-large notabene">
		<?php echo $page->parent()->section1TxtAfter()->kirbytext(); ?>
	</div>
</div>
