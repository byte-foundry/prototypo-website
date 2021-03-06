<?php

define('DS', DIRECTORY_SEPARATOR);

// uncomment to enable error reporting on prod
// error_reporting(E_ALL);
// ini_set('display_errors', 1);

// load kirby
require(__DIR__ . DS . 'kirby' . DS . 'bootstrap.php');

// check for a custom site.php
if(file_exists(__DIR__ . DS . 'site.php')) {
  require(__DIR__ . DS . 'site.php');
} else {
  $kirby = kirby();
}

//Please call 911

// render
echo $kirby->launch();
