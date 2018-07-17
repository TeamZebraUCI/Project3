const router = require("express").Router();
const userSecuredLogin = require("./login");

// Login page routes
router.use("/login", userSecuredLogin);

module.exports = router;