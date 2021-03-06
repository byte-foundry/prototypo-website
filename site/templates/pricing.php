<?php snippet('header') ?>
<main class="PageContent Pricing showAnnualBilling gradient-red">

	<div class="PricingItemFree" style="background-image:url(<?php
		echo $page->file($page->headerImg())->url(); ?>)">
		<div class="PricingItemFree-wrap">
			<header class="text-center fitToContent marginTop60">
				<h1 class="white centered">
					<?php echo $page->mainTitle()->kirbytextSans(); ?>
					<?php if($page->subtitle()->kirbytextSans()->isNotEmpty()): ?>
					<span class="internal_header">
						<?php echo $page->subtitle()->kirbytextSans(); ?>
					</span>
				<?php endif ?>
				</h1>
			</header>
		</div>
	<div class="fitToContent">

		<?php if($page->descriptionPromo()->isNotEmpty()): ?>
			<h2 id="infopromo" class="txt-promo Section-wrapTxt textType-txt marginBottom15 colorBrightest text-center textSize-title-medium textType-subtitle">
				<?php echo $page->descriptionPromo(); ?>
			</h2>
		<?php endif ?>



    <div class="PricingSwitch text-center marginTop60">
          <button href="#" id="Pricing-monthly-plan" class="button textType-txt textSize-txt-large radius">Monthly billing</button>
          <button href="#" id="Pricing-yearly-plan" class="button active radius textType-txt textSize-txt-large">Yearly billing</button>
    </div>

		<ul class="small-block-grid-1 medium-block-grid-3 large-block-grid-3 PricingTable marginTop30">
			<?php
				$packs = yaml($page->packs());
				foreach($packs as $id => $pack):
			?>
			<li class="PricingItem">
				<div class="PricingItem-wrap">
          <?php if (isset( $pack['offer'] )): ?>
            <div class="PricingItem-offerRibbon">
              <div class="PricingItem-offerRibbon-content"><?php echo $pack['offer']; ?></div>
            </div>
          <?php endif ?>
					<div class="PricingItem-header">

						<h2 class="PricingItem-packtitle textType-txt textSize-txt-small">
							<?php echo $pack['packname']; ?>
						</h2>

            <p class="textType-txt textSize-txt-small marginTop15 PricingItem-description">
							<?php echo $pack['description']; ?>
						</p>

						<p class="PricingItem-title textType-txt textSize-title-small colorSecondBackgroundColor">
							<?php if ($pack['price'] === ''): ?>
								<img src="<?php echo url('assets/img/Enterprise.svg'); ?>" alt="">
							<?php else: ?>
									<span class="PricingItem-priceBefore textSize-txt-large">$</span>
                  <?php if ( str::contains($pack['packname'], 'Team', $i = true)): ?>
			              <span class="PricingItem-price PricingItem-price-company textSize-title-xlarge">
                  <?php else: ?>
                    <span class="PricingItem-price  textSize-title-xlarge">
                  <?php endif; ?>
										<?php
											if (isset( $pack['promo'] ) && $pack['promo'] != '' ):
												echo '<span class="solded">' . $pack['price'] . '</span>';
												echo $pack['promo'];
											else:
												echo $pack['price'];
											endif;
										?>
									</span>

									<span class="PricingItem-priceAfter textSize-txt-medium">
											per
                      <br/>
                      month *
									</span>

							<?php endif; ?>
						</p>

						<p class="textType-txt textSize-txt-small marginTop15 red PricingItem-baseline">
							<?php echo $pack['baseline']; ?>
						</p>

					</div>

					<div class="PricingItem-infos textType-subtxt colorDarkGray">

						<div class="PricingItem-pack textType-txt textSize-txt-medium">
              <?php if ( $pack['options'] ) : $options = explode(',',$pack['options']); ?>
              <ul class="PricingItem-pack-options">
      					<?php foreach($options as $index => $option): ?>
                  <?php if ($option === '-'): ?>
                  <li class="PricingItem-pack-option hidden-for-small-down">
                  <?php else: ?>
                  <li class="PricingItem-pack-option">
                  <?php endif ?>
                    <?php if ( str::contains($pack['packname'], 'Team', $i = true) && $index === 0 ): ?>
                      <div class="PricingItem-pack-option-usercount">
                        <span class="input-number-decrement">–</span>
                        <input class="input-number" type="text" value="1" min="1" max="100"/>
                        <span class="input-number-text">users</span>
                        <span class="input-number-increment">+</span>
                      </div>
                      <hr/>
                    <?php else: ?>
                      <?php echo $option ?>
                      <?php if ( $index !== count($options) - 1 ): ?>
                        <hr/>
                      <?php endif ?>
                    <?php endif ?>
      					  </li>
                <?php endforeach ?>
              </ul>
              <?php endif; ?>
						</div>

						<div class="PricingItem-getStarted">
							<?php
								$subdomain = c::get('env') === 'dev' ? 'dev' : 'app';
								$hash = str::contains($pack['packname'], 'free', $i = true) ? '/signup' : '/signup?subscribe=personal_annual_99';
                echo "<a href=\"https://{$subdomain}.prototypo.io/#{$hash}\" name=\"{$pack['packname']}\" class=\"choose-plan subscribe-page billing callToAction callToAction-{$pack['packname']}\">{$pack['button']}</a>";
							?>
						</div>

					</div>
				</div>
			</li>
			<?php
				endforeach;
				?>
		</ul>

		<p class="white text-center marginTop15 marginBottom15">
			Do you have any questions? Do you want to book an online presentation for your company?<br/> Call Giacomo <a href="tel:+33769703855">+33 (0)7 69 70 38 55</a> or send us an email <a href="mailto:giacomo@prototypo.io">giacomo@prototypo.io</a>
		</p>

    <div class="SchoolsItem small-block-grid-1 medium-block-grid-2 large-block-grid-2">
      <div class="SchoolsItem-column">
        <h2 class="SchoolsItem-packtitle textType-txt textSize-txt-medium marginBottom15">
  				Schools/Students
  			</h2>
        <img src="<?php echo url('assets/img/Enterprise.svg'); ?>" alt="">
      </div>
      <div class="SchoolsItem-column SchoolsItem-text textType-txt textSize-txt-medium">
		  We think Prototypo is an awesome tool for students to learn the basics of type design, so we definitely want to make students to access Prototypo easily: contact us and tell us more about your needs!
          <br/><br/>
          <a href="/education" class="callToAction">Learn more about it!</a>
      </div>
    </div>

		<div class="Section-wrapTxt textType-txt textSize-txt-large marginTop60 text-center marginBottom30 white">
			<?php echo $page->TxtAfter()->kirbytext(); ?>
		</div>

	</div>
</div>

	<section class="bg-white clearfix">
		<div class="fitToContent marginTop60 ">
			<h2 class="big bold text-center marginTop60 marginBottom60"><span id="Pricing-UserCount">Thousands of</span> happy users use Prototypo, including</h2>

			<ul class="marginTop60 testimonials marginBottom0">
        <?php
					$users = yaml($page->users());
					foreach($users as $id => $user):
				?>
				<li class="black">
					<img  class="portrait" src="<?php echo $page->file($user['portrait'])->url(); ?>" alt="" />
					<h3><?php echo $user['name']; ?></h3>
					<p class="testimonials_description"><?php echo $user['infos']; ?></p>
					<p>“<?php echo $user['quote']; ?>”</p>
				</li>
				<?php endforeach; ?>
			</ul>

		</div>
	</section>

  <section class="clearfix bg-white">
		<div class="fitToContent marginTop60 ">
			<h2 class="bold text-center marginBottom30">Start offering custom typefaces to your clients</h2>
      <div class="textSize-txt-large text-center marginTop30  marginBottom60">
          <?php
            $subdomain = c::get('env') === 'dev' ? 'dev' : 'app';
            $hash = '/signup';
              echo "<a href=\"https://{$subdomain}.prototypo.io/#{$hash}\" name=\"free\" class=\"choose-plan subscribe-page billing callToAction\">Get started</a>";
          ?>
			</div>
		</div>
	</section>

	<div class="fitToContent">

		<h2 class="big bold text-center marginTop60 marginBottom60 white">Any questions?</h2>

		<ul class="marginTop60 marginBottom60 faq">
			<?php
				$faq = yaml($page->faq());
				foreach($faq as $id => $question):
			?>
			<li>
				<div class="">
					<p class="anyquestion_question"><?php echo $question['question']; ?></p>
					<p><?php echo $question['answer']; ?></p>
				</div>
			</li>
			<?php endforeach; ?>
		</ul>

		<h2 class="big bold text-center marginTop60 marginBottom60 white">Need help?</h2>

		<div class="textarea">
			<textarea id="question" name="name" rows="8" cols="40" placeholder="If you have any questions about the app, the features, etc. just ask us!" class="marginTop30"></textarea>
			<button id="mailto" type="button" name="button" class="marginTop15">Send</button>
		</div>


	</div>
</main>
<?php snippet('footer') ?>
