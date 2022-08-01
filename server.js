const express = require("express");
const app = express();
require("dotenv").config();
const expressSession = require("express-session");
const pgSession = require("connect-pg-simple")(expressSession);
const cors = require("cors");

const port = process.env.PORT || 3001;
const db = require("./db/db");

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(
  expressSession({
    store: new pgSession({
      pool: db,
      createTableIfMissing: true,
    }),
    secret: process.env.EXPRESS_SESSION_SECRET_KEY,
    saveUninitialized: false,
    resave: false,
  })
);

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

app.use((req, res, next) => {
  console.log(`${new Date()} ${req.method} ${req.path}`);
  next();
});
app.use(express.static("./client/build"));

const usersControls = require("./controllers/users");
const translateControls = require("./controllers/translate");
const accountControls = require("./controllers/account");

app.use("/api/users", usersControls);
app.use("/api/translate", translateControls);
app.use("/api/account", accountControls);

app.listen(port, () => {
  console.log(`server listening on port: ${port}`);
});
