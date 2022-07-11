/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(__dirname + "/dist/"));
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/index.html"));
});
const port = process.env.PORT || 8000;
app.listen(port);
console.log(`app is listening on port: ${port}`);
