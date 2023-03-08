import React, { useState } from "react";
import propTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTasks, faTrash, faCheck } from "@fortawesome/free-solid-svg-icons";
import Tarea from "./tarea.jsx";
import Pendiente from "./pendiente.jsx";




const Home = () => {


const [todo, setTodo] = useState("");
const [todoList, setTodoList] = useState([]);


const Nuevo = (e) => {
	
	  setTodo(e.target.value)
};



const handleKey = (event) => {
	if (event.key === 'Enter' && event.target.value !== "") {
	  // Si la tecla presionada es 'Enter' y el valor del campo de entrada no está vacío.
	  // Se agrega el nuevo elemento al final de todoList.
	  setTodoList([...todoList, todo]);
	  //y se limpia el campo de entrada.
	  setTodo('');
	}
  };
  

	return (
		
		<div className="container text-center">
			<div className="row">
			<div className="col">
			<h1 className="title">Todo List</h1>
			<input className="form-control" type="text" placeholder="Add task" onChange={Nuevo} onKeyPress={handleKey} value={todo}  />
			
		</div>

		<Pendiente todoList={todoList} setTodoList={setTodoList}/>
		<Tarea todoList={todoList} setTodoList={setTodoList}/>
		

		</div>

		</div>
		
	);
};

export default Home;


//hacer nueva lista de tareas que se pueda marcar como hecha.
//guardarlo como un ojbeto, en el setTasklist, generas un objeto {id: }}
//mirar hacer otro elemento para borrar el elemento de la tarea, 
//crear un estado (un array), cuando se meta 
