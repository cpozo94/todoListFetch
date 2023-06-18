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

  const toggleTask = async (taskIndex) => {
    setLoading(true);
    const updatedTodoList = [...todoList];
    updatedTodoList[taskIndex].done = !updatedTodoList[taskIndex].done;
  
    if (updatedTodoList[taskIndex].done) {
      const currentDate = new Date().toLocaleDateString(); 
      const currentTime = new Date().toLocaleTimeString(); 
      const completedDateTime = `${currentDate} ${currentTime}`; 
      updatedTodoList[taskIndex].completedTime = completedDateTime; 
    } else {
      updatedTodoList[taskIndex].completedTime = null; 
    }
  
    await editListTask(updatedTodoList);
    setTodoList(updatedTodoList);
    setLoading(false);
  };
  

  const handleKey = (event) => {
    if (event.key === "Enter" && event.target.value !== "") {
      addTask();
      event.target.value = ""; // Clear the input value
    }
  };


  return (
    <div className="container text-center">
      <div className="row">
        <div className="col">
          <h1 className="title">Lista de Tareas</h1>

          <div>
            <input
              className="form-control"
              placeholder="new task"
              onChange={(e) => setNewTodo(e.target.value)}
              onKeyPress={handleKey}
            ></input>
          </div>

          {loading ? (
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : todoList.length ? (
            todoList.map((todo, index) => (
              <ul className="list-group.item" key={index}>
                <li className={`list-group-item ${todo.done ? "completed" : ""}`}>
                  <FontAwesomeIcon
                    icon={faCheck}
                    onClick={() => toggleTask(index)}
                    style={{ color: todo.done ? "green" : "inherit" }}
                  />
                  {todo.label}
                  {todo.completedTime && (
                    <span className="completed-time">
                       Tarea completada el día {todo.completedTime}
                    </span>
                  )}
                  <FontAwesomeIcon
                    icon={faTrash}
                    onClick={() => deleteTask(index)}
                    className="ml-auto"
                  />
                </li>
              </ul>
            ))
            
          ) : (
            <p>No tasks yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
