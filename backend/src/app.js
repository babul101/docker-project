import express from "express";

import mongoose from "mongoose";
import initRouter from "./routers/index.js";
const MONGO_PORT = process.env.MONGO_PORT || 27017;
const MONGO_URL = process.env.MONGO_URL;
const MONGODB = `mongodb://${MONGO_URL}:${MONGO_PORT}`;

mongoose.connect(MONGODB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Mongodb connection error"));

const PORT = process.env.PORT || 3001;
// const CORS_PORT = process.env.CORS_PORT || 3000;
// const CORS_URL = process.env.CORS_URL || "localhost";
// const CORS_ADDRESS = `http://${CORS_URL}:${CORS_PORT}`;
// console.log("Cors set to address ", CORS_ADDRESS);

const app = express();

initRouter(app);
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
