<ul class="Nav-layout hide-for-print">
  <?php foreach($pages->visible() as $p): ?>
  <li class="Nav-layoutItem">
    <a class="Nav-layoutItemLink<?php e($p->isOpen(), ' active') ?>" href="<?php echo $p->url() ?>"><?php echo $p->title()->html() ?></a>
  </li>
  <?php endforeach ?>
  <li class="Nav-layoutItem Nav-layoutItemLogin">
    <a href="" class="Nav-layoutItemLoginLink Nav-layoutItemLink">
      <span class="Nav-layoutItemLoginLinkInner">Login</span>
    </a>
  </li>
</ul>
