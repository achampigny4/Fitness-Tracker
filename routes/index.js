//class wed 10/7 office hours
const express = require("express");

const workoutRoutes= require("./workouts");
// const = require("");

const router = express.Router();

//ex todos.js route
router.use("/workouts", workoutRoutes);
//ex posts.js route
// router.use("/", );'

module.exports = router;