// Middlewares app/middlewares/
let getIDfromURL = (req, res, next) => {
    if ( req.query.userId !== "") {
        console.log(" UserID is : " + req.query.userId )
        req.user = {
            id : req.query.userId
        }
        res.locals.user = req.user.id;
        console.log ("ID is set : " + req.user.id)
    }
    next()
}

let gruntAccessbyID = (req, res, next) => {
    if (req.user.id === "123") return next()
    res.status(401).send('There is no access!')
}

let logger = (req, res, next) => {
    console.log( req.method + " " + req.url);
    next();
  }

  module.exports = {
    getIDfromURL : getIDfromURL,
    gruntAccessbyID : gruntAccessbyID,
    logger : logger
  }