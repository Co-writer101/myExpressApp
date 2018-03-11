module.exports = function(app) {
    app.get('/private', (req, res) => {
        res.send("It's private route")
        console.log(" private route is called")
    })
}