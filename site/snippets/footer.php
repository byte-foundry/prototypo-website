  <footer class="Footer colorLightBlack textSize-txt-medium textType-txt text-center cf" role="contentinfo">

    <img class="Footer-logo" src="<?php echo url('assets/img/byteFoundryLogoWhite.svg'); ?>" alt="Byte-Foundry">



    <div class="Footer-copyright"><?php echo $site->copyright()->kirbytext() ?></div>

    <div class="Footer-social marginTop30">
      <a class="Footer-socialItem Footer-socialItem-Facebook" href="<?php echo $site->facebook()->html() ?>"></a>
      <a class="Footer-socialItem Footer-socialItem-Twitter" href="<?php echo $site->twitter()->html() ?>"></a>
    </div>

  </footer>

  <?php
      // poor man's env variables (serve dev files when php-cli is used)
      snippet( php_sapi_name() === 'cli-server' ? 'dev/scripts' : 'prod/scripts' );
  ?>

</body>
</html>
