const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const db = require("../db/db");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const router = express.Router();

function generateHash(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
}

// register user
router.post("/signup", (req, res) => {
  console.log(req.body.user_name);
  console.log(req.body.password);
  // db.query("INSERT INTO users ")
  res.json("ok");
});

// login user

module.exports = router;
