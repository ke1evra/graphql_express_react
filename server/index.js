const express = require("express");
const passport = require("./passport");
const logger = require("morgan");
const cookieSession = require("cookie-session");

const loginRouter = require('./routes/login');

const graphqlRouter = require("./routes/api");

let port = 8080;

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", req.header("Origin"));
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(
  cookieSession({
    name: "session",
    keys: ["key1", "key2"],
  })
);
app.use(passport.initialize());
app.use(passport.session());


app.use("/login", loginRouter);
app.use("/api", graphqlRouter);


app.listen(port);
console.log("GraphQL API server running at localhost: " + port);
