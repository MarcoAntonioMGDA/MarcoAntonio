<?php
if ( isset( $_GET["path"] ) ) {

    switch ( $_GET["path"] ) {
        case "home":
        $PageName = "Inicio";
        $PageLocation = "pages/home.php";
        break;
        case "about":
        $PageName = "About";
        $PageLocation = "pages/about.php";
        break;
        case "resume":
        $PageName = "Resume";
        $PageLocation = "pages/resume.php";
        break;
        case "portafolio":
        $PageName = "Portafolio";
        $PageLocation = "pages/portafolio.php";
        break;
        case "contact":
        $PageName = "Contacto";
        $PageLocation = "pages/contact.php";
        break;
        default:
        $PageName = "Página no encontrada";
        $PageLocation = "pages/404.php";
    }
} else {
    $PageName = "Inicio";
    $PageLocation = "pages/home.php";
}
$FBLink = "https://www.facebook.com/Marco-Antonio-Bustillos-Quiroz-100977364939451/";
$TWLink = "https://twitter.com/MarAntBQ";
$WALink = "https://api.whatsapp.com/message/76OGEPGPDWQ2A1";
$PHLink = "tel:+593982345160";
$LinLink = "https://www.linkedin.com/in/marco-antonio-bustillos-quiroz-a98195165/";
$GitLink = "https://github.com/MarcoAntonioMGDA";
$IGLink = "https://www.instagram.com/marantbq/";
$YTLink  = "https://www.youtube.com/channel/UCdVLdxEW8STQq-IP8HTndag/";
$ELink = "mailto:hire-me@fullstackwebdeveloper.xyz";
?>