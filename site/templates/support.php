<?php snippet('header') ?>

    <main class="main" role="main">
        <section class="Section Section-parametricDesignTool">

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
            			<h3 class="textType-subtitle textSize-title-small colorBrightest">Subscribe to our newsletter</h3>
            		</header>

            		<div class="Section-wrapTxt textType-txt fitToContent">
						<form action="http://sendy.kuem.me.uk/subscribe" method="POST" accept-charset="utf-8" class="form-small Newsletter text-center">
							<input class="form-input form-newsletter-input bg-grey Newsletter-name" type="text" name="name" id="name" placeholder="Your name">
							<input class="form-input form-newsletter-input bg-grey Newsletter-email" type="text" name="email" id="email" placeholder="Your email">
							<input type="hidden" name="list" value="Y184XoR6ydCgo8ar4qA892rg">
							<input class="form-newsletter-input NewsletterInput-submit callToAction" type="submit" id="submit" name="submit" value="Keep me posted">
						</form>
            		</div>

        		</section>

            </div>

        </section>

    </main>

<?php snippet('footer') ?>
