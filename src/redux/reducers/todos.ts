import { TAction } from "../actions";
import { ITodo } from "../../data/todos";

const initialState = {
  items: [],
  error: "",
  message: "",
  editTodo: null
};

const todos = (state = initialState, action: TAction) => {
  switch (action.type) {
    case "TOGGLE_TODO":
      return {
        ...state,
        items: state.items.map((todo: ITodo) =>
          todo.id === action.id ? { ...todo, extra: todo.extra === "CHECKED" ? "UNCHECKED" : "CHECKED" } : todo,
        ),
      };
    case "FETCH_TODOS_SUCCESS":
      return {
        ...state,
        items: action.data,
      };
    case "FETCH_TODOS_FAILURE":
      return {
        ...state,
        error: action.error,
      };
    case "ADD_TODO_SUCCESS":
      return {
        ...state,
        message: action.message,
      };

    case "START_EDIT_TODO":
      return {
        ...state,
        editTodo: action.editTodo,
      };

    case "FINISH_EDIT_TODO":
      return {
        ...state,
        editTodo: null,
      };
    default:
      return state;
  }
};

export default todos;
