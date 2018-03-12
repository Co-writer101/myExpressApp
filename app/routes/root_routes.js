module.exports = (app) => {
    app.get('/', (req, res) => {
        let text = "It's root route. "

        if (res.locals.user)
            text += res.locals.user + " your ID."
        res.send(text)
        console.log(" root route is called")
    })
}