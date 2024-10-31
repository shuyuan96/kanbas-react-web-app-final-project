import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

export default function TodoList() {
  const {todos} = useSelector((state:any) => state.todosReducer);
  return (
    <div className="mt-3">
      <div className="row">
        <h2 className="mb-3 text-left float-start">Todo List</h2>
        <div className="col-12 col-md-6">
          <ul className="list-group">
            <TodoForm/>
            {todos.map((todo:any) => (
              <TodoItem todo={todo}/>
            ))}
          </ul>
        </div>
        <hr/>
      </div>
    </div>
  );
}
