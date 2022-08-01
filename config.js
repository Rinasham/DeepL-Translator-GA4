module.exports = {
  jwt: {
    secret: process.env.JWT_KEY,
    options: {
      algorithm: "HS256",
      expiresIn: "1d",
    },
  },
};
