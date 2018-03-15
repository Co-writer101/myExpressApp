module.exports = (app) => {
  app.get('/public', (req, res) => {
    let text = 'It\'s public route. '

    if (res.locals.user)
      text += `${res.locals.user} your ID.`
    res.send(text)
  })
}