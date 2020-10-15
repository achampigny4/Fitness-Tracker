//class wed 10/7 office hours
const express = require("express");

const workoutRoutes = require("./workouts");
const htmlRoutes = require("./htmlRoutes");

const router = express.Router();

router.use(workoutRoutes);
router.use(htmlRoutes);

module.exports = router;