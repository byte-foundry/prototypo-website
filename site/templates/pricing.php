<?php snippet('header') ?>
<main class="PageContent Pricing showAnnualBilling" role="main">
	<div class="PricingItemFree" style="background-image:url(<?php
		echo $page->file($page->freemiumImg())->url(); ?>)">
		<div class="PricingItemFree-wrap">
			<header class="PageHeader text-center fitToContent marginTop60">
				<h1 class="textType-title textSize-title-large colorWhite">
					<?php echo $page->section1Title()->kirbytextSans(); ?>
				</h1>
				<h3 class="Section-wrapTxt textType-txt marginTop30 marginBottom15 colorBrightest text-center textSize-title-medium textType-subtitle">
					Hurry up! The special launch offer will only last until the 27th of December.
				</h3>
			</header>
		</div>
	</div>
	<div class="fitToContent">

		<div class="Section-wrapTxt textType-txt marginTop60 colorBrightest text-center">
			<?php echo $page->section1Txt()->kirbytext(); ?>
		</div>

		<ul class="small-block-grid-1 medium-block-grid-4 large-block-grid-4 PricingTable">
			<?php
				$packs = yaml($page->packs());

				foreach($packs as $id => $pack):
					$state = ($pack['packstate'] == 'notavailable') ? 'plan-disabled' : '';
			?>
			<li class="PricingItem">
				<div class="PricingItem-wrap <?php echo $state; ?>">

					<h3 class="PricingItem-packtitle textType-txt textSize-txt-small">
						<?php echo $pack['packname']; ?>
					</h3>

					<h3 class="PricingItem-title textType-txt textSize-title-small
					<?php
						if ($state == 'disabled') echo 'colorGray';
						else echo 'colorSecondBackgroundColor'; ?>">
							<?php if ($pack['packpricettc'] === ''): ?>
							<img src="<?php echo url('assets/img/Enterprise.svg'); ?>">
							<?php else: ?>
								<span class="PricingItem-priceBefore textSize-txt-large">€/$</span>

								<span class="PricingItem-price textSize-title-xlarge">

									<?php if (isset( $pack['packpricelaunch'] ) && $pack['packpricelaunch'] != '' ): ?>

										<div class="js_price">
											<?php
											echo '<span class="solded">' . $pack['packprice2ttc'] . '</span>';
											echo $pack['packpricelaunch'].'<br/>';
											echo '<span class="solded solded-year">' . $pack['packpricettc'] . '</span>';
											echo $pack['packpricelaunch'];
											?>
										</div>

									<?php else: ?>

										<div class="js_price">
											<?php echo $pack['packprice2ttc']; ?><br /> <!-- MONTH -->
											<?php echo $pack['packpricettc']; ?>		<!-- YEAR  -->
										</div>

							<?php endif; ?>

						</span>

						<span class="PricingItem-priceAfter textSize-txt-medium">/mo. *</span>
						<?php endif; ?>
					</h3>

					<div class="PricingItem-infos textType-subtxt colorDarkGray">

						<div class="PricingItem-pack textType-txt textSize-txt-medium">
							<?php echo nl2br($pack['packservices']); ?>
						</div>

						<div class="PricingItem-pack textType-txt textSize-txt-medium">
							<?php echo nl2br($pack['packservices2']); ?>
						</div>

						<div class="PricingItem-getStarted">
                            <?php
                                if( $pack['packname'] === 'Want more?') {
                                    echo '<a href="mailto:contact@prototypo.io" class="callToAction ' . $state . '">' . $pack['packbuttonlabel'] . '</a>';
                                }
                                else {
        							echo '<a href="/pricing/subscribe#/signup" name="' . $pack['packname'] . '" class="choose-plan subscribe-page billing callToAction ' . $state . '">' . $pack['packbuttonlabel'] . '</a>';
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
			<span class="PricingSwitch-item js_annualBilling" name="annual">Annual billing</span>
			<span class="PricingSwitch-item js_monthlyBilling" name="monthly">Monthly billing</span>
		</div>
		<div class="Section-wrapTxt textType-txt textSize-txt-large marginTop30 colorBrightest text-center">
			<?php echo $page->section1TxtAfter()->kirbytext(); ?>
		</div>
	</div>
</main>
<?php snippet('footer') ?>
