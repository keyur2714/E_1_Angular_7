const express = require('express');
const router = express.Router();
const axios = require('axios');
const dbconfig = require('../config/dbconfig');
const APIURL = 'http://localhost:3000';

 
/* GET api listing. */
router.get('/', (req, res) => {
    res.send('Hello Radhe Krishna…');
});

/* GET api listing. */
router.get('/sayHello', (req, res) => {
    res.send('Hello Good Morning...!');
});

/* Get Products Data From Database*/
router.get('/products', (req , res) => {
    dbconfig.getConnection().connect(function(err) {
        if (err) throw err;
        console.log("Connection Done Successfully.....!");        
        dbconfig.getConnection().query("SELECT * FROM product_master", function (err, result, fields) {
            if (err) throw err;
            console.log(result);
            res.send(result);
        });    
    })
})

/* Get Products Daay From WEB API/ JSON Server */
router.get('/productsWeb', (req , res) => {
    console.log(`${APIURL}/products`);
    axios.get(`${APIURL}/products`)
    .then(posts => {      
      res.status(200).json(posts.data);
    })
    .catch(error => {
      alert(1);  
      res.status(500).send(error)
    });
})

module.exports = router;
