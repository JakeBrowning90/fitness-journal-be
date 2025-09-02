require("dotenv").config();
const express = require("express");
const cors = require("cors");
//multer
//cloudinary
//streamifier

//expressSession
//passport
// require("./middleware/passport");
// const passport = require("passport");
// const LocalStrategy = require("passport-local").Strategy;
//jwt

const app = express();
app.use(cors());

// Passport to routes
// app.use(passport.initialize());

// Parse form payloads and sets to req.body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routers
// const indexRouter = require("./routes/index");
const userRouter = require("./routes/user");
const exerciseRouter = require("./routes/exercise");
const sessionRouter = require("./routes/session");

// app.use("/", indexRouter);
app.use("/user", userRouter);
app.use("/exercise", exerciseRouter);
app.use("/session", sessionRouter);

// Fallback error route
app.get(/.*/, (req, res, next) => {
  res.send("Not a route.");
});

// const PORT = 3000;

// app.listen(PORT, "::", () => {
//   console.log(`Listening on port ${PORT}.`);
// });

const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Listening on port ${PORT}.`);
});
