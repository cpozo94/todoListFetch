import React, { useState } from "react";
import propTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTasks, faTrash, faCheck } from "@fortawesome/free-solid-svg-icons";


const Tarea = (props) =>{

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

  const tareaHecha = ()=> {
	
	props.setTodoList(
		props.todoList.filter(
		  (item, currentIndex) => i == currentIndex
		)
	  )

  }


return (
<div className="col">
			<h1 className="title"> Hecho</h1>
			<ul className="list-group">
			{props.todoList.map((item,i) => {
				//key sería el elemento único de cada lista, su identificador.
				return <li className="list-group-item" key={i}  >{item}  </li>;
                
      })}       
			</ul>
			<div className="items-left">
			<p>{todoList.length} list done</p>
			</div>
		</div>
)
};

export default Tarea;