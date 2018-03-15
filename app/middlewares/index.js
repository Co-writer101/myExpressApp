// Middlewares app/middlewares/
const getIDfromURL = (req, res, next) => {
  if ( req.query.userId !== '') {
    console.log( `User ID is : $(req.query.userId)`)
    req.user = {
      id : req.query.userId
    }
    res.locals.user = req.user.id;
    console.log (`User ID is : $(req.user.Id)`)
  }
  next()
}

const gruntAccessbyID = (req, res, next) => {
  if (req.user.id === '123') return next()
  res.status(401).send('There is no access!')
  return undefined
}

const logger = (req, res, next) => {
  console.log( `$(req.method) $(req.url)`);
  next();
}

module.exports = {
  getIDfromURL,
  gruntAccessbyID,
  logger
}