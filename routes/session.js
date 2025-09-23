const express = require("express");
const router = express.Router();

// Require controller
const sessionController = require("../controllers/sessionController");

// Routes
// router.post/get/put/delete('/', xController.function_name)

router.post("/", sessionController.create_session);

router.get("/:id", sessionController.read_session);

router.get("/", sessionController.read_session_many);

router.get("/home", sessionController.populate_home);

router.put("/:id", sessionController.update_session);

router.delete("/:id", sessionController.delete_session);

module.exports = router;
