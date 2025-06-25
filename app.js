const express : require ('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

mongoose.connect(process.env.MONGO_URI)
  .then(() => app.listen(3000, () => console.log('API sur http://localhost:3000')))
  .catch(err => console.error(err));