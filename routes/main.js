const express = require('express');
const axios = require('axios');

class Main {
    constructor() {
        this.router = express.Router();
        this.router.get('/login', this.login.bind(this));
    }

    login(req, res) {
        res.render('login', {
            title: 'login'
        })
    }
}

module.exports = Main;
