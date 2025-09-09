const asyncHandler = require("express-async-handler");

// exports.function_name = asyncHandler(async(req, res, next) => {

// })

exports.create_exercise = [
  asyncHandler(async (req, res, next) => {
    res.json("Create exercise");
  }),
];
exports.read_exercise = asyncHandler(async (req, res, next) => {
  res.json("Read exercise");
});

exports.read_exercise_many = asyncHandler(async (req, res, next) => {
  res.json("Read exercise many");
});

exports.update_exercise = [
  asyncHandler(async (req, res, next) => {
    res.json("Update exercise");
  }),
];

exports.delete_exercise = asyncHandler(async (req, res, next) => {
  res.json("Delete exercise");
});
