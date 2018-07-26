const router = require("express").Router();
const userController = require("../../controllers/userController");

// "/api/user"
router.route("/")
    .get(userController.login)
    .post(userController.signup);

router.route("/login")
    .post(userController.login);

module.exports = router;