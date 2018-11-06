//Require path to send the HTML file when the page is loaded
const path = require("path");

//Routes
module.exports = function(app) {

    app.get("/start", (req, res) => {
        console.log("Hit the /start route@");
        res.sendFile(path.join(__dirname, "../public/start.html"));
    })
    
    app.get("/session", (req, res) => {
        res.sendFile(path.join(__dirname, "../dist/index.html"));
    })
};
