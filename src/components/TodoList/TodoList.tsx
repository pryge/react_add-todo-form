import React from 'react';
import { TodoInfo } from '../TodoInfo/TodoInfo';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
  user: {
    id: number;
    name: string;
    email: string;
  } | null;
}

interface TodoListProps {
  todos: Todo[];
}

export const TodoList: React.FC<TodoListProps> = ({ todos }) => (
  <ul className="TodoList">
    {todos.map(todo => (
      <li key={todo.id} className="TodoList__item">
        <TodoInfo todo={todo} />
      </li>
    ))}
  </ul>
);
