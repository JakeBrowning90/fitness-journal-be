const { body } = require("express-validator");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const validateSessionCreate = [
  body("user").notEmpty().withMessage("User required"),
  body("date").notEmpty().withMessage("Date selection required"),
  body("exercise").notEmpty().withMessage("Exercise selection required"),
  body("duration").optional(),
  body("distance").optional(),
  body("notes").optional(),
];

const validateSessionUpdate = [];

module.exports = { validateSessionCreate, validateSessionUpdate };
