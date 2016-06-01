<footer class="Footer colorLightBlack textSize-txt-medium textType-txt text-center cf" role="contentinfo">

    <img class="Footer-logo" src="<?php echo url('assets/img/byteFoundryLogoWhite.svg'); ?>" alt="Byte-Foundry">

    <?php snippet('menu', array('prefixe'=>'Footer-')) ?>

    <div class="Footer-copyright">
        <?php echo $site->copyright()->kirbytext() ?>
    </div>

    <div class="Footer-social marginTop30">
        <a class="Footer-socialItem Footer-socialItem-Facebook" target="_blank" href="<?php echo $site->facebook()->html() ?>"></a>
		<a class="Footer-socialItem Footer-socialItem-Instagram" target="_blank" href="<?php echo $site->instagram()->html() ?>"></a>
        <a class="Footer-socialItem Footer-socialItem-Twitter" target="_blank" href="<?php echo $site->twitter()->html() ?>"></a>
	</div>
	<a style="display:none;" href="/blog">blog</a>
    <a style="display:none;" href="/cgu">cgu</a>

</footer>
<?php snippet( c::get('env') . '/scripts' ); ?>

<script src="https://platform.twitter.com/oct.js" type="text/javascript"></script>
<script type="text/javascript">
/* <![CDATA[ */
var google_conversion_id = 952279521;
var google_custom_params = window.google_tag_params;
var google_remarketing_only = true;
/* ]]> */
</script>
<script type="text/javascript" src="https://www.googleadservices.com/pagead/conversion.js"></script>
</body>
</html>
