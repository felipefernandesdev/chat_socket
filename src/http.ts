import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import logger from "morgan";
const app = express();

const serverHttp = createServer(app);
const io = new Server(serverHttp);
app.use(express.json());
app.use(logger("common"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("chat");
});

app.get("/chat", (req, res) => {
  res.render("index");
});

export { serverHttp, io };
