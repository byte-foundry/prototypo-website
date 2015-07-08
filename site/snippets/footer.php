  <footer class="Footer colorLightBlack textSize-txt-medium textType-txt text-center cf" role="contentinfo">

    <img class="Footer-logo" src="<?php echo url('assets/img/byteFoundryLogoWhite.svg'); ?>" alt="Byte-Foundry">

      <?php snippet('menu', array('prefixe'=>'Footer-')) ?>

    <div class="Footer-copyright"><?php echo $site->copyright()->kirbytext() ?></div>

    <div class="Footer-social marginTop30">
      <a class="Footer-socialItem Footer-socialItem-Facebook" href="<?php echo $site->facebook()->html() ?>"></a>
      <a class="Footer-socialItem Footer-socialItem-Twitter" href="<?php echo $site->twitter()->html() ?>"></a>
    </div>

  </footer>


  <?php echo js('assets/scripts.min.js') ?>

</body>
</html>
