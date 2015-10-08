<?php

/*
 * Add support to remove p tags from around kirby formatted text
 *
 * Author: Rob James
 * License: MIT License
 *
 */
function kirbytextSans($text='') {
    $text = kirbytext::init($text, true);
    return preg_replace('/<p>(.*)<\/p>/', '$1', $text);
}
