<?php
    $backers = json_decode(file_get_contents($json));
    echo count($backers);
    echo "\n";
    echo $json;
    foreach($backers as $backer) :
        if ($backer->url != '') :
          $displayUrl = parse_url($backer->url);
          $displayUrl = $displayUrl['host'];
        endif;
?>

  <li class="AwesomeBacker">
    <?php if ($backer->url != '') :
      $urlBefore = (substr($backer->url,0,7) != 'http://' && substr($backer->url,0,8) != 'https://') ? 'http://' : '';?>
      <a href="<?php echo $urlBefore.$backer->url; ?>" target="_blank">
    <?php endif; ?>

    <img class="AwesomeBacker-avatar" src="<?php echo $backer->avatar == '' ? url('assets/img/pictos/pictoMissingAvatar.svg') : $backer->avatar; ?>">
    <div class="AwesomeBacker-name textType-txt textSize-txt-medium colorBrightest"><?php echo $backer->name; ?></div>

    <?php if ($backer->url != '') :
    ?>
      <a class="AwesomeBacker-url textType-txt textSize-txt-xsmall colorDarkGray" href="<?php echo $urlBefore.$backer->url; ?>" target="_blank"><?php echo $backer->url; ?></a>
    <?php endif; ?>

    <?php if ($backer->url != '') : ?>
      </a>
    <?php endif; ?>
  </li>

<?php
  endforeach;
?>
