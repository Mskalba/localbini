import axios from "axios";

const API = {
  get: "http://195.181.210.249:3000/todo/",
  put: "http://195.181.210.249:3000/todo/{id}",
  post: "http://195.181.210.249:3000/todo/",
  delete: "http://195.181.210.249:3000/todo/{id}",
};

export interface IId {
  id: number;
}

export interface ITodo extends IId {
  title: string;
  extra: TExtra;
}

export type TExtra = "CHECKED" | "UNCHECKED";

export const fetchTodos = () => {
  return axios.get(API.get);
};

export const addTodo = (data: Partial<ITodo>) => {
  return axios.post(API.get, data);
};

export const editTodo = (id: number, data: Partial<ITodo>) => {
  return axios.put(API.put.replace("{id}", id.toString()), data);
};

export const deleteTodo = (id: number) => {
  return axios.delete(API.delete.replace("{id}", id.toString()));
};
