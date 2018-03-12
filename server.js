const express = require("express")
const app = express()

const port = 3000

app.disable("x-powered-by");

// Middlewares
let getIDfromURL = (req, res, next) => {
    if ( req.query.userId != "")
        console.log(" UserID is : " + req.query.userId )
        req.user = {
            id : req.query.userId
        }
        res.locals.user = req.user.id;
        console.log ("ID is set : " + req.user.id)
    next()
}

let gruntAccessbyID = (req, res, next) => {
    if (req.user.id == "123") return next()
    res.status(401).send('There is no access!')
}

let logger = (req, res, next) => {
    console.log( req.method + " " + req.url);
    next();
  }

app.use(
    logger,
    getIDfromURL
);

app.use("/private", gruntAccessbyID);

// Load routers
require("./app/routes")(app);

// Run App
app.listen(port, () => console.log("App listening on port 3000!"))