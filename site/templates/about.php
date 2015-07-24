<?php snippet('header') ?>

  <main class="PageContent About" role="main">

    <div class="fitToContent">

  		<header class="PageHeader text-center fitToContent">
    		<h1 class="textType-title textSize-title-large colorWhite"><?php echo $page->section1Title()->kirbytext(); ?></h1>
        <h3 class="textType-subtitle textSize-title-small colorBright"><?php echo $page->section1Subtitle()->kirbytext(); ?></h3>
  		</header>

  		<div class="Section-wrapTxt textType-txt textSize-txt-large marginTop30 colorBrightest text-center">
        <?php echo $page->section1Txt()->kirbytext(); ?>
  		</div>



      <ul class="small-block-grid-1 medium-block-grid-2 large-block-grid-2 marginTop30 Members">


    		<?php
      		$members = yaml($page->members());
      		foreach($members as $member) :
    		?>



        <li class="MembersItem">
          <div class="MembersItem-wrap text-center">
            <div class="MembersItem-photo" style="background-image:url(<?php echo url('content/'.$page->dirname().'/'.$member[memberphoto]); ?>)"></div>

            <div class="MembersItem-bloc">
              <h3 class="MembersItem-name textType-subtitle textSize-title-medium"><?php echo $member[membername]; ?></h3>
              <h3 class="MembersItem-job marginTop15"><?php echo $member[memberjob]; ?></h3>

              <ul class="MembersItem-links text-center">
                <?php if (!empty($member[memberquery])) : ?>
                <li class="MembersItem-linksItem textSize-small">
                  <a href="<?php echo $member[memberquery]; ?>" target="_blank" class="MembersItem-linksItemLink MembersItem-linksItem-query">
                  <span class="show-for-sr">Query</span>
                  </a>
                </li>
                <?php endif; ?>


                <?php if (!empty($member[memberfacebook])) : ?>
                <li class="MembersItem-linksItem textType-txt textSize-txt-small">
                  <a href="<?php echo $member[memberfacebook]; ?>" target="_blank" class="MembersItem-linksItemLink MembersItem-linksItem-facebook">
                  <span class="show-for-sr">Facebook</span>
                  </a>
                </li>
                <?php endif; ?>


                <?php if (!empty($member[membertwitter])) : ?>
                <li class="MembersItem-linksItem textType-txt textSize-txt-small">
                  <a href="<?php echo $member[membertwitter]; ?>" target="_blank" class="MembersItem-linksItemLink MembersItem-linksItem-twitter">
                  <span class="show-for-sr">Twitter</span>
                  </a>
                </li>
                <?php endif; ?>


                <?php if (!empty($member[membergithub])) : ?>
                <li class="MembersItem-linksItem textType-txt textSize-txt-small">
                  <a href="<?php echo $member[membergithub]; ?>" target="_blank" class="MembersItem-linksItemLink MembersItem-linksItem-github">
                  <span class="show-for-sr">GitHub</span>
                  </a>
                </li>
                <?php endif; ?>


                <?php if (!empty($member[membervimeo])) : ?>
                <li class="MembersItem-linksItem textType-txt textSize-txt-small">
                  <a href="<?php echo $member[membervimeo]; ?>" target="_blank" class="MembersItem-linksItemLink MembersItem-linksItem-vimeo">
                  <span class="show-for-sr">Vimeo</span>
                  </a>
                </li>
                <?php endif; ?>


                <?php if (!empty($member[memberwebsite])) : ?>
                <li class="MembersItem-linksItem textType-txt textSize-txt-small">
                  <a href="<?php echo $member[memberwebsite]; ?>" target="_blank" class="MembersItem-linksItemLink MembersItem-linksItem-website">
                  <span class="show-for-sr">Website</span>
                  </a>
                </li>
                <?php endif; ?>


                <?php if (!empty($member[membermail])) : ?>
                <li class="MembersItem-linksItem textType-txt textSize-txt-small">
                  <a href="<?php echo $member[membermail]; ?>" target="_blank" class="MembersItem-linksItemLink MembersItem-linksItem-mail">
                  <span class="show-for-sr">Mail</span>
                  </a>
                </li>
                <?php endif; ?>
              </ul>
            </div>

            <div class="MembersItem-infos colorDarkGray textType-subtxt">
              <div class="MembersItem-description textType-subtxt textSize-txt-small colorDarkest"><?php echo $member[memberdescription]; ?></div>
            </div>
          </div>
        </li>

        <?php
          endforeach;
        ?>


      </ul>


  		<div class="Section-wrapTxt textType-txt marginTop30 colorBrightest text-center">
        <?php echo $page->section1TxtAfter()->kirbytext(); ?>
  		</div>

    </div>

  		<a class="Members-thankstobackers textType-txt marginTop30 colorBrightest text-center"
    		 style="background-image:url(<?php echo url('assets/img/ourAwesomeBackers.png'); ?>)"
         href="<?php echo $site->find('thanks')->url() ?>">
    		<h1 class="textType-title textSize-title-small colorWhite"><?php echo $page->backersTitle()->kirbytext(); ?></h1>
        <h3 class="textType-subtitle textSize-txt-xlarge colorBright"><?php echo $page->backersSubtitle()->kirbytext(); ?></h3>
  		</a>



  </main>

<?php snippet('footer') ?>
