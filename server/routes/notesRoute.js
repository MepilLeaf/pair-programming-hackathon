const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

const getData = () => {
  return JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "../data/notes.json"))
  );
};

router.get("/", (req, res) => {
  res.json(getData());
});

module.exports = router;
