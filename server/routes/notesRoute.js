const { log } = require("console");
const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const getData = () => {
  return JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "../data/notes.json"))
  );
};

const getNoteById = (id) => {
  return getData().find((note) => {
    return note.id == id;
  });
};

router.get("/", (req, res) => {
  res.json(getData());
});

router.get("/:id", (req, res) => {
  res.json(getNoteById(req.params.id));
});

router.post("/", (req, res) => {
  const data = getData();
  const newNote = {
    title: "New Note",
    content: "Write Here",
    timestamp: Date.now(),
    id: uuidv4(),
  };

  data.push(newNote);

  fs.writeFileSync(
    path.resolve(__dirname, "../data/notes.json"),
    JSON.stringify(data)
  );
  res.status(201).json(newNote);
});

router.patch("/:id", (req, res) => {
  const data = getData();
  const noteIndex = data.findIndex((note) => {
    return note.id === req.params.id;
  });
  const newNote = {
    ...data[noteIndex],
    title: req.body.title,
    content: req.body.content,
  };
  data[noteIndex] = newNote;
  fs.writeFileSync(
    path.resolve(__dirname, "../data/notes.json"),
    JSON.stringify(data)
  );

  res.status(204).send(newNote);
});

router.delete("/:id", (req, res) => {
  const newData = getData().filter((note) => note.id !== req.params.id);
  fs.writeFileSync(
    path.resolve(__dirname, "../data/notes.json"),
    JSON.stringify(newData)
  );

  res.status(204).send(`note with id ${req.params.id} was deleted`);
});

module.exports = router;
