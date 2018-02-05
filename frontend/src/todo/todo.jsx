import React, { Component } from 'react'
import axios from 'axios'

// Dependências externas
import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {
    constructor(props) {
        super(props)
        // o "this" dentro do contructor já aponta para a própria classe.
        // o método bind serve para fazer a amarração com a classe "Todo". ele faz para evitar de dar "null" no resultado.
        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleRemove = this.handleRemove.bind(this)

        //Aqui o método refresh já inicia carregado.
        this.refresh()

        this.state = { description: '', list: [] }
    }

    refresh() {
        //"sort=-createdAt" --> ordena a consulta de forma decrescente a data.
        //O método then() chama o resultado.
        axios.get(`${URL}?sort=-createdAt`)
        .then( resp => this.setState({...this.state, description: '', list: resp.data}) )
        //description: '' --> zera a descrição, deixa pronto para fazer outras operações.
    }


    handleAdd() {
        //console.log(this.state.description)
        const description = this.state.description

        //axios é baseado em Promise.
        //método then() faz a requisição do formulário e é um método do Promise.
        //O método POST do axios inclui os dados em cima da variável URL base do backend.
        axios.post(URL, { description })
        .then(resp => this.refresh())
    }

    handleRemove(todo) {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => this.refresh())
    }

    handleChange(e) {
        // o operador Spread(...), vai pegar todos os dados dos estados, que são os "description" e "list".
        this.setState({...this.state, description: e.target.value})
    }

    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
                <TodoForm description={this.state.description}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd} />
                <TodoList list={this.state.list}
                    handleRemove={this.handleRemove} />
            </div>
        )
    }
}