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
router.get('/sayHello/:id', (req, res) => {
    console.log("====Path Parameter====="+req.params.id);
    console.log("====Query Parameter====="+req.query.name);
    res.send('Hello Good Morning...!'+req.query.name+' '+req.params.id);
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

/* Get Product By Id Data From Database*/
router.get('/products/:id', (req , res) => {
    let productId = req.params.id;
    dbconfig.getConnection().connect(function(err) {
        if (err) throw err;
        console.log("Connection Done Successfully.....!");        
        dbconfig.getConnection().query("SELECT * FROM product_master where product_id="+productId, function (err, result, fields) {
            if (err) throw err;
            console.log(result);
            res.send(result);
        });    
    })
})

/* Get Products Data From WEB API/ JSON Server */
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

/* POST DATA via POST_MAN to NodeJS/MySQL*/
router.post('/products',(req , res) => {
    console.log(req.body);
    let product = req.body;
    console.log(product+" == "+product["product_id"]);    
    console.log(product+" === "+product.product_id);    

    dbconfig.getConnection().connect(function(err) {
        if (err) throw err;
        console.log("Connection Done Successfully.....!");        
        let insertQuery = "insert into product_master (code,description,price) values('"+ product.code +"','"+ product.description +"',"+ product.price +")";
        console.log(insertQuery);
        dbconfig.getConnection().query(insertQuery, function (err, result, fields) {
         if (err) throw err;
             console.log(result);
             res.send(result);
         });    
    })    
})

module.exports = router;
