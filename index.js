const express = require("express");
const coursesRouter = require("./routes/courses.route");
const mongoose = require("mongoose");

const app = express();
const url =
  "mongodb+srv://tahajsdev:node_123@learnmongodb.rpozgwk.mongodb.net/codeZone?retryWrites=true&w=majority";
mongoose.connect(url).then(() => {
  console.log("db connected successfully");
});
app.use(express.json()); //bodyparser
app.use("/api/courses", coursesRouter);

app.listen(4000, () => {
  console.log("server running");
});
