const express = require("express");
const router = express.Router();

// Require controller
const exerciseController = require("../controllers/exerciseController");

// Routes
// router.post/get/put/delete('/', xController.function_name)

router.post('/', exerciseController.create_exercise)

router.get('/:id', exerciseController.read_exercise)

router.get('/', exerciseController.read_exercise_many)

router.put('/:id', exerciseController.update_exercise)

router.delete('/:id', exerciseController.delete_exercise)

module.exports = router;