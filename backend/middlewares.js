const { JWT_SECRET } = require("./config");
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return res.status(403).json({
      message: "bad",
    });
  }
  const token = authHeader.split(" ")[1];

  try {
    const verify = jwt.verify(token, JWT_SECRET);

    if (verify.userId) {
      req.userId = verify.userId;
      next();
    } else {
      return res.status(403).json({});
    }
  } catch (err) {
    return res.status(403).json({});
  }
};
module.exports = {
  authMiddleware,
};
