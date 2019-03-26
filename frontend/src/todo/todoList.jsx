import React from 'react'
import IconButton from '../componentes/iconButton'

export default props => {
    
    const renderRows = () =>{
        const list = props.list || []
        return list.map (todo => (
                <tr key={todo._id}><td>{todo.description}</td></tr>
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