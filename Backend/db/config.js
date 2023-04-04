const mongoose = require('mongoose');


const Connection = () => {

   
    const MONGODB_URI = `mongodb+srv://omprakash19:OmOm121229@tasklist.oorehjn.mongodb.net/?retryWrites=true&w=majority`;

    mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

    mongoose.connection.on('connected', () => {
        console.log('Database connected Successfully');
    })

    mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected');
    })

    mongoose.connection.on('error', () => {
        console.log('Error while connecting with the database ', error.message);
    })
}

module.exports = Connection;