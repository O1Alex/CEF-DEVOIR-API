const express : require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const path = require('path');
const connectDB = require("./db");

//ROUTES//
const userRoute = require('./routes/userRoute');
const catwayRoute = require('./routes/catwayRoute');
const reservationRoute = require('./routes/reservationRoute');


dotenv.config();
const app = express();

app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api/users', userRoute);
app.use('/api/catways', catwayRoute);
app.use('/api/reservations', reservationRoute);

//CONEXION MONGODB//
connectDB();

//PARTIE VIEW//
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//ROUTE AFFICHAGE//
app.get('/', (req, res) => {
  res.render('index');
});