const express = require("express");
const router = express.Router();
const passport = require("../passport");

router.post("/", (req, res) => {
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

module.exports = router;
