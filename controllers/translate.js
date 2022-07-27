const express = require("express");
const app = express();
const db = require("../db/db");
const axios = require("axios");
const translate = require("deepl");

app.use(express.json());

const router = express.Router();

router.get("/", (req, res) => {
  console.log(`${process.env.DEEPL_URL}/${process.env.DEEPL_API_KEY}`);

  let text_ja = ""; //TODO ここに出力する日本語を格納する => apiで送信

  translate({
    free_api: true, // ← フリープランのみ記載
    text: "こんにちは、元気ですか？",
    target_lang: "EN",
    auth_key: process.env.DEEPL_API_KEY, // ここにDeeplのAPIキーを入力
  })
    .then((result) => {
      console.log(result.data);
      const text_en = result.data.translations[0].text; //Deeplで翻訳された文章をtext_en変数に格納
      console.log(text_en);
    })
    .catch((error) => {
      console.error(error);
    });

  res.json("ok");
});

module.exports = router;
