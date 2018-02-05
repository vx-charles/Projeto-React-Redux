//importa algo usando require (comando do node JS e CommonsJS), ou seja, importando dentro da pasta "node_modules"
const restful = require('node-restful')
const mongoose = restful.mongoose

const todoSchema = new mongoose.Schema({
    //description: vai ser do tipo string e obrigatória.
    description: { type: String, required: true },
    //done: verifica se a tarefa está concluída, e seu padrão é falso.
    done: { type: Boolean, required: true, default: false },
    //createdAt: o tipo é data e o default: Date.now, cria a data atual.
    createdAt: { type: Date, default: Date.now }
})

module.exports = restful.model('Todo', todoSchema)