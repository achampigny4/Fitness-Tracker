const express = require("express");

const router = express.Router();

const path = require("path");

//routes to html files go here
//public not needed because server?
router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/index.html"))
});

router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "/exercice.html"))
});

router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "/stats.html"))
});

module.exports = router;