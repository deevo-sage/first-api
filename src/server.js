import express from "express";
import { json, urlencoded } from "body-parser";
import morgan from "morgan";
import cors from "cors";

export const app = express();
const router = express.Router();

app.disable("x-powered-by");
// cors is cross origin resource sharing requests fromother domains accepted
app.use(cors());
// json puts the json in req.body
app.use(json());
// urlencoded is attach parameters
app.use(urlencoded({ extended: true }));
// morgan is logging the request
app.use(morgan("dev"));
export const start = () => {
  app.listen(3000, () => {
    console.log("server is on http://localhost:3000");
  });
};
