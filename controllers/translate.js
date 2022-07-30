const express = require("express");
const app = express();
const db = require("../db/db");
const axios = require("axios");
const translate = require("deepl");

app.use(express.json());

const router = express.Router();

// bd.query("SELECT * FROM questions ORDER_BY RANDOM() limit 1").then(
//   (dbRes) => {}
// );

router.get("/:level", (req, res) => {
  console.log(`SELECT * FROM questions WHERE level='${req.params.level}'`);
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
  console.log(`${process.env.DEEPL_URL}/${process.env.DEEPL_API_KEY}`);
  console.log(req.params.language);
  console.log(req.body);

  let text_ja = ""; //TODO ここに出力する日本語を格納する => apiで送信
  let text_en = "";

  // translate({
  //   free_api: true, // ← フリープランのみ記載
  //   text: "こんにちは、元気ですか？",
  //   target_lang: "EN",
  //   auth_key: process.env.DEEPL_API_KEY, // ここにDeeplのAPIキーを入力
  // })
  //   .then((result) => {
  //     console.log(result.data);
  //     const text_en = result.data.translations[0].text; //Deeplで翻訳された文章をtext_en変数に格納
  //     console.log(text_en);
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });

  res.json("ok");
});


module.exports = router;
