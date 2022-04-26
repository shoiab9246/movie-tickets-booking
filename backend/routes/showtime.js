const express = require("express");
const router = express.Router();

const Showtime = require("../models/Showtime");

async function add_showtimes(){
   
    var data = [{startAt: "10:00", startDay: 28, startMonth: 4, startYear: 2022, endDay: 28, endMonth: 6, endYear: 2022,
                  movieTitle: "Black Widow", theatreName: "AMC Bloomington 11", ticketPrice: 10, seatsTaken: 0, percent: 50},
                  {startAt: "10:00", startDay: 28, startMonth: 4, startYear: 2022, endDay: 28, endMonth: 6, endYear: 2022,
                  movieTitle: "Black Panther", theatreName: "AMC Bloomington 11", ticketPrice: 15, seatsTaken: 0, percent: 50},
                  {startAt: "10:00", startDay: 28, startMonth: 4, startYear: 2022, endDay: 28, endMonth: 6, endYear: 2022,
                  movieTitle: "Spiderman", theatreName: "AMC Bloomington 11", ticketPrice: 18, seatsTaken: 0, percent: 50},
                  {startAt: "19:00", startDay: 28, startMonth: 4, startYear: 2022, endDay: 28, endMonth: 6, endYear: 2022,
                  movieTitle: "Black Widow", theatreName: "AMC Bloomington 11", ticketPrice: 12, seatsTaken: 0, percent: 50},
                  {startAt: "17:00", startDay: 28, startMonth: 4, startYear: 2022, endDay: 28, endMonth: 6, endYear: 2022,
                  movieTitle: "Black Widow", theatreName: "AMC Bloomington 11", ticketPrice: 12, seatsTaken: 0, percent: 50}]

    await Showtime.deleteMany().then(function(){console.log("Deleted data")});

    await Showtime.insertMany(data).then(function(){console.log("Dummy Theatre data inserted")}
    ).catch(function(err){console.log(err)});
};

router.post("/addshowtime", async (req, res) => {
    try{
        console.log("request received");
        console.log(req.body);
        const showtime = new Showtime(req.body);
        await showtime.save();
    }
    catch(err){
        console.log(err)
    }
});

router.post("/getshowtime", async (req, res) => {
    const theatreName = req.body.theatreName;
    const startAt = req.body.startAt;
    try{
        console.log("request received");
        console.log(req.body);
        Showtime.find({theatreName: theatreName, startAt: startAt}, function(err, result){
            res.json(result);
        });
    }
    catch(err){
        console.log(err)
    }
});

router.post("/getshowtimes", async (req, res) => {
    const theatreName = req.body.theatreName;
    try{
        console.log("request received");
        console.log(req.body.theatreName);
        Showtime.find({theatreName: theatreName}, function(err, result){
            res.json(result);
        });
    }
    catch(err){
        console.log(err)
    }
});

module.exports = {add_showtimes, router};