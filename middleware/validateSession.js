const { body } = require("express-validator");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const validateSessionCreate = [];

const validateSessionUpdate = [];

module.exports = { validateSessionCreate, validateSessionUpdate };
