const express = require("express");
const passport = require("./passport");
const logger = require("morgan");
const cookieSession = require("cookie-session");

const graphqlRouter = require("./graphql/graphqlRouter");

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
app.get("/", (req, res) => {
  res.end("ok");
});

app.post("/login", (req, res) => {
  console.log(req.body);
  passport.authenticate("local-signin", function (error, user) {
    if (error) {
      return res.status(500).json({
        message: "Что то пошло не так",
        error: error.message || "Ошибка сервера",
      });
    }
    req.logIn(user, function (error) {
      console.log(user);
      if (!user) {
        return res.status(404).json({
          message: `Пользователь с такой комбинацией логина и пароля не найден.`,
        });
      }
      if (error) {
        console.log(error);
        return res.status(500).json({
          message: "Что то пошло не так",
          error: error.message || "Ошибка сервера",
        });
      }

      return res.status(202).json({
        message: `Пользователь успешно авторизирован.`,
        isAuthenticated: true,
        user,
      });
    });
  })(req, res);
});

app.get("/user", (req, res) => {
  res.json(req.user);
});

app.use("/api", graphqlRouter);

app.listen(port);
console.log("GraphQL API server running at localhost: " + port);
