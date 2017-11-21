const express = require('express'),
    app = express(),
    path = require('path'),
    bp = require('body-parser'),
    session = require('express-session'),
    port = 8000;

app.use(express.static(path.join(__dirname, '/client/dist')));
app.use(bp.urlencoded({extended: true}));
app.use(bp.json());
app.use(session({secret: 'kjdhfgiehgldh'}));
require('./server/config/mongoose.js');
const routes = require('./server/config/routes.js');
routes(app);

app.listen(port);