import React, { FC } from "react";
import { ITodo } from "../../data/todos";

interface ITodoList {
  todo: ITodo;
  toggleTodo: () => void;
  editTodo: () => void;
  deleteTodo: () => void;
}

export const Todo: FC<ITodoList> = ({ todo, toggleTodo, deleteTodo, editTodo }) => (
    <li>
      <div className="d-flex flex-row bd-highlight w-100">
        <div className=" flex-row flex-grow-1 bd-highlight w-50 form-check justify-content-center align-content-center">
          <label className="form-check-label"> <input className="checkbox" type="checkbox" checked={todo.extra === "CHECKED"}
                                                      onChange={() => toggleTodo()} />{todo.title}
          <i className="input-helper"></i>
        </label>
          </div>
      <div className="p-2 flex-shrink-1 bd-highlight justify-content-center align-content-center">
        <button className="" onClick={editTodo}>Edit</button>
        <button className="" onClick={deleteTodo}>Delete</button>
      </div>
      </div>
    </li>
);
