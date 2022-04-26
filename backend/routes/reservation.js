const express = require("express");
const router = express.Router();
const transporter = require("../config/email")

const Reservation = require("../models/Reservation");
const Theatre = require("../models/Theatre");
const Rating = require("../models/Rating");
const User = require("../models/User");

async function add_reservations(){
    var data = [{day: 1, month: 1, year: 2022,  name: "rebecca", show: "18:00", theatreId: "0",
                seats: ["A5"], amount: 15.00, total: 15.00, 
                movieId: "Black Panther", email: "behughey@iu.edu"},
                {day: 3, month: 1, year: 2022,  name: "JK", show: "18:00", theatreId: "0",
                seats: ["B6","B7", "B8"], amount: 12.00, total: 36.00, 
                movieId: "Black Widow",  email: "behughey@iu.edu"},
                {day: 1, month: 5, year: 2022,  name: "JHope", show: "20:00", theatreId: "0",
                seats: ["C1","C2"], amount: 15.00, total: 35.00, 
                movieId: "Doctor Strange",  email: "behughey@iu.edu"}]

    await Reservation.deleteMany().then(function(){console.log("Deleted reservation data")});

    // await Reservation.insertMany(data).then(function(){console.log("Dummy Reservation data inserted")}
    // ).catch(function(err){console.log(err)});
};

router.post("/pay", async (req,res) => {
    var booking_id;
    try{
        console.log("reservation request received");
        console.log(req.body);
        const reservation = new Reservation(req.body);
        console.log(req.body.theatreId)
        const theatre_doc = await Theatre.findById(req.body.theatreId)
        console.log(theatre_doc)
        reservation.theatreName = theatre_doc.name
        reservation.city = theatre_doc.city
        reservation.state = theatre_doc.state
        if(reservation.redeem){
            console.log(req.body.email,"points redeemed")
            let updated_user = await User.findOneAndUpdate({email: req.body.email}, {points:0}, {new:true})
            console.log(updated_user.points)
        }
        let updated_user = await User.findOneAndUpdate({email: req.body.email}, {$inc :{'points':5}}, {new:true})
        //reservation.save();
        await reservation.save(function(err, record){

        booking_id = record._id;
        console.log(booking_id)
        
        const message = {
            from: "do-not-reply@bookmymovie.com",
            to: req.body.email,
            subject: "Booking Confirmation",
            html: "<h2>Hi "+req.body.name+",</h2><h2>You have booked your movie ticket successfully.</h2><h2>Below are your booking details - </h2><h3>Theatre: "+theatre_doc.name+", "+theatre_doc.city+", "+theatre_doc.state+"</h3><h3>Movie Name: "+req.body.movieId+"</h3><h3>Show Time: "+req.body.month+"/"+req.body.day+"/"+req.body.year+" - "+req.body.show+"</h3><h3>Seat Number: "+req.body.seats+"</h3><h3>Booking Confirmation Number: "+booking_id+"</h3><h2>Thanks for booking with us!</h2>"
       }

        transporter.sendMail(message, function(err, info) {
            if (err) {
              console.log(err)
            } else {
              console.log(info);
            }
            res.json(booking_id);

        })
    });
    }
    catch(err){
        console.log(err);
    }
});

router.post("/reservationInfo", async (req, res) => {
    try{
        console.log("reservation info request received");
        console.log(req.body.userId)
        Reservation.find({email: req.body.userId}, function(err, result){
            res.json(result);
        });
    }
    catch(err){
        console.log(err)
    }
});

router.post("/rating", async (req, res) => {
    try{
        console.log("rating received");
        const rating = new Rating(req.body);
        rating.save();
        res.json("Rating saved")
    }
    catch(err){
        console.log(err)
    }
});

router.get("/reservationInfo", async (req, res) => {
    try{
        console.log("reservation info request from management received");
        Reservation.find({}, function(err, result){
            res.json(result);
        });
    }
    catch(err){
        console.log(err)
    }
});

router.get("/feedbackInfo", async (req, res) => {
    try{
        console.log("feedback info request from management received");
        Rating.find({}, function(err, result){
            res.json(result);
        });
    }
    catch(err){
        console.log(err)
    }
});

router.post("/visualizeddata", async (req, res) => {
    const theatres = req.body.theatres;
    //const city_name = req.body.city;
    //const state_name = req.body.state;
    try{
        console.log("reservation info request received");
        console.log(theatres);
        Reservation.find({}, function(err, result) {
            var data = [];
            data[0] = ["month", "sales", "profit", "loss", "expenses"];
            totalCost = 0;
            for (i = 0; i < theatres.length; i++) {
                totalCost += theatres[i].costPerMonth;
            }
            for (i = 5; i > 0; i--) {
                data[6 - i] = [6 - i, 0, 0, 0, totalCost];
                for (j = 0; j < result.length; j++) {
                    if (result[j].month == i) {
                        data[6 - i][1] += result[j].amount;
                        console.log(result[j].amount)
                    }
                }
            }
            for (i = 5; i > 0; i--) {
                if (data[6 - i][1] > data[6 - i][4]) {
                    data[6 - i][2] = data[6 - i][1] - data[6 - i][4];
                } else {
                    data[6 - i][3] = data[6 - i][4] - data[6 - i][1];
                }
            }
            res.json(data);
            console.log(data);
        });
    }
    catch(err){
        console.log(err)
    }
});

module.exports = {add_reservations, router};