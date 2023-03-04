import React, { useState } from "react";
import propTypes from "prop-types";




const Home = (props) => {


const [todo, setTodo] = useState("");
const [todoList, setTodoList] = useState([]);

const Nuevo = (e) => {
	//setTodo(e.target.value)
	  setTodo(e.target.value)
};



const handleKey = (event) => {
    if (event.key === 'Enter') {
      setTodoList([...todoList,todo]);
	  setTodo("")

	  
    }
  };



	return (
		<div className="container">
			<h1>Todo List</h1>
			<input type="text" placeholder="Enter todo" onChange={Nuevo} onKeyPress={handleKey} value={todo}  />
			<ul>
			{todoList.map((item) => {
        return <li>{item} <i className="fa-trash"></i></li>;
      })}
			</ul>
			<p>{todoList.length} items left</p>
		</div>
		
	);
};

export default Home;
