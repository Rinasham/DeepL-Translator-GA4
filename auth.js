const jwt = require("jsonwebtoken");
const config = require("./config");

function auth(req, res, next) {
  try {
    const cookieSplitArr = req.headers.cookie.split(";");
    const token = cookieSplitArr[1].replace(" token=", "");
    const decoded = jwt.verify(token, config.jwt.secret);

    next();
  } catch (err) {
    return res.status(401).json({ success: false, message: "invalid auth" });
  }
}

module.exports = auth;
