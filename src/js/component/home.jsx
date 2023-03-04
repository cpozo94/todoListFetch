import React, { useState } from "react";
import propTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";




const Home = (props) => {


const [todo, setTodo] = useState("");
const [todoList, setTodoList] = useState([]);


const Nuevo = (e) => {
	  setTodo(e.target.value)
};



const handleKey = (event) => {
	console.log("handleKey", event.key);
    if (event.key === 'Enter') {
		//copiamos el array anterior y añadimos un elemento nuevo, mirar el deatlle de añadir un array
      setTodoList([...todoList,todo]);
	  setTodo("")

    }
  };

  const deleteItem = () => {

  }




	return (
		<div className="container">
			<h1 className="title">Todo List</h1>
			<input className="form-control" type="text" placeholder="Add task" onChange={Nuevo} onKeyPress={handleKey} value={todo}  />
			<ul className="list-group">
			{todoList.map((item) => {
        return <li className="list-group-item"  >{item} <i> <FontAwesomeIcon icon={faTrash}/></i></li>;
      })}
			</ul>
			<p>{todoList.length} items left</p>
		</div>
		
	);
};

export default Home;
