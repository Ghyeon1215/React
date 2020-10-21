import React from "react";
import TodoListItem from "./TodoListItem";
import styled from "styled-components";

const Div = styled.div`
  min-height: 320px;
  max-height: 345px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #22b8cf;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background: white;
    border-radius: 10px;
  }
`;

const TodoList = ({ todos, onRemove, onToggle }) => {
  return (
    <Div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </Div>
  );
};

export default React.memo(TodoList);
