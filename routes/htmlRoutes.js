const express = require("express");

const router = express.Router();

const path = require("path");

//routes to html files go here
router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
});

router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercice.html"))
});

router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"))
});

module.exports = router;