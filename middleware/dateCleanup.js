const asyncHandler = require("express-async-handler");
// const {} = require("../middleware/validateDate");
// Import Prisma
const { PrismaClient } = require("@prisma/client");
const { validationResult } = require("express-validator");
const prisma = new PrismaClient();

// async function dateCleanup(date) {
//   console.log(date);
//   // Get date from req
//   const targetDate = await prisma.date.findUnique({
//     where: {
//       date: date,
//     },
//     include: {
//       session: {
//         select: {
//           id: true,
//         },
//       },
//     },
//   });
//   // Check if date has sessions
//   console.log(targetDate);
//   if (targetDate.session.length == 0) {
//     await prisma.date.delete({
//       where: {
//         id: targetDate.id,
//       },
//     });
//   }
// }

async function dateCleanup() {
  await prisma.date.deleteMany({
    where: {
      session: {
        none: {},
      },
    },
  });
}

module.exports = dateCleanup;
