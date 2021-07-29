import healthCheck from "./health.routers.js";
import notes from "./notes.routers.js";
import cors from "cors";
import bodyParser from "body-parser";

const PORT = process.env.PORT || 3001;

const CORS_PORT = process.env.CORS_PORT || 3000;
const CORS_URL = process.env.CORS_URL || "localhost";
const CORS_ADDRESS = `http://${CORS_URL}:${CORS_PORT}`;

const corsOption = {
  origin: CORS_ADDRESS,
};

function initRouters(app) {
  app.use(cors(corsOption));
  app.use(bodyParser.json());
  app.use(healthCheck);
  app.use(notes);
}

export default initRouters;
