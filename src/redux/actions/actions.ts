import { ISetVisibilityFilterAction, TVisibilityFilters } from "./types";
import {addTodo, deleteTodo, editTodo, fetchTodos, ITodo} from "../../data/todos";

export const setVisibilityFilter = (filter: TVisibilityFilters): ISetVisibilityFilterAction => ({
  type: "SET_VISIBILITY_FILTER",
  filter,
});

export const VisibilityFilters: Record<TVisibilityFilters, string> = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE",
};

export const fetchTodosSuccess = (data: ITodo[]) => ({
  type: "FETCH_TODOS_SUCCESS",
  data,
});

export const fetchTodosFailure = (error: string) => ({
  type: "FETCH_TODOS_FAILURE",
  error,
});

export const addTodoSuccess = (message: string) => ({
  type: "ADD_TODO_SUCCESS",
  message,
});

export const startEditTodo = (editTodo: ITodo) => ({
  type: "START_EDIT_TODO",
    editTodo,
});

export const finishEditTodo = () => ({
  type: "FINISH_EDIT_TODO",
});

export function fetchTodosAction() {
  return (dispatch: any) =>
    fetchTodos()
      .then((response) => response.data)
      .then((data) => {
        dispatch(fetchTodosSuccess(data));
        return data;
      })
      .catch((error) => dispatch(fetchTodosFailure(error)));
}

export function toggleTodoAction(todo: ITodo) {
  return (dispatch: any) =>
    editTodo(todo.id, { ...todo, extra: todo.extra === "CHECKED" ? "UNCHECKED" : "CHECKED" })
      .then((response) => response.data)
      .then((data) => {
        dispatch(fetchTodosAction());
        return data;
      })
      .catch((error) => dispatch(fetchTodosFailure(error)));
}

export function editTodoAction(data: ITodo) {
  return (dispatch: any) =>
    editTodo(data.id, data)
      .then(() => {
        dispatch(finishEditTodo());
        dispatch(fetchTodosAction());
      })
      .catch((error) => addTodoSuccess(error));
}

export function deleteTodoAction(id: number) {
  return (dispatch: any) =>
    deleteTodo(id)
      .then(() => {
        dispatch(fetchTodosAction());
      })
      .catch((error) => addTodoSuccess(error));
}

export function addTodoAction(data: Partial<ITodo>) {
  return (dispatch: any) =>
    addTodo(data)
      .then(() => {
        dispatch(addTodoSuccess("Todo Added"));
        dispatch(fetchTodosAction());
      })
      .catch((error) => addTodoSuccess(error));
}
