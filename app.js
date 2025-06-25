const express : require ('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');


const userRoutes = require('./routes/userRoute');
const catwayRoutes = require('./routes/catwayRoute');
const reservationRoutes = require('./routes/reservationRoute');

dotenv.config();
const app = express();

app.use('/api/users', userRoute);
app.use('/api/catways', catwayRoute);
app.use('/api/reservations', reservationRoute);

mongoose.connect(process.env.MONGO_URI)
  .then(() => app.listen(3000, () => console.log('API sur http://localhost:3000')))
  .catch(err => console.error(err));