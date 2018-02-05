import React from 'react'
import IconButton from '../template/iconButton'

export default props => {

    const renderRows = () => {
        //se exitir a lista ele seta, senão ele seta um array de uma lista vazia.
        const list = props.list || []

        //chama na "list" o método map() e dentro do map() seto os elementos no "todo".
        return list.map(todo => (
            //._id --> "undescore id" (_id) é a chave gerado pelo mongo, sua chave de identificador único.
            <tr key={todo._id}>
                <td>{todo.description}</td>
                <td>
                    <IconButton style='danger' icon='trash-o'
                        onClick={ () => props.handleRemove(todo) }>
                    </IconButton>
                </td>
            </tr>
        ))
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}