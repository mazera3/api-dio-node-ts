import "reflect-metadata";
import express, { json } from "express";
import { router } from "./routes";
import createConnection from "./database";

createConnection();

const server = express();
server.use(express.json());
server.use(router);

server.listen(5000, () => {
  console.log("server running on port 5000: http://localhost:5000");
});
