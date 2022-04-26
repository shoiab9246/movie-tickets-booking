const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();

const User = require("../models/User");

router.post("/signup", async (req, res) => {
    console.log("register called");
    console.log(req.body.username);
    console.log(req.body.email);
    console.log(req.body.password)
    if (!req.body.email || !req.body.password) {
        res.statusCode = 500
        res.send({
          name: "Error",
          message: "Both Email and Password are required",
        })
      }
    else {
        const {username,email,password} = req.body;
        const usertype = "user";
        try{
            let user = await User.findOne({email});

            if (user) {
                return res.status(400).json({msg: "User Already Exists"});
            }

            user = new User({username,email,password,usertype});

            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);

            await user.save();

            res.status(200).send({user});
        }
        catch(err){
            console.log(err.message);
            res.status(500).send("Error in Saving");
        }
    }
});

router.post("/login", async (req, res) => {

    console.log("login called");
    console.log(req.body.email);
    console.log(req.body.password)

    const { email, password } = req.body;

    try{
        let user = await User.findOne({email});
        if (!user) return res.status(400).json({message: "User Not Exist"});

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({message: "Incorrect Password !"});

        res.status(200).json({message: "Logged In Successfully", username: user.username, usertype: user.usertype});
    }
    catch(err){
        console.error(e);
        res.status(500).json({message: "Server Error"});
    }
});


router.post("/info", async (req, res) => {


    try{
        console.log("request received");
        console.log(req.body);
        await User.updateOne({username: [req.body.username]}, req.body);
    }
    catch(err){
        console.log(err)
    }
});

router.post ("/getinfo", async (req, res) => {
    const userid = req.body.userid;
    try{
        console.log("request received getinfo");
        //console.log(req.body);
        User.find({email: userid}, function(err, result){
            console.log(result[0])
            res.json(result[0]);
        });
    }
    catch(err){
        console.log(err)
    }
});

module.exports = router;
