import React, { FC } from "react";
import logo from "./logo.svg";
import "./App.css";
import {VisibleTodoList, AddTodo, EditTodo} from "../../containers";

interface IAppProps {}

export const App: FC<IAppProps> = () => {
  return (
      <>
      <div className="page-content page-container" id="page-content">
          <div className="padding">
              <div className="row container d-flex justify-content-center">
                  <div className="col-lg-12">
                      <div className="card px-3">
                          <div className="card-body">
                              <h4 className="card-title">Awesome Todo list</h4>
                                <AddTodo />
                                <VisibleTodoList />
                            </div>
                        </div>
                  </div>
              </div>
          </div>
      </div>
      <EditTodo/>
      </>
  );
};
