import { express } from "express";

function confixViewEngine(app) {
  app.set("view engine", "ejs");
  app.set("views", "src/views");
}

export default confixViewEngine;
