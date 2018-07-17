const router = require("express").Router();
const userController = require("../../controllers/userController");

// "/api/user"
router.route("/")
    .get(userController.find)
    .post(userController.create);

module.exports = router;