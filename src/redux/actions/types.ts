import { ITodo } from "../../data/todos";

const ADD_TODO: "ADD_TODO" = "ADD_TODO";
const SET_VISIBILITY_FILTER: "SET_VISIBILITY_FILTER" = "SET_VISIBILITY_FILTER";
const TOGGLE_TODO: "TOGGLE_TODO" = "TOGGLE_TODO";
const FETCH_TODOS_SUCCESS: "FETCH_TODOS_SUCCESS" = "FETCH_TODOS_SUCCESS";
const FETCH_TODOS_FAILURE: "FETCH_TODOS_FAILURE" = "FETCH_TODOS_FAILURE";
const ADD_TODO_SUCCESS: "ADD_TODO_SUCCESS" = "ADD_TODO_SUCCESS";
const START_EDIT_TODO: "START_EDIT_TODO" = "START_EDIT_TODO";
const FINISH_EDIT_TODO: "FINISH_EDIT_TODO" = "FINISH_EDIT_TODO";

export type TVisibilityFilters = "SHOW_ALL" | "SHOW_COMPLETED" | "SHOW_ACTIVE";
export type TActionTypes = "ADD_TODO" | "SET_VISIBILITY_FILTER" | "TOGGLE_TODO";

export interface IAddTodoAction {
  type: typeof ADD_TODO;
  data: ITodo[];
}

export interface ISetVisibilityFilterAction {
  type: typeof SET_VISIBILITY_FILTER;
  filter: TVisibilityFilters;
}

export interface IToggleTodoAction {
  type: typeof TOGGLE_TODO;
  id: number;
}

export interface IFetchTodoSuccessAction {
  type: typeof FETCH_TODOS_SUCCESS;
  data: ITodo[];
}

export interface IFetchTodoFailureAction {
  type: typeof FETCH_TODOS_FAILURE;
  error: string;
}

export interface IAddTodoSuccessAction {
  type: typeof ADD_TODO_SUCCESS;
  message: string;
}

export interface IStartEditTodoAction {
  type: typeof START_EDIT_TODO;
  editTodo: ITodo;
}

export interface IFinishEditTodoAction {
  type: typeof FINISH_EDIT_TODO;
}

export type TAction =
  | IAddTodoAction
  | ISetVisibilityFilterAction
  | IToggleTodoAction
  | IFetchTodoSuccessAction
  | IFetchTodoFailureAction
  | IAddTodoSuccessAction
    |IStartEditTodoAction
    |IFinishEditTodoAction;
