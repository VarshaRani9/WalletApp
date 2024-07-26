const express = require("express");
const router = express.Router();
const UserRouter = require("./UserRoute");
const AccountRouter = require("./AccountRoute");

router.use("/user", UserRouter);
router.use("/account", AccountRouter);

module.exports = router;
