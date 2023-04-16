import React, { useState, useEffect } from "react";
import { getTask, editListTask } from "./sevice/index.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTasks, faTrash, faCheck } from "@fortawesome/free-solid-svg-icons";




const Home = () => {
  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [loading, setLoading] = useState(false);

  const getTodoList = async () => {
    setLoading(false);
    const data = await getTask();
    setTodoList(data);
     // actualizamos el estado de carga
     setLoading(false);
  };

  useEffect(() => {
    getTodoList();
  }, []);

  const addTask = async () => {
    setLoading(true);
    const newTaskObject = { label: newTodo, done: false };
    const newTodoList = [...todoList, newTaskObject];
    await editListTask(newTodoList);
    getTodoList();
    setLoading(false);
    
  };

  const deleteTask = async (taskIndex) => {
    setLoading(true);
    const newTodoList = todoList.filter((_, index) => index !== taskIndex);
    await editListTask(newTodoList);
    getTodoList();
    setLoading(false);
  };

  const handleKey = (event) => {
    if (event.key === "Enter" && event.target.value !== "") {
      addTask();
    }
  };

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col">
          <h1 className="title">Todo List</h1>

          <div>
            <input
              className="form-control"
              placeholder="new task"
              onChange={(e) => setNewTodo(e.target.value)}
              onKeyPress={handleKey}
            ></input>
            
          </div>

          {loading ? ( // agregamos una condición para mostrar el spinner
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            todoList.length ? (
              todoList.map((todo, index) => (
                <ul className="list-group.item" key={index}>
                  <li class="list-group-item">
                    <FontAwesomeIcon
                      icon={faTrash}
                      onClick={() => deleteTask(index)}
                    />
                    {todo.label}
                  </li>
                </ul>
              ))
            ) : (
              <p>No tasks yet.</p>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
