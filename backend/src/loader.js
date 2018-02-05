//carregar os arquivos principais de configuração
const server = require('./config/server')

//carrega o bando de dados
require('./config/database')

//require() --> é um método e o (server) --> é um parâmetro
require('./config/routes')(server)