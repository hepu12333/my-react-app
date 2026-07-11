import ToDoRow1 from "./ToDoRow1";

const TodoItems =({ todoItems }) => {
    return (
    <div className="items-container">
    {todoItems.map(item => <ToDoRow1 todoName={item.name} todoDate={item.dueDate}></ToDoRow1>
)}

    </div>
    );
};
export default TodoItems;