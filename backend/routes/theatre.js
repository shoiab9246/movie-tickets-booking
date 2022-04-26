const express = require("express");
const router = express.Router();

const Theatre = require("../models/Theatre");

async function add_theatres(){
    var data = [{name: "AMC Bloomington 11", city: "Bloomington", state:"Indiana",
    seats: [["A", "10"],["B", "10"],["C", "10"],["D", "10"],["E", "10"],["F", "10"]], seatsAvailable: 60, costPerMonth: 1000},
    {name: "AMC Bloomington 12", city: "Bloomington", state:"Indiana",
    seats: [["A", "10"],["B", "10"],["C", "10"],["D", "10"],["E", "10"],["F", "10"],["G", "10"]], seatsAvailable: 70, costPerMonth: 1000},
    {name: "AMC Sqauare Quad", city: "Indianapolis", state:"Indiana",
    seats: [["A", "10"],["B", "10"],["C", "10"],["D", "10"],["E", "10"],["F", "10"],["G", "10"],["H", "10"]], seatsAvailable: 80, costPerMonth: 1200}]

    await Theatre.deleteMany().then(function(){console.log("Deleted theatre data")});

    await Theatre.insertMany(data).then(function(){console.log("Dummy Theatre data inserted")}
    ).catch(function(err){console.log(err)});
};

router.post("/theatrebycity", async (req, res) => {
    const city_name = req.body.city;
    const state_name = req.body.state;
    try{
        console.log("request received");
        console.log(req.body.city);
        console.log(req.body.state)
        Theatre.find({city:city_name}, function(err, result){
            res.json(result);
        });
    }
    catch(err){
        console.log(err)
    }
});

router.post("/addtheatre", async (req, res) => {
    try{
        console.log("request received");
        console.log(req.body);
        const theatre = new Theatre(req.body);
        await theatre.save();
    }
    catch(err){
        console.log(err)
    }
});

router.get("/gettheatre", async (req, res) => {
    const theatreName = req.body.name;
    try{
        console.log("request received");
        console.log(req.body);
        Theatre.find({name: theatreName}, function(err, result){
            res.json(result);
        });
    }
    catch(err){
        console.log(err)
    }
});

router.get("/gettheatrebyid", async (req, res) => {
    const theatreId = req.body.theatre_id;
    try{
        console.log("request received");
        console.log(req.body);
        Theatre.find({id: theatreId}, function(err, result){
                res.json(result);
            });
        }
        catch(err){
            console.log(err)
        }
    });

    
router.post("/gettheatrebyID", async (req, res) => {
    const theatreId = req.body.theatreId;
    try{
        console.log("request received");
        console.log(req.body);
        Theatre.find({_id: theatreId}, function(err, result){
            res.json(result);
        });
    }
    catch(err){
        console.log(err)
    }
});
router.post("/gettheatres", async (req, res) => {
    try{
        console.log("request received");
        console.log(req.body);
        Theatre.find({}, function(err, result){
            res.json(result);
        });
    }
    catch(err){
        console.log(err)
    }
});

module.exports = {add_theatres, router};