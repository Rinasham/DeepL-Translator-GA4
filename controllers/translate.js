const express = require("express");
const app = express();
const db = require("../db/db");
const translate = require("deepl");
const auth = require("../auth");

app.use(express.json());

const router = express.Router();

// bd.query("SELECT * FROM questions ORDER_BY RANDOM() limit 1").then(
//   (dbRes) => {}
// );

router.get("/:level", auth, (req, res) => {
  db.query(`SELECT * FROM questions WHERE level='${req.params.level}'`)
    .then((dbRes) => {
      res.json(dbRes.rows);
    })
    .catch(() => {
      res.status(500).json({ success: false });
    });
});

router.get("/question/:selectedQuestion", (req, res) => {
  db.query(`SELECT * FROM questions WHERE id=${req.params.selectedQuestion}`)
    .then((dbRes) => {
      res.json(dbRes.rows);
    })
    .catch(() => {
      res.status(500).json({ success: false });
    });
});

router.post("/checkanswer/:language", (req, res) => {
  // let text_ja = ""; //TODO ここに出力する日本語を格納する => apiで送信
  // let text_en = "";

  let target_lang = ""; // 'JP' or 'EN'

  // whan the answer sent is JAPANESE
  if (req.params.language === "ja") {
    target_lang = "EN";
  }

  translate({
    free_api: true, // ← フリープランのみ記載
    text: req.body.answer,
    target_lang: target_lang,
    auth_key: process.env.DEEPL_API_KEY, // ここにDeeplのAPIキーを入力
  })
    .then((result) => {
      const translated_text = result.data.translations[0].text; //Deeplで翻訳された文章をtext_en変数に格納
      res.json({ translated_text: translated_text });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ success: false });
    });
});

router.get("/done/:userid", auth, (req, res) => {
  db.query(
    `SELECT question_id FROM done_questions WHERE user_id=${req.params.userid}`
  )
    .then((dbRes) => {
      res.json(dbRes.rows);
    })
    .catch(() => {
      res.status(500).json({ success: false });
    });
});

// insert DONE QUESTION into done_question table when a user finishes a question
router.post("/done", (req, res) => {
  const sql = `INSERT INTO done_questions (user_id, question_id, jap_answer, eng_answer, favorite) VALUES ($1, $2, $3, $4 ,false);`;

  db.query(sql, [
    req.body.userid,
    req.body.questionid,
    req.body.answers.ja_answer,
    req.body.answers.en_answer,
  ])
    .then(() => {
      res.json({ success: true });
    })
    .catch(() => {
      res.status(500).json({ success: false });
    });
});

module.exports = router;
