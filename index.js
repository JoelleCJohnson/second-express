import express from 'express'

const app = express()
app.use = (express.json())

app.get("/", (req, res) => {
    res.send("hello!")
})


app.get("/lorem", (req, res) => {
    res.send("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
})

app.get("/user/:username/", (req, res) => {
    const name = req.params
    res.send(`Welcome back, ${name.username}!`)
})

app.get("/user/:username/:food", (req, res) => {
    const name = req.params
    const faveFood = req.params
    res.send(`Hi my name is ${name.username}, and my favorite food is ${faveFood.food}!`)
})

app.get("/train/:from-:to", (req, res) => {
    const departing = req.params
    const arriving = req.params
    res.send(`Loading rides from ${departing.from} to ${arriving.to}`)
})

app.listen(3000, () => {
    console.log("Listening on http://localhost:3000...")
})
