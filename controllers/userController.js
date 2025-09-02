const asyncHandler = require("express-async-handler");

// exports.function_name = asyncHandler(async(req, res, next) => {

// })

exports.create_user = asyncHandler(async (req, res, next) => {
  res.json("Create user");
});

exports.read_user = asyncHandler(async (req, res, next) => {
  res.json("Read user");
});

exports.update_user = asyncHandler(async (req, res, next) => {
  res.json("Update user");
});

exports.delete_user = asyncHandler(async (req, res, next) => {
  res.json("Delete user");
});
