    <footer class="Footer colorLightBlack textSize-txt-medium textType-txt text-center cf" role="contentinfo">

        <img class="Footer-logo" src="<?php echo url('assets/img/byteFoundryLogoWhite.svg'); ?>" alt="Byte-Foundry">

        <?php snippet('menu', array('prefixe'=>'Footer-')) ?>

        <div class="Footer-copyright">
            <?php echo $site->copyright()->kirbytext() ?>
        </div>

        <div class="Footer-social marginTop30">
            <a class="Footer-socialItem Footer-socialItem-Facebook" target="_blank" href="<?php echo $site->facebook()->html() ?>"></a>
            <a class="Footer-socialItem Footer-socialItem-Twitter" target="_blank" href="<?php echo $site->twitter()->html() ?>"></a>
        </div>

    </footer>
</main>
<script type="text/javascript" src="https://js.stripe.com/v2/"></script>
<?php snippet( c::get('env') . '/scripts' ); ?>

<script type="text/javascript" src="https://api.taxamo.com/js/v1/taxamo.all.nojquery.js"></script>

<script type="text/javascript">
   adroll_adv_id = "TTP725TQI5FEZIX2X4TIUJ";
   adroll_pix_id = "7GNFXBZIR5G5VDEFAEZAK3";
   (function () {
       var _onload = function(){
           if (document.readyState && !/loaded|complete/.test(document.readyState)){setTimeout(_onload, 10);return}
           if (!window.__adroll_loaded){__adroll_loaded=true;setTimeout(_onload, 50);return}
           var scr = document.createElement("script");
           var host = (("https:" == document.location.protocol) ? "https://s.adroll.com" : "http://a.adroll.com");
           scr.setAttribute('async', 'true');
           scr.type = "text/javascript";
           scr.src = host + "/j/roundtrip.js";
           ((document.getElementsByTagName('head') || [null])[0] ||
               document.getElementsByTagName('script')[0].parentNode).appendChild(scr);
       };
       if (window.addEventListener) {window.addEventListener('load', _onload, false);}
       else {window.attachEvent('onload', _onload)}
   }());
</script>
<script>(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',intercomSettings);}else{var d=document;var i=function(){i.c(arguments)};i.q=[];i.c=function(args){i.q.push(args)};w.Intercom=i;function l(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/mnph1bst';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);}if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})()</script>
</body>
</html>
