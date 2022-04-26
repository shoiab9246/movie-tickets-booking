const express = require('express')
const bodyParser = require("body-parser")
const path = require('path')
const InitiateMongoServer = require("./config/db")
const user = require("./routes/user");
const theatre = require("./routes/theatre");
const reservation = require("./routes/reservation");
const showtime = require("./routes/showtime");
const system = require("./routes/system");

require('dotenv').config({ path: path.join(__dirname, '.env') })

// Initiate Mongo Server
InitiateMongoServer();

const app = express()

var cors = require('cors');
app.use(cors());

app.use(bodyParser.json());

app.use(function(req, res, next) 
{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET', 'POST');
  res.setHeader('Access-Control-Allow-Headers','Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');
  next();
});

app.get('/', (request, response) => {
    response.send("Welcome to backend of BookMyMovie");
});

app.use("/user", user);
app.use("/theatre", theatre.router);
app.use("/reservation", reservation.router);
app.use("/showtime", showtime.router);
app.use("/system", system);

const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
      console.log('Server running on port',PORT)
      //theatre.add_theatres();
      //reservation.add_reservations();
      //theatre.add_theatres();
      //showtime.add_showtimes();
      //reservation.add_reservations();
  })