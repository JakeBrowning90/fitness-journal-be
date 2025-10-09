const asyncHandler = require("express-async-handler");
// const {} = require("../middleware/validateDate");
// Import Prisma
const { PrismaClient } = require("@prisma/client");
const { validationResult } = require("express-validator");
const prisma = new PrismaClient();

// exports.function_name = asyncHandler(async(req, res, next) => {

// })

exports.create_date = asyncHandler(async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.json(errors);
  } else {
    await prisma.date.create({
      data: {
        date: req.body.date,
      },
    });
    res.json("Created date: '" + req.body.date + "'");
  }
});

exports.read_date_many = asyncHandler(async (req, res, next) => {
  const allDates = await prisma.date.findMany({
    orderBy: [
      {
        date: "asc",
      },
    ],
    include: {
      session: {
        select: {
          id: true,
        },
      },
    },
  });
  res.json(allDates);
});

exports.read_date = asyncHandler(async (req, res, next) => {
  const date = await prisma.date.findUnique({
    where: {
      id: parseInt(req.params.id),
    },
  });
  res.json(date);
});

exports.update_date = asyncHandler(async (req, res, next) => {});

exports.delete_date = asyncHandler(async (req, res, next) => {});
