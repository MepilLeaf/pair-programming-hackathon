const express = require("express");
const app = express();
const notesRoute = require("./routes/notesRoute.js");
require("dotenv").config();

app.use(express.json());
app.use("/notes", notesRoute);

const PORT = process.env.PROCESS || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
