// require('dotenv').config()
import dotenv from "dotenv";
import connectDB from "./db/db.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

const PORT = process.env.PORT || 8000;
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  })
  .catch((err) => console.log("MongoDB connection failed !!!", err));

/*
import express from 'express'
const app = express()

;(async function connectDB() {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
    app.on("error",(error) => {
      console.log("ERR: ", error)
      throw error
    })

    app.listen(process.env.PORT, ()=> {
      console.log(`App is listening on port ${process.env.PORT}`)
    })
  } catch (error) {
    console.error("ERROR: ", error)
    throw error
  }
})()
*/
