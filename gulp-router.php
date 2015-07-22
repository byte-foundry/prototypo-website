<?php
// This file will redirect requests to static resource to the Connect server
echo 'SERVER REQUEST URI ====> ' . $_SERVER["REQUEST_URI"];
$pathinfo = pathinfo( $_SERVER["REQUEST_URI"] );

// static assets have an extension and it's not .php
if ( !isset($pathinfo['extension']) || $pathinfo['extension'] !== 'php' ) {
	header("Location: http://localhost:8001" . $_SERVER["REQUEST_URI"]);
	die();

} else {
	return true;
}
?>
