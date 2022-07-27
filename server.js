const express = require("express");
const app = express();
require("dotenv").config();
const expressSession = require("express-session");
const pgSession = require("connect-pg-simple")(expressSession);

const port = process.env.PORT || 3001;
const db = require("./db/db");

app.use((req, res, next) => {
  console.log(`${new Date()} ${req.method} ${req.path}`);
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(express.static("./client/build"));

app.use(
  expressSession({
    store: new pgSession({
      pool: db,
      createTableIfMissing: true,
    }),
    secret: process.env.EXPRESS_SESSION_SECRET_KEY,
  })
);

const usersControls = require("./controllers/users");
const translateControls = require("./controllers/translate");

app.use("/api/users", usersControls);
app.use("/api/translate", translateControls);

app.get("/api/test", (req, res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log(`server listening on port: ${port}`);
});
