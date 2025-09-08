const asyncHandler = require("express-async-handler");
const validateUser = require("../middleware/validateUser");
const validateUserUpdate = require("../middleware/validateUserUpdate");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// Import Prisma
const { PrismaClient } = require("@prisma/client");
const { validationResult } = require("express-validator");
const prisma = new PrismaClient();
// exports.function_name = asyncHandler(async(req, res, next) => {

// })

exports.create_user = [
  validateUser,
  asyncHandler(async (req, res, next) => {
    // Send Error messages if validation fails
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.json(errors);
    } else {
      // Password Encryption
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      await prisma.user.create({
        data: {
          username: req.body.username,
          password: hashedPassword,
        },
      });

      res.json("Created user " + req.body.username);
    }
  }),
];

exports.read_user = asyncHandler(async (req, res, next) => {
  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(req.params.id),
    },
  });
  res.json(user);
});

exports.read_user_many = asyncHandler(async (req, res, next) => {
  const allUsers = await prisma.user.findMany({
    orderBy: [
      {
        username: "asc",
      },
    ],
  });
  res.json(allUsers);
});

exports.update_user = [
  validateUserUpdate,
  asyncHandler(async (req, res, next) => {
    // Send Error messages if validation fails
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.json(errors);
    } else {
      // Password Encryption
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const user = await prisma.user.update({
        where: { id: parseInt(req.params.id) },
        data: {
          username: req.body.username,
          password: hashedPassword,
        },
      });
      res.json(user);
    }
  }),
];

exports.delete_user = asyncHandler(async (req, res, next) => {
  // To-do: Error messages
  await prisma.user.delete({
    where: {
      id: parseInt(req.params.id),
    },
  });
  res.json("User deleted");
});
