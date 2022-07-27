const express = require("express");
const bcrypt = require("bcrypt");
const db = require("../db/db");

const router = express.Router();

function generateHash(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
}

function isValidPassword(plainTextPassword, passwordHash) {
  // Returns true or false
  return bcrypt.compareSync(plainTextPassword, passwordHash);
}

// register user
router.post("/signup", (req, res) => {
  const userName = req.body.user_name;
  const password = req.body.password;

  //Check if username exists
  db.query("SELECT name FROM users").then((dbResult) => {
    const allUserNames = dbResult.rows.map((user) => user.name);
    if (allUserNames.includes(userName.toLowerCase())) {
      res.status(400).json({
        status: "error",
        message: "Username Already Exists. Please Choose Another Username",
        type: "duplicateName",
      });
      return;
    } else {
      const hashedPassword = generateHash(password);

      if (!userName || userName.trim() == "") {
        res
          .status(400)
          .json({ success: false, message: "Missing valid user name" });
      } else if (!password || password.trim() == "") {
        res
          .status(400)
          .json({ success: false, message: "Missing valid password" });
      } else {
        const sql = `INSERT into users (name, password_hash) VALUES ($1, $2)`;
        db.query(sql, [userName, hashedPassword]).then(() => {
          res.json({ status: "success" });
        });
      }
    }
  });
});

// login user

module.exports = router;
