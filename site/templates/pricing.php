<?php snippet('header') ?>

  <main class="PageContent Pricing" role="main">

    <div class="fitToContent">
      
  		<header class="PageHeader text-center fitToContent">
    		<h1 class="textType-title textSize-title-large colorWhite"><?php echo $page->section1Title()->kirbytext(); ?></h1>
        <h3 class="textType-subtitle textSize-title-small colorBright"><?php echo $page->section1Subtitle()->kirbytext(); ?></h3>
  		</header>
  		
  		<div class="Section-wrapTxt textType-txt marginTop30 colorBrightest text-center">
        <?php echo $page->section1Txt()->kirbytext(); ?>
  		</div>
      
      <ul class="small-block-grid-1 medium-block-grid-3 large-block-grid-3 PricingTable">
        
    		
    		<?php 
      		$packs = yaml($page->packs()); 
      		foreach($packs as $id => $pack) :
      		  $state = ($pack[packstate] == 'notavailable') ? 'disabled' : '';
      		  
      		  if ($id == 0) :
        ?>
      	
        <li class="PricingItemFree">
          <div class="PricingItemFree-wrap <?php echo $state; ?>">
            
            <div class="PricingItemFree-wrapIn">
              <div class="PricingItemFree-pack textType-txt text-center textSize-txt-large colorWhite"><?php echo nl2br($pack[packservices]); ?></div>
            </div>
              
            <div class="PricingItemFree-getStarted callToAction <?php echo $state; ?>"><?php echo $pack[packbuttonlabel]; ?></div>
            
            <div class="clear"></div>
            
          </div>
        </li>
        
      	<?php	  
      		  else :
    		?>
    		
        <li class="PricingItem">
          <div class="PricingItem-wrap <?php echo $state; ?>">
            <h3 class="PricingItem-title textType-subtitle textSize-title-large <?php if ($state == 'disabled') echo 'colorGray'; else echo 'colorSecondBackgroundColor'; ?>"><?php echo $pack[packname]; ?></h3>
            <h6 class="PricingItem-price textType-txt textSize-txt-small colorDarkGray"><?php echo $pack[packprice]; ?></h6>
            
            <div class="PricingItem-infos textType-subtxt colorDarkGray">
              <div class="PricingItem-pack textType-txt textSize-txt-medium"><?php echo nl2br($pack[packservices]); ?></div>
              <div class="PricingItem-content textType-txt textSize-txt-small"><?php echo nl2br($pack[packdescription]); ?></div>
              <div class="PricingItem-getStarted">
                <div class="callToAction <?php echo $state; ?>"><?php echo $pack[packbuttonlabel]; ?></div>
              </div>
            </div>
          </div>
        </li>
        
        <?php
            endif;
          endforeach;
        ?>
    
      
      </ul>
      
      
  		<div class="Section-wrapTxt textType-txt textSize-txt-large marginTop30 colorBrightest text-center">
        <?php echo $page->section1TxtAfter()->kirbytext(); ?>
  		</div>
      
      
    </div>

  </main>

<?php snippet('footer') ?>