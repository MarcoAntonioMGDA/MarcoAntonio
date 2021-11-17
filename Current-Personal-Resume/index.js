const path = require('path');

const express = require('express');

const bodyParser = require('body-parser');

const session = require('express-session');

const csrf = require('csurf');

const flash = require('connect-flash');

const app = express();

const csrfProtection = csrf();

app.set('view engine', 'ejs');

app.set('views', 'views');

const PublicRoutes = require('./routes/public');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(
    session({
      secret: 'my secret',
      resave: false,
      saveUninitialized: false
    })
  );

  app.use(csrfProtection);
  //Use Flash Messages
  app.use(flash());
  
  app.use((req, res, next) => {
      res.locals.csrfToken = req.csrfToken();
      next();
    });

app.use(PublicRoutes);

app.use((error, req, res, next) => {
    res.status(500).render('template', {
        pageTitle: 'Error de Validación',
        PagetoLoad: '500',
        SocialLinks: {
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
    });
  });

app.listen(80);