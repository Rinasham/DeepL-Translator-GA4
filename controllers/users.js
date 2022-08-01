const express = require("express");
const bcrypt = require("bcrypt");
const db = require("../db/db");
const { body, validationResult } = require("express-validator");
const JWT = require("jsonwebtoken");
const config = require("../config");

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
router.post(
  "/signup",
  body("user_name").isLength({ min: 2 }),
  body("password").isLength({ min: 4 }),
  (req, res) => {
    const username = req.body.user_name;
    const password = req.body.password;

    const errors = validationResult(req);
    // if there's any errors
    if (!errors.isEmpty()) {
      console.log("エラーです");
      return res.status(400).json({ errors: errors.array() });
    }

    // if NO errors
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
            return res.json({
              success: true,
            });
          });
        }
      }
    });
  }
);

// login user
router.post("/login", (req, res) => {
  console.log(req.body);
  const username = req.body.user_name;
  const password = req.body.password;

  db.query("SELECT * from users WHERE name = $1", [username.toLowerCase()])
    .then(async (dbResult) => {
      const user = dbResult.rows[0];

      if (username == user.name) {
        if (isValidPassword(password, user.password_hash)) {
          // JWT
          const payload = {
            username: username,
          };
          const token = await JWT.sign(
            payload,
            config.jwt.secret,
            config.jwt.options
          );
          console.log(token);
          console.log("終わり");
          res.status(200).json({
            success: true,
            token: token,
          });
        } else {
          res.status(400).json({ message: "Login failed" });
        }
      }
    })
    .catch((err) => {
      res.status(400).json({ message: "Login failed" });
    });
});

// router.get("/", (req, res) => {
//   res.json(req.session);
// });

// router.delete("/", (req, res) => {
//   req.session.destroy();
//   res.status(200).json({ success: true });
// });

// router.get('jwt', (req,res) => {
//   const token =
//   res.cookie('token', token, { httpOnly: true });
// })

module.exports = router;
