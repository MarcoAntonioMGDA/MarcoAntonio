<?php
session_start();
require_once 'controllers/controllers.php';
?>
<!DOCTYPE html>
<html lang="es">
<head>
     <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php
    //<meta name="viewport" content="width=device-width,user-scalable=no,initial-scale=1,maximum-scale=1">
    Templatectr::getPageNames();
    echo '<title>Marco Antonio Bustillos Quiroz | '.$GLOBALS["Page-Name"].'</title>';
    include 'includes/head.php';
    ?>
</head>
<body>
   <?php
    include 'includes/loader.php';
    echo '<header class="main-screen flex-s-a flex-vcc tac">';
    include 'includes/header.php';
    echo '</header>';
    echo '<main>';
    echo '<nav>';
    include 'includes/nav.php';
    echo '</nav>';
    Templatectr::getPageNames();
    include $GLOBALS["Page-Location"];
    echo '</main>';
    echo '<footer>';
    include 'includes/footer.php';
    echo '</footer>';
    ?>
</body>
</html>