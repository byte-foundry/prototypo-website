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
            			<form action="http://sendy.kuem.me.uk/subscribe" method="POST" accept-charset="utf-8" class="Newsletter text-center">
            				<input class="Newsletter-name NewsletterInput-text small-full-width" type="text" name="name" id="name" placeholder="Your name">
            				<input class="Newsletter-email NewsletterInput-text small-full-width" type="text" name="email" id="email" placeholder="Your email">
            				<input type="hidden" name="list" value="ytAwOnCM1u2l9ak9zwB7bw">
            				<input class="NewsletterInput-submit callToAction" type="submit" id="submit" name="submit" value="Keep me posted">
            			</form>
            		</div>

        		</section>

            </div>

        </section>

    </main>

<?php snippet('footer') ?>
