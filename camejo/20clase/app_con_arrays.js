

const express = require('express')
const app = express()
const port = 3000

let users = [
    {
        id: 1,
        name: 'Eduardo',
        money: 5000,
        selected_character: 'Goku'
    },
    {
        id: 2,
        name: 'Dr. Mengeche',
        money: 3000,
        selected_character: 'Vegeta'
    },
    {
        id: 3,
        name: 'Horacio',
        money: 2500,
        selected_character: undefined
    },
    {
        id: 4,
        name: 'Messi',
        money: 8000,
        selected_character: 'Frezzer'
    },
    {
        id: 5,
        name: 'Libert',
        money: 12000,
        selected_character: 'Bulma'
    }
];
let characters = []
let unlocked_characters = []

//sirve para que todo lo que enviemos o aceptemeos tengo formato json
app.use(express.json())


//muestra el mensaje por pantlla "DragonBall app"
app.get('/', (req, res) => {
    res.send('DragonBall app')
})

//muestra todos los ususarios en un json
app.get('/api/v912/users', (req, res) => {
    res.json(users)
})

//muestra un solo usuario
app.get('/api/v912/users/:id', (req, res) => {

    const user = users.find((element) => element.id == req.params.id)

    if (user === undefined) {
        res.sendStatus(404)
        return
    }
    res.json(user)
})

//crea un usuario
app.post('/api/v912/users', (req, res) => {

    const user = {

        id: users.length + 1,
        name: req.body.name,
        money: req.body.money ?? 0,
        selected_character: undefined
    }
    users.push(user)
    res.status(201).send(user)
})

//eliminar usuario
app.delete('/api/v912/users/:id', (req, res) => {
    const user = users.find((element) => element.id == req.params.id)
    if (user == undefined){
        res.sendStatus(404)
        return
    }

    users = users.filter((element) => element.id != req.params.id)
    res.send(user)
})

//modificar usuario
app.put('/api/v912/users/:id', (req, res) => {
    let user_index = users.findIndex((element) => element.id == req.params.id)
    if (user_index == undefined){
        res.sendStatus(404)
        return
    }

    users[user_index].name = req.body.name ?? users[user_index].name
    users[user_index].money = req.body.money ?? users[user_index].money
    users[user_index].selected_character = req.body.selected_character ?? users[user_index].selected_character
    [user_index].selected_character
    res.send(users[user_index])
})



app.listen(port, () => {
  console.log(`Dragonball app listening on port ${port}`)
})
