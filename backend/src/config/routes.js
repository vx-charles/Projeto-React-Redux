const express = require('express')

module.exports = function(server) {

    //API Routes
    const router = express.Router()

    //Middleware .use() vai pegar as URL's que começam com "/api" e automaticamente a variável router será chamado sempre que digitar na URL "/api"
    server.use('/api', router)

    //TODO Routes
    const todoService = require('../api/todo/todoService')

    //register() -> método do node-restful que vai usar todos os métodos que foram declarados lá no todoSrevice, no araay de métodos que são os (get, post, put, delete).
    //'/todos' URL base e dependendo do método do HTTP que chamar tipo se for "get", ele vai fazer uma consulta, se for um "post" ele vai incluir, se for um "put" ele vai alterar e se for "delete" ele vai deletar.
    //Basta só o método register() para fazer toda essa tarefa do Todo.methods(['get', 'post', 'put', 'delete'])
    todoService.register(router, '/todos')
}