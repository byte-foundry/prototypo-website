<?php snippet('header') ?>

	<main class="main PageContent Education">
		<section class="Section Section-parametricDesignTool gradient-yellow">

			<div class="fitToContent">

				<header class="PageHeader text-left fitToContent">
					<h1 class="textType-title textSize-title-large"><?php echo $page->title()->html(); ?></h1>
				</header>

				<article class="Article Section-fontsItemWrap">
					<div class="Article-content textType-txt textSize-txt-large">
						<?php echo $page->text()->kirbytext() ?>
					</div>
				</article>

				<section class="Section Section-newsletter support-newsletter hide-for-print">

					<header class="SectionHeader text-center fitToContent">
						<h3 class="textType-subtitle textSize-title-small colorBrightest">Interested? Contact us!</h3>
					</header>

					<div class="Section-wrapTxt textType-txt fitToContent">
            <div id="Education-contactForm" class="Education-contactForm clearfix">
  						<form id="nl-form" class="nl-form">
  							Hi! I am
                <input type="text" value="" name="name" placeholder="my name" data-subline="For example: <em>John Doe</em>"/>,
  							<select>
  								<option value="1" selected>a student</option>
  								<option value="2">a teacher</option>
  								<option value="3">the budget coordinator</option>
  								<option value="4">the head of department</option>
                  <option value="5">someone else</option>
  							</select>
  							at <input type="text" value="" placeholder="my school name" name="company" data-subline="For example: <em>the Royal College of Art</em> or <em>RISD</em>"/>
  							And I would like to use Prototypo for
  							<select>
  								<option value="1" selected>myself</option>
  								<option value="2">2-10 people</option>
  								<option value="3">11-25 people</option>
  								<option value="4">26-50 people</option>
  								<option value="2">50+ people</option>
  							</select>.
  							<br />
  							Please get in touch with me by email at
  							<input type="email" value="" placeholder="my email" name="email" data-subline="For example: <em>name@domain.com</em>"/>
  							or by phone on
  							<input type="tel" value="" name="tel" placeholder="my phone number" data-subline="For example: <em>+1 202-867-5309</em> or <em>+33 684841479</em>"/>.
                <br/>
  							Thanks !
  							<div class="nl-overlay"></div>
  						</form>
              <button class="callToAction marginTop15" id="EducationContactForm-button" type="submit">Send message</button>
  					</div>
					</div>

				</section>

			</div>

		</section>

	</main>

<?php snippet('footer') ?>
