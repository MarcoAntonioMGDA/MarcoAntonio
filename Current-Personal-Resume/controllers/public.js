const socialLinks = {
    Facebook: "https://www.facebook.com/MarAntBQFullStackWebDeveloper/",
    Twitter: "https://twitter.com/MarAntBQ",
    WhatsApp: "https://api.whatsapp.com/send?phone=59382345160",
    Phone: "tel:+593982345160",
    Instagram: "https://www.instagram.com/marantbq/",
    Youtube: "https://www.youtube.com/channel/UCdVLdxEW8STQq-IP8HTndag/",
    Email: "mailto:hire-me@fullstackwebdeveloper.xyz",
    Linkedin: "https://www.linkedin.com/in/marantbq/",
    GitHub: "https://github.com/MarcoAntonioMGDA",
    Copyright: "https://Sites.MarBust.com"
}

//Validator of Inputs
const {
    validationResult
} = require('express-validator');

///////////////NodeMailer//////////////////////////////////
const nodemailer = require('nodemailer');

// Transporter
const transporter = nodemailer.createTransport({
    host: "mail.domain",
    port: 465,
    secure: true,
    auth: {
        user: "email@domain", // generated ethereal user
        pass: "password" // generated ethereal password
    }
});

//////////////////Ends/////////////////////////////////////



//Home
exports.getIndex = (req, res, next) => {
    res.render('template', {
        pageTitle: 'Home',
        PagetoLoad: 'home',
        SocialLinks: socialLinks
    });
};
//About
exports.getAbout = (req, res, next) => {
    res.render('template', {
        pageTitle: 'About',
        PagetoLoad: 'about',
        SocialLinks: socialLinks
    });
};

//Resume
exports.getResume = (req, res, next) => {
    res.render('template', {
        pageTitle: 'Resume',
        PagetoLoad: 'resume',
        SocialLinks: socialLinks
    });
};

//Portafolio
exports.getPortafolio = (req, res, next) => {
    res.render('template', {
        pageTitle: 'Portafolio',
        PagetoLoad: 'portafolio',
        SocialLinks: socialLinks
    });
};

//Contact
exports.getContact = (req, res, next) => {
    let message = req.flash('error');
    if (message.length > 0) {
        message = message[0];
    } else {
        message = null;
    }
    res.render('template', {
        pageTitle: 'Contact',
        PagetoLoad: 'contact',
        SocialLinks: socialLinks,
        errorMessage: message,
        oldInput: {
            name: '',
            mail: '',
            phone: '',
            formMessage: ''
        },
        validationErrors: []
    });
};

//Post Contact
exports.postContact = (req, res, next) => {
    const {
        name,
        mail,
        phone,
        formMessage
    } = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).render('template', {
            pageTitle: 'Contact',
            PagetoLoad: 'contact',
            SocialLinks: socialLinks,
            errorMessage: errors.array()[0].msg,
            oldInput: {
                name: name,
                mail: mail,
                phone: phone,
                formMessage: formMessage
            },
            validationErrors: errors.array()
        });
    }
    transporter.sendMail({
            to: 'xxxxxxxx@xxxxxx.xxxxx', //Please add your personal email where you'll receive the contact form response
            from: mail,
            subject: 'Formulario de Contactos | ' + name,
            html: `
        <h1 style='text-align: center;'>Formulario de Contacto</h1>
        <hr>
    <ul style='line-height: 2em;'>
    <li><strong>Nombre:</strong> ${name}</li>
    <li><strong>Correo:</strong> <a href="mailto:${mail}">${mail}</a></li>
    <li><strong>Teléfono:</strong> ${phone}</li>
    <li><strong>Mensaje:</strong> ${formMessage}</li>
    </ul>
    <hr>
    <p style='text-align: center;'><strong>Form made with Marbust Websites&reg;'s Technology under the Marbust Technology Company License</strong></p>
    `
        }).then(function (success) {
            req.flash('error', 'Mensaje Enviado Correctamente!');
            res.redirect('/contact');
        })
        .catch(err => {
            const error = new Error(err);
            error.httpStatusCode = 500;
            return next(error);
        });
};

//Get 500
exports.get500 = (req, res, next) => {
    res.render('template', {
        pageTitle: 'Error de Validación',
        PagetoLoad: '500',
        SocialLinks: socialLinks
    });
};



//404
exports.use404 = (req, res, next) => {
    res.status(404).render('template', {
        pageTitle: 'Page Not Found',
        PagetoLoad: '404',
        SocialLinks: socialLinks
    });
};

//500
exports.use500 = (req, res, next) => {
    res.status(500).render('template', {
        pageTitle: 'Error de Validación',
        PagetoLoad: '500',
        SocialLinks: socialLinks
    });
};