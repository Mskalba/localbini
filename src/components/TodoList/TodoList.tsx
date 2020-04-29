import React, { FC, useEffect } from "react";
import { ITodo } from "../../data/todos";
import { Todo } from "./Todo";

interface ITodoList {
  todos: ITodo[];
  toggleTodo: (todo: ITodo) => any;
  startEditTodo: (todo: ITodo) => any;
    deleteTodo: (id: number) => any;
  fetchTodos: () => any;
}

export const TodoList: FC<ITodoList> = ({ todos, toggleTodo, fetchTodos, startEditTodo, deleteTodo }) => {
  useEffect(() => {
    fetchTodos();
  }, []);

  if(!todos.length) {
    return <div>Empty list</div>
  }
  return (
      <div className="list-wrapper">
          <ul className="d-flex flex-column-reverse todo-list">
      {todos &&
        todos.map((todo) => <Todo key={todo.id} todo={todo} toggleTodo={() => toggleTodo(todo)} editTodo={() => startEditTodo(todo)} deleteTodo={() => deleteTodo(todo.id)} />)}
    </ul>
      </div>
  );
};
