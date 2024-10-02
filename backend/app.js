import { config } from 'dotenv';
import express from 'express';
import cors from 'cors';
import {db} from "./db/db.js"
import {readdirSync} from 'fs'


const app = express();

config();

const PORT = process.env.PORT || 3002

//middleware
app.use(express.json()) 
app.use(cors())


//routes
readdirSync('./routes').map(async (route) => {
  const module = await import(`./routes/${route}`);
  app.use('/api/v1/', module.default || module);
});




const server = async ()=>{
    await db();
    console.log(`You are listening to server port ${3002}`)
    app.listen(3002, (err)=>{
        if (err) {
            console.log("error in listing the port == ", err);
        }
        console.log('listening to port:',3002)
    })
}

server()