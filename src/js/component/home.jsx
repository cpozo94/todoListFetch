import React, { useState, useEffect } from "react";

// include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

// create your first component
const Home = () => {
  const [todo, setTodo] = useState("");
  const [tasks, setTasks] = useState([]);

//   useEffect(() => {
//     fetch("https://assets.breatheco.de/apis/fake/todos/user/pozo", {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json"
//       }
//     })
//       .then((resp) => {
//         console.log(resp);
//         console.log(resp.ok); // Dará true si está correcto
//         console.log(resp.status);
//         return resp.json();
//       })
//       .then((data) => {
//         setTasks(data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);

    
  };

  const editList = () => {
    fetch("https://assets.breatheco.de/apis/fake/todos/user/pozo", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(tasks)
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }


  
  const handleKey = (event) => {
    if (event.key === "Enter" && todo !== "") {
      const newTask = { label: todo, done: false };
      addTask(newTask);
      setTodo("");
    }
  };

  return (
    <div className="text-center">
      <h1>hola</h1>
      {tasks.map((task, index) => (
        <p key={index}>{task.label}</p>
      ))}
      <input
        className="form-control"
        type="text"
        placeholder="Add task"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        onKeyDown={handleKey}
      />
    </div>
  );
};

export default Home;
