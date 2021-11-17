<?php
session_start();
require_once 'controllers/controllers.php';
echo '<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Marco Antonio Bustillos Quiroz | '.$PageName.'</title>';
include 'includes/head.php';
include 'app/head.php';
echo '
</head>
<body>
<top-header>
';
include 'includes/top-header.php';
echo'
</top-header>
<header>
';
 include 'includes/header.php';
echo '
</header>
<main onclick="destroymenu2()">
';
include $PageLocation;
echo '</main>
<script src="js/typed.js"></script>
<script src="js/writing.js"></script>
</body>
</html>';
?>