import React from 'react';

export const TodoItem = (props) => {
    const {todo, toggleIsCompleted} = props;
    return (
        <li key={todo.id} onClick={() => toggleIsCompleted(todo.id)}>
            <input type='checkbox'
                   checked={todo.isDone}
                   readOnly
            />
            {todo.isDone
                ?
                <strike>{todo.description + ' ' + todo.category}</strike>
                :
                todo.description + ' ' + todo.category}
        </li>
    );
};