const { body } = require("express-validator");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const validateExerciseCreate = [
  body("name")
    .trim()
    .isLength({ min: 1, max: 50 })
    .withMessage("Exercise name must contain between 1 and 50 characters.")
    .custom(async (value) => {
      const existingName = await prisma.exercise.findUnique({
        where: {
          name: value,
        },
      });
      if (existingName) {
        throw new Error("Exercise name already in use.");
      }
    }),
];

const validateExerciseUpdate = [
  body("name")
    .trim()
    .isLength({ min: 1, max: 50 })
    .withMessage("Exercise name must contain between 1 and 50 characters.")
    .custom(async (value) => {
      const existingName = await prisma.exercise.findUnique({
        where: {
          name: value,
        },
      });
      if (existingName) {
        throw new Error("Exercise name already in use.");
      }
    }),
];

module.exports = { validateExerciseCreate, validateExerciseUpdate };
