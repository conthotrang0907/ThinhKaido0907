// const express = require("express");
import express from "express";
import confixViewEngine from "./configs/viewengine";

const app = express();
//const part = require("path");
const port = 3000;
confixViewEngine(app);
app.get("/", (req, res) => {
  //res.sendFile(part.join(__dirname, "/index.html"));
  //res.send("hello ae");
  res.render("index.ejs");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
