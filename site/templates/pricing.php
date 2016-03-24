<?php snippet('header') ?>
<main class="PageContent Pricing showAnnualBilling" role="main">
	<div class="PricingItemFree" style="background-image:url(<?php
		echo $page->file($page->headerImg())->url(); ?>)">
		<div class="PricingItemFree-wrap">
			<header class="PageHeader text-center fitToContent marginTop60">
				<h1 class="textType-title textSize-title-large colorWhite">
					<?php echo $page->mainTitle()->kirbytextSans(); ?>
				</h1>
				<h3 class="Section-wrapTxt textType-txt marginTop30 marginBottom15 colorBrightest text-center textSize-title-medium textType-subtitle">
					<?php echo $page->subtitle()->kirbytextSans(); ?>
				</h3>
			</header>
		</div>
	</div>
	<div class="fitToContent">



		<ul class="small-block-grid-1 medium-block-grid-4 large-block-grid-4 PricingTable marginTop60">
			<?php
				$packs = yaml($page->packs());

				foreach($packs as $id => $pack):
					$state = ($pack['packstate'] == 'notavailable') ? 'plan-disabled' : '';
			?>
			<li class="PricingItem">
				<div class="PricingItem-wrap <?php echo $state; ?>">

					<div class="PricingItem-header">

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
												<!-- MONTH -->
												<?php echo $pack['packprice2ttc']; ?><br />
												<!-- YEAR  -->
												<?php echo $pack['packpricettc']; ?>

											</div>

								<?php endif; ?>

							</span>

							<span class="PricingItem-priceAfter textSize-txt-medium">/mo. *</span>
							<?php endif; ?>
						</h3>

						<?php if ( $pack['packpricettc'] != ''): ?>
							<div class="totalAnnual textSize-txt-large"><?php echo intval($pack['packprice2ttc']) * 12 . ' /year'; ?></div>
						<?php endif; ?>

					</div>

					<div class="PricingItem-infos textType-subtxt colorDarkGray">

						<div class="PricingItem-pack textType-txt textSize-txt-medium">
							<?php echo nl2br($pack['packservices']); ?>
						</div>

						<div class="PricingItem-pack textType-txt textSize-txt-medium">
							<?php echo nl2br($pack['packservices2']); ?>
						</div>

						<div class="PricingItem-getStarted">
							<?php
								$subdomain = c::get('env') === 'dev' ? 'dev' : 'app';
								$hash = $pack['packname'] === 'free' ? '/signup' : '/account/create';

								if( $pack['packname'] === 'Want more?') {
									echo "<a href=\"mailto:contact@prototypo.io\" class=\"callToAction {$state}\">{$pack['packbuttonlabel']}</a>";
								}
								else {
									echo "<a href=\"https://{$subdomain}.prototypo.io/#{$hash}\" name=\"{$pack['packname']}\" class=\"choose-plan subscribe-page billing callToAction {$state}\">{$pack['packbuttonlabel']}</a>";
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

		<div class="Section-wrapTxt textType-txt textSize-txt-large marginTop30 colorBrightest text-center">
			<?php echo $page->description()->kirbytext(); ?>
		</div>

		<div class="PricingSwitch text-center textType-txt textSize-txt-medium">
			<span class="PricingSwitch-item js_annualBilling" name="annual">Annual billing</span>
			<span class="PricingSwitch-item js_monthlyBilling" name="monthly">Monthly billing</span>
		</div>

		<div class="Section-wrapTxt textType-txt textSize-txt-large marginTop60 colorBrightest text-center">
			<?php echo $page->TxtAfter()->kirbytext(); ?>
		</div>

	</div>
</main>
<?php snippet('footer') ?>
