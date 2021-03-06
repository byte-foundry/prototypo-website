<?php

/*

---------------------------------------
License Setup
---------------------------------------

Please add your license key, which you've received
via email after purchasing Kirby on http://getkirby.com/buy

It is not permitted to run a public website without a
valid license key. Please read the End User License Agreement
for more information: http://getkirby.com/license

*/

c::set('license', 'K2-PRO-a53d96d2213b6eee6cb82ebc7b7ed10f');
c::set('url', '/');
c::set('env', php_sapi_name() === 'cli-server' &&
	!( isset($_SERVER['HTTP_USER_AGENT']) && preg_match('/^wget/i' , $_SERVER['HTTP_USER_AGENT'] ) ) ? 'dev' : 'prod' );

/*

---------------------------------------
Kirby Configuration
---------------------------------------

By default you don't have to configure anything to
make Kirby work. For more fine-grained configuration
of the system, please check out http://getkirby.com/docs/advanced/options

*/
