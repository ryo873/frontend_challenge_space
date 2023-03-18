const express = require("express");
const app = express();
const port = 3000;

// static folder
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.listen(port, function () {
  console.log("App Listening");
});
