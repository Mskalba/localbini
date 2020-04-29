import React, {FC, useState} from "react";
import { connect } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import {
    deleteTodoAction,
    editTodoAction,
    fetchTodosAction,
    finishEditTodo,
    startEditTodo,
    toggleTodoAction
} from "../../redux/actions";
import {ITodo} from "../../data/todos";

interface IAddTodoProps {
    editTodo: any;
    editedTodo: ITodo
    finishEditTodo: any
}

const EditTodoComponent: FC<IAddTodoProps> = ({ editTodo, editedTodo, finishEditTodo }) => {
    if(!editedTodo) {
        return null;
    }

  return (
      <div className="modal fade show" id="exampleModal" style={{display: "block", paddingRight: "15px"}} tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel"
           aria-hidden="true">
          <div className="modal-dialog" role="document">
              <div className="modal-content">
                  <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={finishEditTodo}>
                          <span aria-hidden="true">&times;</span>
                      </button>
                  </div>
                  <div className="modal-body">
    <div className="add-items d-flex">
        <Formik
        initialValues={{ ...editedTodo }}
        onSubmit={async (values) => {
            editTodo({ ...values });
        }}
        validationSchema={Yup.object().shape({
          title: Yup.string().required("Required"),
        })}>
        {(props) => {
          const {
            values,
            touched,
            errors,
            dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
          } = props;
          return (
            <form onSubmit={handleSubmit} className="add-items d-flex">
                <input className={`form-control todo-list-input ${errors.title && touched.title ? "text-input error" : "text-input"}`}
                       id="title"
                       placeholder="New todo"
                       type="text"
                       value={values.title}
                       onChange={handleChange}
                       onBlur={handleBlur} />
              {errors.title && touched.title && <div className="input-feedback">{errors.title}</div>}

            <button className="reset btn btn-primary font-weight-bold todo-list-add-btn" onClick={handleReset} disabled={!dirty || isSubmitting}>Reset</button>
            <button type="submit" className="add btn btn-primary font-weight-bold todo-list-add-btn" disabled={isSubmitting}>Edit</button>

            </form>
          );
        }}
      </Formik>
    </div>
                  </div>
              </div>
          </div>
      </div>
  );
};

const mapStateToProps = (state: any) => ({
    editedTodo: state.todos.editTodo,
});

const mapDispatchToProps = (dispatch: any) => ({
    editTodo: (todo: ITodo) => dispatch(editTodoAction(todo)),
    finishEditTodo: () => dispatch(finishEditTodo()),
});

export const EditTodo = connect(mapStateToProps, mapDispatchToProps)(EditTodoComponent);
