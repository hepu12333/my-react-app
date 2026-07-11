
function AddToDo() {
  return (
    <div>
    <div className="row kg-row">
          <div className="col-6">
            <input
              type="text"
              placeholder="Enter Todo Here"
              className="border border-gray-400 rounded px-2 py-1"
            />
          </div>
          <div className="col-4">
            <input
              type="date"
              className="border border-gray-400 rounded px-2 py-1"
            />
          </div>

          <div className="col-2">
            <button type="button" className="btn btn-success kg-button">
              Add
            </button>
          </div>
        </div>
    </div>
  )
}

export default AddToDo