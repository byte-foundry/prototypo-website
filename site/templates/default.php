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

            </div>

        </section>

    </main>

<?php snippet('footer') ?>
