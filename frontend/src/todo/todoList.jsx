import React from 'react';

import IconButton from '../template/IconButton';

export default props => {
    const renderRows = () => {
        const list = props.list || [];
        return list.map(todo => (
            <tr key={todo._id} className={ todo.done ? 'markAsDone': '' }>
                <td>{todo.description}</td>
                <td >
                    <IconButton style="success" icon='check'
                        onClick={() => props.handleMarkAsDone(todo)} hide={todo.done}></IconButton>
                    <IconButton style="warning" icon='undo'
                            onClick={() => props.handleMarkAsPending(todo)} hide={!todo.done}></IconButton>
                    <IconButton style="danger" icon='trash-o'
                        onClick={() => props.handleDelete(todo)}></IconButton>
                </td>
            </tr>
        ));
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
    );
}