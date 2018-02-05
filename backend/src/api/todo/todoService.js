const Todo = require('./todo') //aqui a variável Todo recebe o resultado do module.exports que é o método restful.

Todo.methods(['get', 'post', 'put', 'delete'])
//get - pega os elementos da URL, tipo pegar um ID
//post - faz a inserção
//put - faz a alteração
//delete - remove do banco

Todo.updateOptions({ new: true, runValidators: true })
//new: true -> quando mandar uma atualização, quero que retorne o registro atualizado.
//runValidators: true -> O node restul não valida as atualizações quando cria o registro, então o runValidators pega os "required" criados no objeto e valida.

module.exports = Todo