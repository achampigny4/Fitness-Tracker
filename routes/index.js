//class wed 10/7 office hours
const express = require("express");

const workoutRoutes= require("./workouts");
// const = require("");

const appRouter = express.Router();

//ex todos.js route
appRouter.use("/workouts", workoutRoutes);
//ex posts.js route
// appRouter.use("/", );