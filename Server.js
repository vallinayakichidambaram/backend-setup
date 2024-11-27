const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Server is running");
  console.log("Server is running");
});

app.get("/getErrorStatus", (req, res) => {
  res.status(500).send("There is an error in the server");
});

app.get("/getJson", (req, res) => {
  res.json({ status: 200, message: "Success" });
});

app.get("/getJsonWithStatus", (req, res) => {
  res.status(500).json("There is an error in the server.Please try again");
});

app.get("/downloadFile", (req, res) => {
  res.download("Server.js");
});
app.listen(3000);
