module.exports = (app) => {
    app.get('/public', (req, res) => {
        res.send("It's public route")
        console.log(" public route is called")
    })
}