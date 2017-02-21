<?php snippet('header') ?>
<main class="PageContent Pricing showAnnualBilling gradient-red">

	<div class="PricingItemFree" style="background-image:url(<?php
		echo $page->file($page->headerImg())->url(); ?>)">
		<div class="PricingItemFree-wrap">
			<header class="PageHeader text-center fitToContent marginTop60">
				<h1 class="textType-title textSize-title-large white">
					<?php echo $page->mainTitle()->kirbytextSans(); ?>
				</h1>

				<?php if($page->subtitle()->kirbytextSans()->isNotEmpty()): ?>
					<h2 class="Section-wrapTxt textType-txt marginTop30 marginBottom15 colorBrightest text-center textSize-title-medium textType-subtitle ">
						<?php echo $page->subtitle()->kirbytextSans(); ?>
					</h2>
				<?php endif ?>

			</header>
		</div>
	</div>
	<div class="fitToContent">

		<?php if($page->descriptionPromo()->isNotEmpty()): ?>
			<h2 id="infopromo" class="txt-promo Section-wrapTxt textType-txt marginBottom15 colorBrightest text-center textSize-title-medium textType-subtitle">
				<?php echo $page->descriptionPromo(); ?>
			</h2>
		<?php endif ?>
    
    <div class="PricingSwitch text-center marginTop60">
          <button href="#" id="Pricing-monthly-plan" class="button textType-txt textSize-txt-large radius">Monthly biling</button>
          <button href="#" id="Pricing-yearly-plan" class="button active radius textType-txt textSize-txt-large">Yearly biling</button>
          <div class="PricingSwitch-savings">
            <div class="PricingSwitch-savings-text textSize-txt-medium">
                <span class="textType-txt">
                    Save 47%!
                </span>
            </div>

            <svg class="PricingSwitch-savings-arrow" width="22" height="18" viewBox="0 0 22 18">
                <path d="M5.15,17.68A.8.8,0,0,0,5,16.52L2.94,14.24a23.36,23.36,0,0,0,11.63-3,16,16,0,0,0,6.16-6.6A13.11,13.11,0,0,0,22,.92.82.82,0,0,0,21.25,0a.89.89,0,0,0-.57.12.83.83,0,0,0-.4.6,11.9,11.9,0,0,1-1.2,3.39,14.31,14.31,0,0,1-5.42,5.73A21.58,21.58,0,0,1,2.87,12.59l1.33-2A.8.8,0,0,0,4,9.44a.9.9,0,0,0-1,0,.87.87,0,0,0-.23.2L.18,13.25A.8.8,0,0,0,.33,14.4l3.61,3.43a.89.89,0,0,0,1.21-.15Z"></path>
            </svg>
        </div>
    </div>    

		<ul class="small-block-grid-1 medium-block-grid-3 large-block-grid-3 PricingTable marginTop30">
			<?php
				$packs = yaml($page->packs());
				foreach($packs as $id => $pack):
			?>
			<li class="PricingItem">
				<div class="PricingItem-wrap">

					<div class="PricingItem-header">

						<h2 class="PricingItem-packtitle textType-txt textSize-txt-small">
							<?php echo $pack['packname']; ?>
						</h2>
            
            <p class="textType-txt textSize-txt-small marginTop15">
							<?php echo $pack['description']; ?>
						</p>

						<p class="PricingItem-title textType-txt textSize-title-small colorSecondBackgroundColor">
							<?php if ($pack['price'] === ''): ?>
								<img src="<?php echo url('assets/img/Enterprise.svg'); ?>" alt="">
							<?php else: ?>
									<span class="PricingItem-priceBefore textSize-txt-large">$</span>
                  <?php if ( str::contains($pack['packname'], 'Company', $i = true)): ?>
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

						<p class="textType-txt textSize-txt-small marginTop15 red">
							<?php echo $pack['baseline']; ?>
						</p>

					</div>

					<div class="PricingItem-infos textType-subtxt colorDarkGray">

						<div class="PricingItem-pack textType-txt textSize-txt-medium">
              <?php if ( $pack['options'] ) : $options = explode(',',$pack['options']); ?>
              <ul class="PricingItem-pack-options">
      					<?php foreach($options as $index => $option): ?>
                  <li class="PricingItem-pack-option">
                    <?php if ( str::contains($pack['packname'], 'Company', $i = true) && $index === 0 ): ?>
                      <div class="PricingItem-pack-option-usercount">
                        <span class="input-number-decrement">–</span>
                        <input class="input-number" type="text" value="4" min="4" max="100">
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
								$hash = str::contains($pack['packname'], 'free', $i = true) ? '/signup' : '/account/create';

								if ( str::contains($pack['packname'], 'schools/agencies', $i = true) ):
									echo "<a href=\"mailto:contact@prototypo.io\" class=\"callToAction \">{$pack['button']}</a>";
								else:
									echo "<a href=\"https://{$subdomain}.prototypo.io/#{$hash}\" name=\"{$pack['packname']}\" class=\"choose-plan subscribe-page billing callToAction\">{$pack['button']}</a>";
								endif;
							?>
						</div>

					</div>
				</div>
			</li>
			<?php
				endforeach;
				?>
		</ul>
    
    <div class="SchoolsItem small-block-grid-1 medium-block-grid-2 large-block-grid-2">
      <div class="SchoolsItem-column">
        <h2 class="SchoolsItem-packtitle textType-txt textSize-txt-medium marginBottom15">
  				Schools/Students
  			</h2>
        <img src="<?php echo url('assets/img/Enterprise.svg'); ?>" alt="">
      </div>
      <div class="SchoolsItem-column SchoolsItem-text textType-txt textSize-txt-medium">
          Ipsum burgdoggen proident ham incididunt pastrami ut kielbasa voluptate cupidatat. Ad sed ham ea ex shank tongue do laboris tail biltong ut consectetur kevin. Eiusmod in ut rump pork belly aute kevin occaecat sint!
          <br/><br/>
          <a href="mailto:contact@prototypo.io" class="callToAction">Contact us!</a>
      </div>
    </div>

		<div class="Section-wrapTxt textType-txt textSize-txt-large marginTop60 text-center marginBottom30 white">
			<?php echo $page->TxtAfter()->kirbytext(); ?>
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
			<h2 class="big bold text-center marginBottom30">Save time and money, use Prototypo</h2>
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
			<button onclick="javascript:sendMail()" id="mailto" type="button" name="button" class="marginTop15">Send</button>
		</div>

		<script>
			function sendMail() {
			    var yourMessage = document.getElementById("question").value;
			    document.location.href = "mailto:contact@prototypo.io?subject=I have a question about…" + "&body=" + encodeURIComponent(yourMessage);
			}
		</script>


	</div>
</main>
<?php snippet('footer') ?>
