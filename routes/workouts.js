const express = require("express");

const db = require("../models");

const router = express.Router();

//week 17 activity 14 ins populate
router.get("/workouts", async (req, res) => {
    db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
            console.log(err);
        })
});

router.post("/workouts", async (req, res) => {
    db.Workout.create({})
        .populate("exercises")
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
            console.log(err);
        })
});

router.get("/range", async (req, res) => {
    db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
            console.log(err);
        });
});

router.post("/range", async (req, res) => {
    db.Workout.create({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
            console.log(err);
        });
});

// router.put("/:id", ({ body, params }, res) => {
//     db.WorkoutWorkout.findByIdAndUpdate(
//         params.id,
//         { $push: { exercises: body } },
//         { new: true }
//     )
//         .then(dbWorkout => {
//             res.json(dbWorkout);
//         })
//         .catch(err => {
//             res.json(err);
//         });
// });

//export to index.js
module.exports = router;