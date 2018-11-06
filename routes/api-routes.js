//Require db for server query models
const db = require("../models");

//Defining a set of default enemies to be appended to the Game object
const defaultEnemies = [{
    name: "Enemy 1",
    stat1: 100,
    stat2: 5,
    stat3: 7
},
{
    name: "Enemy 2",
    stat1: 100,
    stat2: 3,
    stat3: 6
},
{
    name: "Enemy 3",
    stat1: 100,
    stat2: 2,
    stat3: 6
}]

//Routes
module.exports = function(app) {

    //GET a Game object with a specific gameID
    app.get("/game", (req, res) => {
        db.Game.findOne({
            where: {
                userId: req.body.userId
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

    //POST a new game object with default enemies
    app.post("/game", (req, res) => {
        db.Game.create({
            score: 0
        }).then((postGame) => {
            res.json(postGame);
            const gameId = postGame.insertedId;

            for (enemy in defaultEnemies) {
                const currentEnemies = [];
                currentEnemies.push({
                    name: defaultEnemies[enemy].name,
                    stat1: defaultEnemies[enemy].stat1,
                    stat2: defaultEnemies[enemy].stat2,
                    stat3: defaultEnemies[enemy].stat3,
                    gameId: gameId
                })
            }

            return db.bulkCreate(currentEnemies);

        }).then(newEnemies => {
            res.json(newEnemies);
        });
    });

    //UPDATE the game object with a specific game ID
    app.put("/game", (req, res) => {
        db.Game.update({
            score: req.body.score,
            where: {
                id: req.body.gameId
            }
        }).then((updateGame) => {
            res.json(updateGame);
        });
    });

    //UPDATE enemy stat1 with a specific game ID
    app.put("/enemy", (req, res) => {
        db.Enemy.update({
            stat1: req.body.stat1,
            where: {
                gameId: req.body.gameId
            }
        }).then(updateEnemy => {
            res.json(updateEnemy);
        });
    });
};
