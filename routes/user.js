const express = require("express");
const router = express.Router();

// Require controller
const userController = require("../controllers/userController");

// Routes
// router.post/get/put/delete('/', xController.function_name)

router.post('/', userController.create_user)

router.get('/', userController.read_user)

router.put('/', userController.update_user)

router.delete('/', userController.delete_user)


module.exports = router;