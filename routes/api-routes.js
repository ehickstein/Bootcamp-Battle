//Require db for server query models
const db = require("../models");

//Routes
module.exports = function(app) {

    //GET a Game object with a specific gameID
    app.get("/game/:game", (req, res) => {
        db.Game.findOne({
            where: {
                gameID: req.params.game
            },
            include: [db.Enemy]
        }).then((oneGame) => {
            res.json(oneGame);
        });
    });

    //GET all enemies from all games
    app.get("/enemies", (req, res) => {
        db.Enemy.findAll({
            include: [db.Game]
        }).then((dbEnemy) => {
            res.json(dbEnemy);
        });
    });

    //GET all enemies with a specific gameID
    app.get("/enemies/:game", (req, res) => {
        db.Enemy.findAll({
            where: {
                gameId: req.params.game
            },
            include: [db.Game]
        }).then((gameIDEnemy) => {
            res.json(gameIDEnemy);
        });
    });

    //POST a new game object
    app.post("/game", (req, res) => {
        db.Game.create(req.body).then((postGame) => {
            res.json(postGame);
        });
    });

    //UPDATE all enemies with a specific gameID
    app.put("/enemies/:game", (req, res) => {
        db.Enemy.update(
            req.body,
            {
                where: {
                    gameId: req.params.game
                }
            }).then((enemyUpdate) => {
            res.json(enemyUpdate);
        });
    });
};
