import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const MONGO_PORT = process.env.MONGO_PORT || 27017;
const MONGO_URL = process.env.MONGO_URL;
const MONGODB = `mongodb://${MONGO_URL}:${MONGO_PORT}`;

mongoose.connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Mongodb connection error"));

const PORT = process.env.PORT || 3001;
const CORS_PORT = process.env.CORS_PORT || 3000;
const CORS_URL = process.env.CORS_URL || "localhost";
const CORS_ADDRESS = `http://${CORS_URL}:${CORS_PORT}`;
console.log("Cors set to address ", CORS_ADDRESS);

const app = express();

const corsOption = {
  origin: CORS_ADDRESS,
};

app.get("/test", cors(corsOption), (request, response) => {
  response.send("Hello from express with love");
});

app.get("/healthcheck", cors(corsOption), (request, response) => {
  mongoose.connection.db.admin().ping((error, result) => {
    if (error || !result) {
      response.send({
        message: `Ping fail with error: ${error}`,
        status: "fail",
      });
    }
    response.send({
      message: `Connection with mongodb is up :${result}`,
      status: "success",
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
