const express = require("express");
const router = express.Router();

const System = require("../models/System");

router.post("/setsystem", async (req, res) => {


    try{
        console.log("request received");
        console.log(req.body);
        await System.updateOne({}, req.body);
    }
    catch(err){
        console.log(err)
    }
});


router.post("/getsystem", async (req, res) => {
    try{
        console.log("request received");
        console.log(req.body);
        System.find({}, function(err, result){
            console.log(result);
            res.json(result[0]);
        });
       
    }
    catch(err){
        console.log(err)
    }
});

module.exports = router;