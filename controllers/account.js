const express = require("express");
const app = express();
const db = require("../db/db");
const auth = require("../auth");

app.use(express.json());

const router = express.Router();

// get questions done by a user
router.get("/history/:userid", auth, (req, res) => {
  db.query(
    `SELECT * FROM done_questions INNER JOIN questions ON done_questions.question_id = questions.id WHERE user_id=${req.params.userid}`
  ).then((dbRes) => {
    return res.json({
      success: true,
      histories: dbRes.rows,
    });
  });
});

module.exports = router;
