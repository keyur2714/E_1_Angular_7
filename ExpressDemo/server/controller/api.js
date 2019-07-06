const express = require('express');
const router = express.Router();
const axios = require('axios');

/* GET api listing. */
router.get('/', (req, res) => {
    res.send('Hello Radhe Krishna…');
});

/* GET api listing. */
router.get('/sayHello', (req, res) => {
    res.send('Hello Good Morning...!');
});

module.exports = router;
