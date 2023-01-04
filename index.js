const express = require("express");
const PORT = 4002;
const app = express();

app.use("/", (req, res) => {
  res.send("Hello my dear");
});

app.listen(PORT, () => {
  console.log(`server running on port: ${PORT} `);
});
