const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, ".")));

let qrData = [];

app.post("/save", (req, res) => {
  const { text } = req.body;
  if (!text || typeof text !== "string") {
    return res.status(400).json({ error: "Request body must include a text string." });
  }

  const item = {
    text,
    savedAt: new Date().toISOString(),
  };
  qrData.push(item);
  res.json({ status: "saved", item });
});

app.get("/all", (req, res) => {
  res.json(qrData);
});

app.listen(port, () => console.log(`Server running on ${port}`));