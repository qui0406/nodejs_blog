const mongoose = require('mongoose');

async function connect(){
    try{
        await mongoose.connect('mongodb://127.0.0.1/f8_education_dev');
        console.log('Database connected successfully');
    }
    catch (error){
        console.error('Error connecting to the database. \n', error);
        process.exit(1);
    }
}

module.exports= {connect};