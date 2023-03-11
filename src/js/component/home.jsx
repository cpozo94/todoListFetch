import React, { useState, useEffect } from "react";
import { getTask, editListTask } from "./sevice/index.js";



// create your first component
const Home = () => {

const [todoList,setTodoList] = useState ([])
const [newTodo,setNewTodo] = useState("")

const getTodoList = async () => {
  const data =  await getTask()
  setTodoList(data)

}

  //si la funcion a la que estoy llamando es asíncrona, la que la llama ha de serlo también.
  useEffect(() =>{
    getTodoList();
  },[])


  console.log(todoList)



  const addTask = async() =>{
    const newTaskObject = {label: newTodo, done: false}
    const newTodoList = [...todoList,newTaskObject]
    await editListTask(newTodoList);
    getTodoList();
  }

  return (
    <div className="text-center">
      <div>
        <input placeholder="new task" onChange={(e)=> setNewTodo(e.target.value)}></input>
        <button onClick={addTask}>save</button>
      </div>
      <h1>hola</h1>
      
      {todoList.length ? todoList.map(todo => 
        <div key={todo.label}>
          <p>{todo.label}</p>
          {todo.done ? <span>check</span> : <span>no check</span>}
        </div>) : null}

    </div>
  )

};

export default Home;


//   const [todo, setTodo] = useState("");
//   const [tasks, setTasks] = useState([]);

// //   useEffect(() => {
// //     fetch("https://assets.breatheco.de/apis/fake/todos/user/pozo", {
// //       method: "GET",
// //       headers: {
// //         "Content-Type": "application/json"
// //       }
// //     })
// //       .then((resp) => {
// //         console.log(resp);
// //         console.log(resp.ok); // Dará true si está correcto
// //         console.log(resp.status);
// //         return resp.json();
// //       })
// //       .then((data) => {
// //         setTasks(data);
// //       })
// //       .catch((error) => {
// //         console.log(error);
// //       });
// //   }, []);

//   const addTask = (newTask) => {
//     setTasks([...tasks, newTask]);

    
//   };

//   const getToDoList = async() => {
//     try{
//         const response = await fetch (URL, {method:"GET"});
//         const data = await response.json();
//         return data
//     }catch(err){
//         console.log(err)
//     }
// }

// const addNewTask = async (task) => {
//   const data =
// }


  
//   const handleKey = (event) => {
//     if (event.key === "Enter" && todo !== "") {
//       const newTask = { label: todo, done: false };
//       addTask(newTask);
//       setTodo("");
//     }
//   };

//   return (
//     <div className="text-center">
//       <h1>hola</h1>
//       {tasks.map((task, index) => (
//         <p key={index}>{task.label}</p>
//       ))}
//       <input
//         className="form-control"
//         type="text"
//         placeholder="Add task"
//         value={todo}
//         onChange={(e) => setTodo(e.target.value)}
//         onKeyDown={handleKey}
//       />
//     </div>
//   );