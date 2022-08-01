const express = require("express");
const app = express();
const db = require("../db/db");
const auth = require("../auth");

app.use(express.json());

const router = express.Router();

router.get("/", auth, (req, res) => {
  console.log("auth ok");
  res.json({ success: true });
});

module.exports = router;
