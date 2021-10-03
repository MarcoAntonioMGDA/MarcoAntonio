const path = require('path');

const express = require('express');

const router = express.Router();

//Home
router.get('/', (req, res, next) => {
    res.render('template', {
        pageTitle: 'Home',
        PagetoLoad: 'home',
    });
});
//About
router.get('/about', (req, res, next) => {
    res.render('template', {
        pageTitle: 'About',
        PagetoLoad: 'about',
    });
});

//Resume
router.get('/resume', (req, res, next) => {
    res.render('template', {
        pageTitle: 'Resume',
        PagetoLoad: 'resume',
    });
});

//Portafolio
router.get('/portafolio', (req, res, next) => {
    res.render('template', {
        pageTitle: 'Portafolio',
        PagetoLoad: 'portafolio',
    });
});

//Portafolio
router.get('/contact', (req, res, next) => {
    res.render('template', {
        pageTitle: 'Contact',
        PagetoLoad: 'contact',
    });
});

//404
router.use((req, res, next) => {
    res.status(404).render('template', {
        pageTitle: 'Page Not Found',
        PagetoLoad: '404',
    });
});

module.exports = router;