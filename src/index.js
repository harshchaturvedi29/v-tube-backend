// require('dotenv').config({path: './env'})
//as early possible import the env in the index.js to get access of the env variables
import dotenv from "dotenv"
import connectDB from "./db/index.js";
import {app} from './app.js'
//after importing dotenv we need to configure it so that it can read the .env file in the root directory and by doing this we can access the env variables in the index.js by using process.env.variableName
dotenv.config({
    path: './.env'
})



connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})










/*
this is the first spproach where e connectthe db in the entry point but it is not good practice since all code gets polluted we impliment it in the index.js in db folder and then import the connection here, like we have done above...


import express from "express"
const app = express()
( async () => {
    //note that try catch sync code hota hai hence try k andar async code nahi likh sakte hai but async code k andar try catch likh sakte hai, like we have done above. //
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("errror", (error) => {
            console.log("ERRR: ", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })

    } catch (error) {
        console.error("ERROR: ", error)

        //throws are statements used to throw custom errors
        throw err
    }
})()

*/