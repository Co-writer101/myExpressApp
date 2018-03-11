module.exports = function(app) {
    app.get('/', (req, res) => {
        res.send("It's root route")
        console.log(" root route is called")
    })
}