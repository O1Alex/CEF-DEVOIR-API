const mongoose =require ('mogoose');
const { StrictMode } = require('react');

const connectDB = async () => {
    try{
        mongoose.set('StrictQuery', false);
        mongoose.connnect(process.env.MONGO_URI, () => console.log
        ("Mongo connecté"))
    } catch (error){
        console.log(error);
        process.exit();
    }
}

module.exports = connectDB;