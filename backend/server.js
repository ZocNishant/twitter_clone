import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Server is ready.");
});

app.listen(9000, () => {
  console.log(`Server running in port 9000.`);
});
