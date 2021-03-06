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
router.get('/sayHello/:id/:city', (req, res) => {
    console.log("====Path Parameter====="+req.params.id);
    console.log("====Query Parameter====="+req.query.name);
    console.log("====Query Parameter====="+req.query.age);
    console.log("====Path Parameter====="+req.params.city);
    res.send('Hello Good Morning...!'+req.query.name+' '+req.params.id);
});

/* Get Products Data From Database*/
router.get('/products', (req , res) => {
    console.log("Connection Done Successfully.....!");        
    dbconfig.getConnection().query("SELECT * FROM product_master", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });        
})

/* Get Product By Id Data From Database*/
router.get('/products/:id', (req , res) => {
    let productId = req.params.id;
    console.log("Connection Done Successfully.....!");        
    dbconfig.getConnection().query("SELECT * FROM product_master where product_id="+productId, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });        
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
        let insertQuery = "insert into product_master (code,description,price) values('"+ product.code +"','"+ product.description +"',"+ product.price +")";
        console.log(insertQuery);
        dbconfig.getConnection().query(insertQuery, function (err, result, fields) {
         if (err) throw err;
             console.log(result);
             res.send(result);
         });    
})

/* Update Data via POST_MAN to NodeJS/MySQL*/
router.put('/products/:id',(req , res) => {
    console.log(req.body);
    let product = req.body;
    let productId = req.params.id;
    console.log(product+" == "+product["product_id"]);    
    console.log(product+" === "+product.product_id);    
        let updateQuery = "update product_master set code = '"+ product.code +"',description = '"+ product.description +"',price ="+ product.price +" where product_id="+productId;
        console.log(updateQuery);
        dbconfig.getConnection().query(updateQuery, function (err, result, fields) {
         if (err) throw err;
             console.log(result);
             res.send(result);
         });    
})

/* Delete Data via POST_MAN to NodeJS/MySQL*/
router.delete('/products/:id',(req , res) => {
    console.log(req.body);
    let productId = req.params.id;
        let deleteQuery = "delete from product_master where product_id="+productId;
        console.log(deleteQuery);
        dbconfig.getConnection().query(deleteQuery, function (err, result, fields) {
         if (err) throw err;
             console.log(result);
             res.send(result);
         });    
})

module.exports = router;
