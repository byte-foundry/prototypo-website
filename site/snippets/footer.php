<footer class="Footer colorLightBlack textSize-txt-medium textType-txt text-center cf white">

	<img class="Footer-logo" src="<?php echo url('assets/img/prototypoIconWhite.svg'); ?>" alt="Prototypo App">

	<?php snippet('menu', array('prefixe'=>'Footer-')) ?>

	<p class="white marginTop30 fitToContent">Don't miss out on news, features and special offers. Subscribe to our newsletter!</p>

	<form action="http://sendy.kuem.me.uk/subscribe" method="POST" accept-charset="utf-8" class="form-small Newsletter text-center marginTop30 marginBottom30">
		<input class="form-input form-newsletter-input Newsletter-name" type="text" name="name" id="name" placeholder="Your name">
		<input class="form-input form-newsletter-input Newsletter-email" type="text" name="email" id="email" placeholder="Your email">
		<input type="hidden" name="list" value="Y184XoR6ydCgo8ar4qA892rg">
		<input class="form-newsletter-input NewsletterInput-submit callToAction" type="submit" id="submit" name="submit" value="Keep me posted">
	</form>

	<div class="Footer-social marginTop30">
		<a class="Footer-socialItem Footer-socialItem-Facebook" target="_blank" href="<?php echo $site->facebook()->html() ?>"></a>
		<a class="Footer-socialItem Footer-socialItem-Instagram" target="_blank" href="<?php echo $site->instagram()->html() ?>"></a>
		<a class="Footer-socialItem Footer-socialItem-Dribbble" target="_blank" href="<?php echo $site->dribbble()->html() ?>"></a>
		<a class="Footer-socialItem Footer-socialItem-Twitter" target="_blank" href="<?php echo $site->twitter()->html() ?>"></a>
	</div>
	<a style="display:none;" href="/blog">blog</a>
	<a style="display:none;" href="/cgu">cgu</a>



		<div class="Footer-copyright marginTop60">
			© <a href="/about">Prototypo</a> 2009 -  <?php echo date("Y"); ?> | Fonts powered by <a href="http://www.productiontype.com" target="_blank">Production Type</a>
      <?php echo $site->copyright()->kirbytextSans(); ?> - Call us: +33 (0)7 69 70 38 55
		</div>


</footer>

<section id="subscribed" class="Section gradient-green hide-for-print text-center">
	<h2 class="textType-title textSize-title-medium colorWhite"><?php echo $page->sectionSubscribedTitle()->kirbytextSans(); ?></h2>
	<h3 class="textType-subtitle textSize-title-small colorBrightest marginTop30">
		<?php echo $page->SectionSubscribedSubtitle()->kirbytextSans(); ?>
	</h3>
</section>

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
