const express = require("express");
const bcrypt = require("bcrypt");
const db = require("../db/db");

const router = express.Router();

function generateHash(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
}

function isValidPassword(plainTextPassword, passwordHash) {
  console.log(bcrypt.compareSync(plainTextPassword, passwordHash));
  // Returns true or false
  return bcrypt.compareSync(plainTextPassword, passwordHash);
}

// register user
router.post("/signup", (req, res) => {
  const username = req.body.user_name;
  const password = req.body.password;

  //Check if username exists
  db.query("SELECT name FROM users").then((dbResult) => {
    const allUserNames = dbResult.rows.map((user) => user.name);
    if (allUserNames.includes(username.toLowerCase())) {
      res.status(400).json({
        status: "error",
        message: "Username Already Exists. Please Choose Another Username",
        type: "duplicateName",
      });
      return;
    } else {
      const hashedPassword = generateHash(password);
      if (!username || username.trim() == "") {
        res
          .status(400)
          .json({ success: false, message: "Missing valid user name" });
      } else if (!password || password.trim() == "") {
        res
          .status(400)
          .json({ success: false, message: "Missing valid password" });
      } else {
        const sql = `INSERT into users (name, password_hash) VALUES ($1, $2)`;
        db.query(sql, [username.toLowerCase(), hashedPassword]).then(() => {
          res.status(200).json({ success: true });
        });
      }
    }
  });
});

// login user
router.post("/login", (req, res) => {
  console.log(req.body);
  const username = req.body.user_name;
  const password = req.body.password;
  console.log(req.session);

  db.query("SELECT * from users WHERE name = $1", [username.toLowerCase()])
    .then((dbResult) => {
      const user = dbResult.rows[0];

      if (username == user.name) {
        if (isValidPassword(password, user.password_hash)) {
          console.log("true ルート");
          req.session.userId = user.id;
          req.session.username = username;
          req.session.loggedIn = true;
          res.status(200).json({ success: true, id: user.id, name: username });
        } else {
          res.status(400).json({ message: "Login failed" });
        }
      }
    })
    .catch((err) => {
      res.status(400).json({ message: "Login failed" });
    });
});

router.get("/", (req, res) => {
  res.json(req.session);
});

router.delete("/", (req, res) => {
  req.session.destroy();
  res.status(200).json({ success: true });
});

module.exports = router;
