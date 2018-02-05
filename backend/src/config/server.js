// const port = 3003

// const bodyParser = require('body-parser')
// const express = require('express')

// //cria a instância do express e associar a variável server
// const server = express()
// const allowCors = require('./cors')

// //usa o extended: true para hailitar o suporte a mais tipos de dados do pardão do "urlencoded".
// server.use(bodyParser.urlencoded({ extended: true }))
// server.use(bodyParser.json())
// server.use(allowCors)

// server.set('secret', 'opensecret');

// //registrar a porta que foi declarada no início.
// server.listen(port, function() {
//     console.log(`BACKEND is running on port ${port}.`)
// })

// module.exports = server

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const cors = require('cors')
const port = process.env.PORT || 3003;

server.use(bodyParser.urlencoded( { extended: true } ))
server.use(bodyParser.json())

server.use(cors({origin: '*'}));
server.set('secret', 'opensecret');

server.listen(port, function(){
    console.log(`backend server is running on port ${port}.`)
})

module.exports = server