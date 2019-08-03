const express = require('express');
const router = express.Router();
const axios = require('axios');
const dbconfig = require('../config/dbconfig');
const APIURL = 'http://localhost:3000';

//Form Mongo
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mongodemo";
 
/* GET api listing. */
router.get('/', (req, res) => {
    res.send('Hello Radhe Krishna…');
});


/* Get Products Data From Database*/
router.get('/products', (req , res) => {    
        var dbot = dbconfig.getDbClient();
        console.log(dbot);
        MongoClient.connect(url,{ useNewUrlParser: true }, function(err, db) {
            if (err) throw err;
            var dbo = db.db("mongodemo");
            dbo.collection("product").find({}).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            db.close();   
            return res.send(result);         
            });    
        });    
})

/* Get Products Data From Database*/
router.get('/products/:id', (req , res) => {    
    let productId = parseInt(req.params.id);    
    console.log(productId+" === ");    
    let query = {
        "product_id": productId
    };
    MongoClient.connect(url,{ useNewUrlParser: true }, function(err, db) {        
        if (err) throw err;
        var dbo = db.db("mongodemo");
        dbo.collection("product").find(query).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();   
        return res.send(result);         
        });    
    });    
})

/* POST DATA via POST_MAN to NodeJS/MySQL*/
router.post('/products',(req , res) => {
    console.log(req.body);
    let product = req.body;
    console.log(product+" == "+product["product_id"]);    
    console.log(product+" === "+product.product_id);    
    MongoClient.connect(url,{ useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mongodemo");        
        dbo.collection("product").insertOne(product, function(err, result) {
          if (err) throw err;
          console.log("1 product document inserted");
          db.close();
          return res.send(result)
        });
      });        
})

/* Update Data via POST_MAN to NodeJS/MySQL*/
router.put('/products/:id',(req , res) => {
    console.log(req.body.code+" *** ");
    //let product = req.body;
    let product = {
        product_id : req.body.product_id,
        code : req.body.code,
        description : req.body.description,
        price : req.body.price
    };
    let productId = parseInt(req.params.id);
    console.log(product+" == "+product["product_id"]);    
    console.log(product+" === "+product.product_id);    
        
        MongoClient.connect(url,{ useNewUrlParser: true }, function(err, db) {
            if (err) throw err;
            var dbo = db.db("mongodemo");
            var myquery = { product_id: productId };
            var newvalues = { $set: product};
            console.log(newvalues);
            dbo.collection("product").updateOne
            (myquery, newvalues,{ upsert: true }, function(err, result) {
            if (err) throw err;
            console.log("1 product document updated");
            db.close();
            return res.send(result);
            });
        });
    })

    /* Delete Data via POST_MAN to NodeJS/MongoDb*/
    router.delete('/products/:id',(req , res) => {
        console.log("====================");
        let productId = parseInt(req.params.id);
        console.log(productId);
        
        MongoClient.connect(url,{ useNewUrlParser: true }, function(err, db) {
            var dbo = db.db("mongodemo");
            if (err) throw err;
            var myquery = { "product_id": productId };
           
            dbo.collection("product").deleteOne(myquery)
            .then(result => {
                    console.log(`Deleted ${result.deletedCount} item.`);
                    return res.json(result);                
                }                
            )
            .catch(err => console.error(`Delete failed with error: ${err}`))           
          });        
    })
module.exports = router;
