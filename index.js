import express from "express";

const app = express();

app.get("/", function(req, res) {
  res.send({ pesan: 'Hello World' })
});

app.listen(3000, function() {
  console.log("Your app is listening on port 3000");
});