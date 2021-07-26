import express from "express";
import cors from "cors";

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
  response.send("Hello from express with");
});

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
