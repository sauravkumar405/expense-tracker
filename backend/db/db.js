//const mongoose = require('mongoose')

import mongoose from 'mongoose'

export const db =  async () =>{
    try{
        mongoose.set('strictQuery', false)
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Db Connected')
    } catch(errors) {
        console.log('DB connection error');
        throw errors;
    }
}

//module.exports = {db:db}
