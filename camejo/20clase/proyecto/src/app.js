
//importa el constructor de PrismaClient desde el paquete de Prisma para usarlo
const { PrismaClient } = require('@prisma/client')
const express = require('express')
const app = express()
const port = 3000

//crea una instancia de PrismaClient, la cual permite interactuar con la base de datos
const prisma = new PrismaClient()



//sirve para que todo lo que enviemos o aceptemeos tengo formato json
app.use(express.json())


//muestra el mensaje por pantlla "DragonBall app"
app.get('/', (req, res) => {
    res.send('DragonBall app')
})

//muestra todos los ususarios en un json

//hace:
// SELECT * FROM Users
app.get('/api/v912/users', async (req, res) => {
    //find many sirve para obtener todos los registros de la tabla user en la bdd
    const users = await prisma.user.findMany()
    res.json(users)
})

//muestra un solo usuario

//hace:
// SELECT * FROM Users WHERE id = req.params.id
app.get('/api/v912/users/:id', async (req, res) => {

    const user = await prisma.user.findUnique({
        where: {
            id : parseInt(req.params.id)
        }
    })
    if (user === null) {
        res.sendStatus(404)
        return
    }
    res.json(user)
})

//-----------------------------------------------------------------------------------------------------------------------------
                          //CHARACTER

// SELECT * FROM Users JOIN ... WHERE id = req.params.id
app.get('/api/v912/users/:id/characters', async (req, res) => {

    const user = await prisma.user.findUnique({
        where: {
            id : parseInt(req.params.id)
        },
        include: {
            unlocked_characters: true
        }
    })
    if (user === null) {
        res.sendStatus(404)
        return
    }
    res.json(user.unlocked_characters)
})



//------------------------------------------------------------------------------------------------------------------------------


//crea un usuario
app.post('/api/v912/users', async (req, res) => {

    //hace:
    //INSERT INTO Users (name, money) VALUES (req.body.name, req.body.money)
    const user = await prisma.user.create({
        data: {
            name: req.body.name,
            money: req.body.money
        }
    })
    res.status(201).send(user)
})

//eliminar usuario
app.delete('/api/v912/users/:id', async (req, res) => {
    
    //esto se usa en prsima para buscar al usuario en la bdd

    //Hace:
    // SELECT * FROM Users WHERE id = req.params.id
    const user = await prisma.user.findUnique ({
        //finUnique metodo que permite consultar la bdd buscando
        //un solo registro en la tabla user
        //en este caso buscamos al usuario cuyo id sea igual a req.params.id
        where: {
            id: parseInt(req.params.id)
        }
    })

    if (user === null) {
        res.sendStatus(404)
        return
    }

    //si el usuario fue encontrado se procede a eliminarlo

    //hace:
    //DELETE FROM Users WHERE id = req.params.id 
    await prisma.user.delete({
        where: {
            id: parseInt(req.params.id)
        }
    })

    res.send(user)

})

//modificar usuario
app.put('/api/v912/users/:id', async (req, res) => {

    let user = await prisma.user.findUnique({
        where: {
            id: parseInt(req.params.id)
        }
    })

    if (user === null) {
        res.sendStatus(404)
        return
    }

    //UPDATE Users SET (name = req.body.name, money = req.body.money)
    user = await prisma.user.update({
        where: {
            id: user.id
        },
        data: {
            name: req.body.name,
            money: req.body.money
        }    
    })
    res.send(user)

})



app.listen(port, () => {
  console.log(`Dragonball app listening on port ${port}`)
})
