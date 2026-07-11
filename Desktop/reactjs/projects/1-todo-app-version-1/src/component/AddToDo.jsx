import { RiAddCircleFill } from "react-icons/ri";
import { useState } from "react";
import "./AddToDo.css";

function AddToDo({onNewItem}) {

  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const handleTodoNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDueDateChange = (event) => {
    setDueDate(event.target.value);
  };


  return (
    <div>
    <div className="row kg-row">
          <div className="col-6">
            <input
              type="text"
              placeholder="Enter Todo Here" 
              className="border border-gray-400 rounded px-2 py-1"
              onChange={handleTodoNameChange}
            />
          </div>
          <div className="col-4">
            <input
              type="date"
              className="border border-gray-400 rounded px-2 py-1"
              onChange={handleDueDateChange}
            />
          </div>

          <div className="col-2">
            <button type="button" className="btn btn-success kg-button" 
            onClick={() => onNewItem(todoName, dueDate)}>
            
              <RiAddCircleFill />

            </button>
          </div>
        </div>
    </div>
  )
}

export default AddToDo