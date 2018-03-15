module.exports = (app) => {
  app.get('/private', (req, res) => {
    let text = 'It\'s private route. '

    if (res.locals.user)
      text += `${res.locals.user} your ID.`
    res.send(text)
  })
}