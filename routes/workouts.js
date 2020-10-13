// projects 2 router  review it

const express = require("express");

const db = require("../models");

//require in index.js router
const router = express.Router();

router.get("/workouts", async (req, res) => {
    try {
        const workouts = await db.Workout.find({});
        res.json(workouts);
    } catch (err) {
        res.status(500).statusMessage(err).end();
    }
});

// router.get("", async () => {

// });

router.post("/workouts", async () => {
    try {
        const workouts = await db.Workout.create({});
        res.json(workouts);
    } catch (err) {
        res.status(500).statusMessage(err).end();
    }
});

// router.put("", async () => {

// });

// router.delete("", async () => {

// });
//export to index.js
module.exports = router;

// index.js to export models to server?
// const db = require("./models");


// app.get("/notes", (req, res) => {
//   db.Note.find({})
//     .then(dbNote => {
//       res.json(dbNote);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

// app.get("/user", (req, res) => {
//   db.User.find({})
//     .then(dbUser => {
//       res.json(dbUser);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

// app.post("/submit", ({ body }, res) => {
//   db.Note.create(body)
//     .then(({ _id }) => db.User.findOneAndUpdate({}, { $push: { notes: _id } }, { new: true }))
//     .then(dbUser => {
//       res.json(dbUser);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

// app.get("/populateduser", (req, res) => {
//   db.User.find({})
//     .populate("notes")
//     .then(dbUser => {
//       res.json(dbUser);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });