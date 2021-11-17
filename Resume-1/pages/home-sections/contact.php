<h1>Contact Me</h1>
<p class="tittle-line"><i class="fas fa-dot-circle"></i><span></span><i class="fab fa-html5"></i><i class="fab fa-css3-alt"></i><i class="fab fa-php"></i><i class="fab fa-sass"></i><i class="fab fa-js"></i><span></span><i class="fas fa-dot-circle"></i></p>
<div class="flex-s-a flex-wrap-reverse">
    <div class="box-6 box-i-10 flex-vc">
        <div class="form-container">
            <?php
         
        if (isset($_SESSION["MSGFM"])) {
            echo $_SESSION["MSGFM"];
        }
        unset($_SESSION["MSGFM"]);
        ?>
            <form method="post">
                <p>Your name:</p>
                <input type="text" name="name" required placeholder="Enter your name" value="<?php if(isset($_SESSION["NAME"])){echo $_SESSION["NAME"];} ?>">
                <p>Email:</p>
                <input type="email" name="mail" required placeholder="Enter your email" value="<?php if(isset($_SESSION["EMAIL"])){echo $_SESSION["EMAIL"];} ?>">
                <p>Phone:</p>
                <input type="tel" name="phone" required maxlength="10" pattern="[0-9]{10}" placeholder="Enter your phone" value="<?php if(isset($_SESSION["PHONE"])){echo $_SESSION["PHONE"];} ?>">
                <p>Message:</p>
                <textarea name="message" required placeholder="Enter your message"><?php if(isset($_SESSION["MESSAGE"])){echo $_SESSION["MESSAGE"];} ?></textarea>
                <button type="submit" class="">Send Message <i class="fas fa-paper-plane"></i></button>
                <input type="hidden" name="contactForm">
            </form>
            <?php
    unset($_SESSION["NAME"]);
    unset($_SESSION["EMAIL"]);
    unset($_SESSION["PHONE"]);
    unset($_SESSION["MESSAGE"]);
    ?>
        </div>
    </div>
    <div class="box-6 box-i-10 box-p-12 flex-vcc flex-hc">
        <a href="documents/registered-brand.pdf" target="_blank"><img src="img/pages/home/negative.png" alt="My Brand Negative Logo" class="w50p dblock mauto"></a>
        <p class="fs18px lh2em w100p mb5px">If you want to change the world like me, we can work together, get in touch with me by sending me an email through the form, or you can follow me in my social media; I promise that you won’t never repent:</p>
        <div class="contact-social-media-flex">
            <a href="<?php echo $GLOBALS["Twitter-Link"];?>"><i class="fab fa-twitter"></i></a>
            <a href="<?php echo $GLOBALS["Instagram-Link"]?>"><i class="fab fa-instagram"></i></a>
        </div>

    </div>
</div>
