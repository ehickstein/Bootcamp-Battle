//Require db for server query models
const db = require("../models");

//Routes
module.exports = function(app) {

    //Used to get all users
    app.get("/api/users", (req, res) => {
        db.User.findAll({}).then((dbUser) => {
            res.json(dbUser)
        });
    });

    //Used to get all enemies
    app.get("/api/enemies", (req, res) => {
        db.Enemy.findAll({}).then((dbEnemies) => {
            res.json(dbEnemies);
        });
    });

    //Used to get one user by ID
    app.get("/api/users/:id", (req, res) => {
        db.User.findOne({
            where: {
                id: req.params.id
            }
        }).then((oneUser) => {
            res.json(oneUser);
        });
    });

    //Used to get one enemy by ID
    app.get("/api/enemies/:id", (req, res) => {
        db.Enemy.findOne({
            where: {
                id: req.params.id
            }
        }).then((oneEnemy) => {
            res.json(oneEnemy);
        });
    });

    //Used to create a new user
    app.post("/api/users", (req, res) => {
        db.User.create(req.body).then((newUser) => {
            res.json(newUser);
        });
    });

};
