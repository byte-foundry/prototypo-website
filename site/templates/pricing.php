<?php
	snippet('header') ?>
<main class="PageContent Pricing showAnnualBilling" role="main">
	<div class="PricingItemFree" style="background-image:url(<?php
		echo $page->file($page->freemiumImg())->url(); ?>)">
		<div class="PricingItemFree-wrap <?php
			//echo $state; ?>">
			<header class="PageHeader text-center PricingPageHeader">
				<h1 class="textType-title textSize-title-large colorWhite"><?php
					echo $page->section0Title()->kirbytext(); ?></h1>
				<h3 class="textType-subtitle textSize-title-small colorBright"><?php
					echo $page->section0Subtitle()->kirbytext(); ?></h3>
			</header>
			<div class="Section-wrapTxt textType-txt marginTop30 marginBottom15 colorBrightest text-center textSize-title-medium textType-subtitle">
				<?php
					echo $page->section0Txt()->kirbytext(); ?>
			</div>
			<div class="PricingItemFree-wrapIn">
				<div class="PricingItemFree-pack textType-txt text-center textSize-txt-large colorWhite">
					<?php //echo nl2br($pack['packservices']); ?>
				</div>
			</div>
			<form id="quick-signup" class="Newsletter text-center">
				<input class="Newsletter-name NewsletterInput-text small-full-width" type="text" name="quick-email" id="quick-email" placeholder="email" value="">
				<input class="Newsletter-email NewsletterInput-text small-full-width" type="password" name="quick-password1" id="quick-password1" placeholder="password" value="">
				<input class="Newsletter-email NewsletterInput-text small-full-width" type="password" name="quick-password2" id="quick-password2" placeholder="repeat password" value="">
				<input class="NewsletterInput-submit callToAction" type="submit" value="<?php
					echo $page->freemiumSubmit()->kirbyText(); ?>">
			</form>
			<label class="marginTop15 textSize-txt-medium hidden error" id="signup-error"></label>
			<div class="Section-wrapTxt textType-txt textSize-txt-medium marginTop30 colorBright text-center">
				<?php
					echo $page->freemiumToS()->kirbytext(); ?>
			</div>
			<div class="clear"></div>
		</div>
	</div>
	<div class="fitToContent">
		<header class="PageHeader text-center fitToContent">
			<h1 class="textType-title textSize-title-large colorWhite"><?php
				echo $page->section1Title()->kirbytext(); ?></h1>
			<h3 class="textType-subtitle textSize-title-small colorBright"><?php
				echo $page->section1Subtitle()->kirbytext(); ?></h3>
		</header>
		<div class="Section-wrapTxt textType-txt marginTop30 colorBrightest text-center">
			<?php
				echo $page->section1Txt()->kirbytext(); ?>
		</div>
		<ul class="small-block-grid-1 medium-block-grid-4 large-block-grid-4 PricingTable">
			<?php
				$packs = yaml($page->packs());

				foreach($packs as $id => $pack):
					$state = ($pack['packstate'] == 'notavailable') ? 'plan-disabled' : '';
				?>
			<li class="PricingItem">
				<div class="PricingItem-wrap <?php
					echo $state; ?>">
					<h3 class="PricingItem-packtitle textType-txt textSize-txt-small"><?php
						echo $pack['packname']; ?></h3>
					<h3 class="PricingItem-title textType-txt textSize-title-small <?php
						if ($state == 'disabled') echo 'colorGray';
						else echo 'colorSecondBackgroundColor'; ?>">
						<?php
							if ($pack['packpricettc'] === ''): ?>
						<img src="<?php
							echo url('assets/img/Enterprise.svg'); ?>">
						<?php
							else: ?>
						<span class="PricingItem-priceBefore textSize-txt-large">$</span><!--
							-->
						<span class="PricingItem-price textSize-title-xlarge">

							<?php if ($pack['packpricelaunch'] != ''): ?>
								<div class="js_price">
									<?php
										echo '<span class="solded">' . $pack['packpricettc'] . '</span>';
										echo $pack['packpricelaunch'].'<br/>';
										echo '-';
									?>
								</div>
							<?php else: ?>
							<!--
								<span class="js_annualBilling_price">
									<?php 	echo $pack['packprice2ttc']; ?>
								</span>
								<span class="js_monthlyBilling_price">
									<?php echo $pack['packpricettc']; ?>
								</span>
							-->
							<div class="js_price"><?php
								echo $pack['packprice2ttc']; ?><br /><?php
								echo $pack['packpricettc']; ?></div>
							<?php endif; ?>

						</span>
						<!--
                        --><span class="PricingItem-priceAfter textSize-txt-medium">/mo. *</span>
						<?php
							endif; ?>
					</h3>
					<!--
						<h6 class="PricingItem-price textType-txt textSize-txt-small colorDarkGray">Monthly billing: <?php
							echo $pack['packpricettc']; ?></h6>
						-->
					<div class="PricingItem-infos textType-subtxt colorDarkGray">
						<div class="PricingItem-pack textType-txt textSize-txt-medium"><?php
							echo nl2br($pack['packservices']); ?></div>
						<div class="PricingItem-pack textType-txt textSize-txt-medium"><?php
							echo nl2br($pack['packservices2']); ?></div>
						<!--               <div class="PricingItem-content textType-txt textSize-txt-small"><?php
							echo nl2br($pack['packdescription']); ?></div> -->
						<div class="PricingItem-getStarted">
                            <?php
                                if( $pack['packname'] === 'Want more?') {
                                    echo '<a href="mailto:contact@prototypo.io" class="callToAction ' . $state . '">' . $pack['packbuttonlabel'] . '</a>';
                                }
                                else {
        							echo '<a href="/pricing/subscribe?plan=' . $pack['packname'] .'&billing=annual" plan="' . $pack['packname'] . '" class="billing callToAction ' . $state . '">' . $pack['packbuttonlabel'] . '</a>';
                                }
                            ?>
						</div>
					</div>
				</div>
			</li>
			<?php
				endforeach;
				?>
		</ul>
		<div class="PricingSwitch text-center textType-txt textSize-txt-medium">
			<span class="PricingSwitch-item js_annualBilling">Annual billing</span>
			<span class="PricingSwitch-item js_monthlyBilling">Monthly billing</span>
		</div>
		<div class="Section-wrapTxt textType-txt textSize-txt-large marginTop30 colorBrightest text-center">
			<?php
				echo $page->section1TxtAfter()->kirbytext(); ?>
		</div>
	</div>
</main>
<?php
	snippet('footer') ?>
