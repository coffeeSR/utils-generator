const express = require("express");
const router = express.Router();

const CC = require('currency-converter-lt');

router.get("/", (req,res) => {
    res.render("index");
});

router.get("/about", (req,res) => {
    res.render("about");
})

router.get("/products", (req,res) => {
    res.render("products");
})

router.get("/single-product", (req,res) => {
    res.render("single-product");
})

router.get("/contact", (req,res) => {
    res.render("contact");
})


router.get("/converter/:currency1/:currency2/:value", async(req,res) => {
    const {currency1, currency2, value } = req.params;
    
    //call currency package
    const currencyConverter = new CC({
        from:currency1, 
        to:currency2, 
        amount : Number(value),
    });
    const result= await currencyConverter.convert();
    res.send(
        `Currency Price of ${value} ${currency1} in ${currency2} is ${result}`
    );

});

module.exports = router;