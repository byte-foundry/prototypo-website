<div class="DemoHome">

	<div class="toggleSwitch hide" style="width:100%; height: 100%;">
		<iframe id="videoplayer" data-src="//player.vimeo.com/video/140628893?badge=0&byline=0&color=49E4A9&autoplay=1" style="width:100%; height: 100%;" allowfullscreen></iframe>
	</div>

	<div class="toggleSwitch">
		<div class="DemoHome-windowBackground"></div>
		<div class="DemoHome-windowTopBar"></div>

		<img class="DemoHome-windowLogo" src="<?php echo url('assets/img/prototypoIcon.svg'); ?>" alt="Prototypo logo">

		<div class="DemoHome-windowButton DemoHome-windowButtonRed"></div>
		<div class="DemoHome-windowButton DemoHome-windowButtonYellow"></div>
		<div class="DemoHome-windowButton DemoHome-windowButtonGreen"></div>

		<div class="DemoControls">
			<div class="DemoControls-PotentiometerItem">
				<img src="<?php echo url('assets/img/pictos/pictoDemoHomeControlsWeight.svg'); ?>" class="DemoControls-PotentiometerPicto" alt="Prototypo thickness slider">
				<div id="test-me" class="test-me">
					<input type="range" data-param="thickness" class="DemoControls-Potentiometer" min="20" max="160" value="85" step="1" />
				</div>
			</div>

			<div class="DemoControls-PotentiometerItem">
				<img src="<?php echo url('assets/img/pictos/pictoDemoHomeControlsContrast.svg'); ?>" class="DemoControls-PotentiometerPicto" alt="Prototypo contrast slider">
				<input type="range" data-param="_contrast" class="DemoControls-Potentiometer" min="-2" max="-0.15" value="-1" step="0.01" />
			</div>

			<div class="DemoControls-PotentiometerItem">
				<img src="<?php echo url('assets/img/pictos/pictoDemoHomeControlsHeight.svg'); ?>" class="DemoControls-PotentiometerPicto" alt="Prototypo serif height slider">
				<input type="range" data-param="serifHeight" class="DemoControls-Potentiometer" min="0" max="70" value="20" step="1" />
			</div>

			<div class="DemoControls-PotentiometerItem">
				<img src="<?php echo url('assets/img/pictos/pictoDemoHomeControlsSerif.svg'); ?>" class="DemoControls-PotentiometerPicto" alt="Prototypo serif width slider">
				<input type="range" data-param="serifWidth" class="DemoControls-Potentiometer" min="0" max="100" value="65" step="1" />
			</div>
		</div><!-- .DemoControls -->


		<canvas id="DemoCanvas" class="DemoCanvas"></canvas>

		<div class="Infobox Infobox-DemoHomeInfoboxLeft text-center hide-for-small-only">
			<?php echo $page->infobox1()->kirbytextSans() ?>
		</div>

		<div class="Infobox Infobox-DemoHomeInfoboxRight text-center hide-for-small-only">
			<?php echo $page->infobox2()->kirbytextSans() ?>
		</div>
	</div>


</div><!-- .DemoHome -->



<div class="Section-homepageDiscoverFeaturesLine text-center textSize-txt-large">
	<fieldset class="switch round large override marginTop30" tabindex="0">
		<span class="switch-label">Demo</span>
		<input id="switchDemo" class="switchAction" type="checkbox">
		<label for="switchDemo"></label>
		<span class="switch-label">Video</span>
	</fieldset>
</div>
