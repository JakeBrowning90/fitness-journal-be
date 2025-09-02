const express = require("express");
const router = express.Router();

// Require controller
const sessionController = require("../controllers/sessionController");

// Routes
// router.post/get/put/delete('/', xController.function_name)

router.post('/', sessionController.create_session)

router.get('/', sessionController.read_session)

router.put('/', sessionController.update_session)

router.delete('/', sessionController.delete_session)


module.exports = router;