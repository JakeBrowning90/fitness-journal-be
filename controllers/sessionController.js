const asyncHandler = require("express-async-handler");

// exports.function_name = asyncHandler(async(req, res, next) => {

// })

exports.create_session = asyncHandler(async (req, res, next) => {
  res.json("Create session");
});

exports.read_session = asyncHandler(async (req, res, next) => {
  res.json("Read session");
});

exports.update_session = asyncHandler(async (req, res, next) => {
  res.json("Update session");
});

exports.delete_session = asyncHandler(async (req, res, next) => {
  res.json("Delete session");
});
