<?php snippet('header') ?>

  <main class="PageContent Pricing" role="main">

    <div class="fitToContent">
      
  		<header class="PageHeader text-center fitToContent">
    		<h1 class="textType-title colorWhite"><?php echo $page->section1Title()->kirbytext(); ?></h1>
        <h3 class="textType-subtitle colorBright"><?php echo $page->section1Subtitle()->kirbytext(); ?></h3>
  		</header>

      
      <ul class="small-block-grid-1 medium-block-grid-3 large-block-grid-3">
        
    		
    		<?php 
      		$packs = yaml($page->packs()); 
      		foreach($packs as $pack) :
      		  $state = ($pack[packstate] == 'notavailable') ? 'disabled' : '';
    		?>
    		
        <li class="PricingItem">
          <div class="PricingItem-wrap <?php echo $state; ?>">
            <h3 class="PricingItem-title <?php if ($state == 'disabled') echo 'colorGray'; else echo 'colorSecondBackgroundColor'; ?>"><?php echo $pack[packname]; ?></h3>
            <h6 class="PricingItem-price"><?php echo $pack[packprice]; ?></h6>
            
            <div class="PricingItem-infos textType-subtxt">
              <div class="PricingItem-pack"><?php echo nl2br($pack[packservices]); ?></div>
              <div class="PricingItem-content"><?php echo nl2br($pack[packdescription]); ?></div>
              <div class="PricingItem-getStarted">
                <div class="callToAction <?php echo $state; ?>"><?php echo $pack[packbuttonlabel]; ?></div>
              </div>
            </div>
          </div>
        </li>
        
        <?php
          endforeach;
        ?>
    
      
      </ul>
      
    </div>

  </main>

<?php snippet('footer') ?>