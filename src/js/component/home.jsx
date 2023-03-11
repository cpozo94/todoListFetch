import React, { useState, useEffect } from "react";
import { getTask, editListTask } from "./sevice/index.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTasks, faTrash, faCheck } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const getTodoList = async () => {
    const data = await getTask();
    setTodoList(data);
  };

  useEffect(() => {
    getTodoList();
  }, []);

  const addTask = async () => {
    const newTaskObject = { label: newTodo, done: false };
    const newTodoList = [...todoList, newTaskObject];
    await editListTask(newTodoList);
    getTodoList();
    setNewTodo("");
  };

  const deleteTask = async (taskIndex) => {
    const newTodoList = todoList.filter((_, index) => index !== taskIndex);
    await editListTask(newTodoList);
    getTodoList();
  };

  const handleKey = (event) => {
    if (event.key === "Enter" && event.target.value !== "") {
      addTask();
    }
  };

  return (
    <div className="text-center">
      <div>
        <input
          placeholder="new task"
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyPress={handleKey}
        ></input>
        <button onClick={addTask}>save</button>
      </div>
    
      {todoList.length ? (
        todoList.map((todo, index) => (
          <div key={index}>
            <p>
              <FontAwesomeIcon
                icon={faTrash}
                onClick={() => deleteTask(index)}
              />
              {todo.label}
            </p>
          </div>
        ))
      ) : (
        <p>No tasks yet.</p>
      )}
    </div>
  );
};

export default Home;
