const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const PlanetRouter = require('./helpers/create_router.js');
const data = require('../db/planets.js');

const publicPath = path.join(__dirname, '../../client/public');

app.use('/', express.static(publicPath));
app.use(bodyParser.json());

const planetRouter = new PlanetRouter(data);
app.use('/api/exoplanets', planetRouter);

const port = process.env.PORT || 3000
app.listen(port, function () { console.log(`Listening on port ${ port }`);
});
