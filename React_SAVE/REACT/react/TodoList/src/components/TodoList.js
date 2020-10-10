import React, { Component } from 'react';
import TodoListItem from './TodoListItem';
import styled from 'styled-components';

const Div = styled.div`
    min-height: 320px;
    max-height: 513px;
    overflow-y: auto;
`;

const TodoList = ({ todos, onRemove, onToggle }) => {
    return (
        <Div className="TodoList">
            {todos.map(todo => (
                <TodoListItem 
                 todo={todo}
                 key={todo.id} 
                 onRemove={onRemove}
                 onToggle={onToggle} />
            ))}
        </Div>
    );
};

export default TodoList;