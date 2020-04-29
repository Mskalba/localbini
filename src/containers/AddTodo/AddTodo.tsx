import React, { FC } from "react";
import { connect } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import { addTodoAction } from "../../redux/actions";

interface IAddTodoProps {
  dispatch: any;
}

const AddTodoComponent: FC<IAddTodoProps> = ({ dispatch }) => {
  return (
    <div className="add-items d-flex">
        <Formik
        initialValues={{ title: "" }}
        onSubmit={async (values) => {
          dispatch(addTodoAction({ ...values, extra: "UNCHECKED" }));
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
            <button type="submit" className="add btn btn-primary font-weight-bold todo-list-add-btn" disabled={isSubmitting}>Add</button>

            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export const AddTodo = connect()(AddTodoComponent);
