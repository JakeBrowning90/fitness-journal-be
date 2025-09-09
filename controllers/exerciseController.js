const asyncHandler = require("express-async-handler");
const {
  validateExerciseCreate,
  validateExerciseUpdate,
} = require("../middleware/validateExercise");
// Import Prisma
const { PrismaClient } = require("@prisma/client");
const { validationResult } = require("express-validator");
const prisma = new PrismaClient();
// exports.function_name = asyncHandler(async(req, res, next) => {

// })

exports.create_exercise = [
  validateExerciseCreate,
  asyncHandler(async (req, res, next) => {
    // Send Error messages if validation fails
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.json(errors);
    } else {
      await prisma.exercise.create({
        data: {
          name: req.body.name,
        },
      });
      res.json("Created exercise: '" + req.body.name + "'");
    }
  }),
];
exports.read_exercise = asyncHandler(async (req, res, next) => {
  const exercise = await prisma.exercise.findUnique({
    where: {
      id: parseInt(req.params.id),
    },
  });
  res.json(exercise);
});

exports.read_exercise_many = asyncHandler(async (req, res, next) => {
  const allExercises = await prisma.exercise.findMany({
    orderBy: [
      {
        id: "asc",
      },
    ],
  });
  res.json(allExercises);
});

exports.update_exercise = [
  validateExerciseUpdate,
  asyncHandler(async (req, res, next) => {
    // Send Error messages if validation fails
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.json(errors);
    } else {
      const exercise = await prisma.exercise.update({
        where: { id: parseInt(req.params.id) },
        data: {
          name: req.body.name,
        },
      });
      res.json(exercise);
    }
  }),
];

exports.delete_exercise = asyncHandler(async (req, res, next) => {
  // To-do: Error messages
  await prisma.exercise.delete({
    where: {
      id: parseInt(req.params.id),
    },
  });
  res.json("Exercise deleted");
});
