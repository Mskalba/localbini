import { connect } from "react-redux";
import {
    deleteTodoAction,
    editTodoAction,
    fetchTodosAction, startEditTodo,
    toggleTodoAction,
    TVisibilityFilters,
    VisibilityFilters,
} from "../../redux/actions";
import { TodoList } from "../../components/TodoList";
import { ITodo } from "../../data/todos";

const getVisibleTodos = (todos: ITodo[], filter: TVisibilityFilters) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter((t) => t.extra === "CHECKED");
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter((t) => t.extra === "UNCHECKED");
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

const mapStateToProps = (state: any) => ({
  todos: getVisibleTodos(state.todos.items, state.visibilityFilter),
});

const mapDispatchToProps = (dispatch: any) => ({
  toggleTodo: (todo: ITodo) => dispatch(toggleTodoAction(todo)),
    startEditTodo: (todo: ITodo) => dispatch(startEditTodo(todo)),
  deleteTodo: (id: number) => dispatch(deleteTodoAction(id)),
  fetchTodos: () => dispatch(fetchTodosAction()),
});

export const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);
