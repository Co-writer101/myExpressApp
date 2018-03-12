const express = require("express")
const app = express()
const middlewares = require("./app/middlewares")
const port = 3000

app.disable("x-powered-by");

app.use(
    middlewares.logger,
    middlewares.getIDfromURL
);

app.use("/private", middlewares.gruntAccessbyID);

// Load routers
require("./app/routes")(app);

// Run App
app.listen(port, () => console.log("App listening on port 3000!"))