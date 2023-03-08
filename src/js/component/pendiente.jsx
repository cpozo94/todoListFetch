import React, { useState } from "react";
import propTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTasks, faTrash, faCheck } from "@fortawesome/free-solid-svg-icons";




const Pendiente = (props) => {
  

  return (
    <div className="col">
      <h1 className="title"> Pendiente</h1>
      <ul className="list-group">
        {props.todoList.map((item, i) => {
          //key sería el elemento único de cada lista, su identificador.
          return (
            <li className="list-group-item" key={i}>
              {item} <FontAwesomeIcon icon={faCheck} onClick={() =>
    tareaHecha(i)
} />

              <FontAwesomeIcon
                icon={faTrash}
                onClick={() =>
                  props.setTodoList(
                    props.todoList.filter(
                      (item, currentIndex) => i !== currentIndex
                    )
                  )
                }
              />
            </li>
          );
        })}
      </ul>
      <div className="items-left">
        <p>{props.todoList.length} list done</p>
      </div>
    </div>
  );
};

export default Pendiente;
