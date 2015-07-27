<?php snippet('header') ?>

  <main class="PageContent Gallery" role="main">

    <div class="fitToContent">

  		<header class="PageHeader text-center fitToContent">
    		<h1 class="textType-title textSize-title-large colorDarkest"><?php echo $page->section1Title()->kirbytext(); ?></h1>
        <h3 class="textType-subtitle textSize-title-small colorDark"><?php echo $page->section1Subtitle()->kirbytext(); ?></h3>
  		</header>

  		<div class="Section-wrapTxt textType-txt textSize-txt-large marginTop30 colorDarkest fitToContent">
    		<?php echo $page->section1Txt()->kirbytext(); ?>

    		<?php $fonts = yaml($page->fonts()); ?>

    		<style>
      		<?php foreach($fonts as $i => $f) : if (!empty($f['fontfile'])): ?>
      	  @font-face {
        	  font-family: 'Font<?php echo $i; ?>';
            src: url('<?php echo url('/content/'.$page->dirname().'/'.$f['fontfile']); ?>');
      	  }
      	  <?php endif; endforeach; ?>
        </style>

        <ul class="Fonts small-block-grid-1 medium-block-grid-3 large-block-grid-3">
        <?php foreach($fonts as $i => $f) : ?>
          <li class="FontsItem text-center">
            <div class="FontsItemWrap radius">
              <div class="FontsView colorDarkest" style="font-family:'Font<?php echo $i; ?>' , inherit;font-size:<?php echo $f['fontsize']; ?>px; line-height:<?php echo $f['fontlineheight']; ?>px"><?php echo $f['fontstring']; ?></div>
              <h6 class="FontsName textType-subtitle textSize-txt-xlarge colorDarkest"><?php echo $f['fontname']; ?></h6>
              <div class="FontsNumberVariants"><?php echo $f['fontnumbervariants']; ?> variant<?php if (intval($f['fontnumbervariants']) > 1) echo 's'; ?></div>
              <!--
              <div class="FontsInfos">
                <div class="FontsDescription textType-subtxt textSize-txt-medium colorDark"><?php echo $f['fontdescription']; ?></div>
                <a href="<?php if (!empty($f['fontfile'])) echo url('/content/'.$page->dirname().'/'.$f['fontfile']) ?>" 
                   class="callToAction FontsDownload text-center">
                  <?php echo $page->downloadButtonLabel()->kirbytext(); ?>
                </a>
              </div>
              -->
            </div>
          </li>
        <?php endforeach; ?>
        </ul>
  		</div>


  		<div class="Section-wrapTxt textType-txt marginTop30 colorBrightest text-center">
        <?php echo $page->section1TxtAfter()->kirbytext(); ?>
  		</div>

    </div>

  </main>

<?php snippet('footer') ?>
