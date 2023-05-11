require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const { engine } =  require('express-handlebars');

const Main = require('./routes/main');
const main = new Main();

const { PORT } = process.env;
const app = express();

app
    .engine('handlebars', engine())
    .set('view engine', 'handlebars')
    .use(express.urlencoded({ extended: true }))
    .use(cookieParser())
    .use('/', main.router)
    .all('*', (req, res) => res.sendStatus(404))
    .listen(PORT, () => console.log(`Service démarré sur le port ${PORT}`) );
