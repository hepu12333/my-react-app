import { TiDelete } from "react-icons/ti";

function ToDoRow1({ todoName, todoDate, onDeleteItem }) {

  return (
    <div> 

        <div className="row kg-row">
          <div className="col-6">{todoName}</div>
          <div className="col-4">{todoDate}</div>

          <div className="col-2">
            <button type="button" className="btn btn-danger kg-button"
            onClick={() => onDeleteItem(todoName)}>
             <TiDelete />
            </button>
          </div>
        </div>

      
      </div>
  )
}

export default ToDoRow1;