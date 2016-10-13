<ul class="<?php echo @$prefixe; ?>Nav-layout hide-for-print">
  <?php foreach($pages->visible() as $p): ?>
  <li class="<?php echo @$prefixe; ?>Nav-layoutItem">
    <a class="<?php echo @$prefixe; ?>Nav-layoutItemLink<?php e($p->isOpen(), ' active') ?>" href="<?php echo $p->url() ?>"><?php echo $p->title()->html() ?></a>
  </li>
  <?php endforeach ?>
  <li class="Footer-Nav-layoutItem">
    <a class="Footer-Nav-layoutItemLink" target="_blank" href="mailto:contact@prototypo.io">Contact us</a>
  </li>
</ul>
