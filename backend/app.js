const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())
const port = 3000

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite'
})

//--- MODEL----


const User = sequelize.define(
    'User',
    {
        // Model attributes are defined here
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            // allowNull defaults to true
        },
    },
    {
        // Other model options go here
    },
)

sequelize.sync()

async function getUsers() {
    const users = await User.findAll()
    console.log(users)
}

app.get('/', (req, res) => {
    User.findAll()
        .then((users) => res.json(users))
        .catch((error) => res.send(error.message))
})

app.post('/', (req, res) => {
    User.create(req.body)
      .then((users) => res.json(users))
      .catch((error) => res.send(error.message))
})


//---- excersice to call hello word!!----------
app.get('/', (req, res) => {
    res.send('Hello, World Chole!!!')
})



app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})