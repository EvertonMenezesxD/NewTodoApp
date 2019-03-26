import React from 'react'
import IconButton from '../componentes/iconButton'

export default props => {
    
    const renderRows = () =>{
        const list = props.list || []
        return list.map (todo => (
            <tr key={todo._id}>
                <td>{todo.description}</td>
                <td><IconButton style='warning' icon='plus'/></td>
                <td><IconButton style='danger' icon='trash' onClick={() => props.handleRemove(todo)}/></td>
            </tr>
        ))
    }
    
    return (
        <table className='table'>
        <thead>
            <tr>
                <th>Descrição</th>
                <th className='tableActions'>Ações</th>
            </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
            </table>
    )
}