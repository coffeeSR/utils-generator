const express = require("express");
const router = express.Router();

router.get("/", (req,res,next) => {
    try{
        //database query goes here
        //utils query
        res.json({ msg: "Hello From API"});
    }catch (err) {
            next(err);
    }
});

module.exports = router;