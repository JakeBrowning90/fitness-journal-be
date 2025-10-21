const express = require("express");
const router = express.Router();

// Require controller
const dateController = require("../controllers/dateController");

// Routes
// router.post/get/put/delete('/', xController.function_name)

router.post("/", dateController.create_date);

router.get("/", dateController.read_date_many);

router.get("/home", dateController.populate_home);

router.get("/:id", dateController.read_date);

router.put("/:id", dateController.update_date);

router.delete("/:id", dateController.delete_date);

module.exports = router;
