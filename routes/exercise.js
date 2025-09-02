const express = require("express");
const router = express.Router();

// Require controller
const exerciseController = require("../controllers/exerciseController");

// Routes
// router.post/get/put/delete('/', xController.function_name)

router.post('/', exerciseController.create_exercise)

router.get('/', exerciseController.read_exercise)

router.put('/', exerciseController.update_exercise)

router.delete('/', exerciseController.delete_exercise)


module.exports = router;