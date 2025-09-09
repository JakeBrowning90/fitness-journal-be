const asyncHandler = require("express-async-handler");
const {
  validateSessionCreate,
  validateSessionUpdate,
} = require("../middleware/validateSession");
// Import Prisma
const { PrismaClient } = require("@prisma/client");
const { validationResult } = require("express-validator");
const prisma = new PrismaClient();

// exports.function_name = asyncHandler(async(req, res, next) => {

// })

exports.create_session = [
  validateSessionCreate,
  asyncHandler(async (req, res, next) => {
    // Send Error messages if validation fails
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.json(errors);
    } else {
      await prisma.session.create({
        data: {
          user: { connect: { id: parseInt(req.body.user) } },
          exercise: { connect: { id: parseInt(req.body.exercise) } },
          date: req.body.date,
          durationmin: parseInt(req.body.durationmin),
          distancek: parseInt(req.body.distancek),
          notes: req.body.notes,
        },
      });
      res.json("Created session");
    }
  }),
];

exports.read_session = asyncHandler(async (req, res, next) => {
  const session = await prisma.session.findUnique({
    where: {
      id: parseInt(req.params.id),
    },
  });
  res.json(session);
});

exports.read_session_many = asyncHandler(async (req, res, next) => {
  const allSessions = await prisma.session.findMany({
    include: {
      user: {
        select: {
          username: true,
        },
      },
      exercise: {
        select: {
          name: true,
        },
      },
    },
    orderBy: [
      {
        id: "asc",
      },
    ],
  });
  res.json(allSessions);
});

exports.update_session = [
  validateSessionUpdate,
  asyncHandler(async (req, res, next) => {
    res.json("Update session");
  }),
];

exports.delete_session = asyncHandler(async (req, res, next) => {
  res.json("Delete session");
});
