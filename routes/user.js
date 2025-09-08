const express = require("express");
const router = express.Router();
const passport = require("passport");

// Require controller
const userController = require("../controllers/userController");

// Routes
// router.post/get/put/delete('/', xController.function_name)

router.post("/", userController.create_user);

router.get("/:id", userController.read_user);

router.get("/", userController.read_user_many);

router.put("/:id", userController.update_user);

router.delete("/:id", userController.delete_user);

router.post(
  "/login",
  passport.authenticate("local", {
    session: false,
  }),
  userController.user_login
);

module.exports = router;
