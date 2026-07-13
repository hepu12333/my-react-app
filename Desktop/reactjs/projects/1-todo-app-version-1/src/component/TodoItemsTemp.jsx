import ToDoRow1 from "./ToDoRow1";

const TodoItems = ({ todoItems, onDeleteItem }) => {
  return (
    <div className="items-container">
      {todoItems.map((item) => (
        <ToDoRow1
          todoName={item.name}
          todoDate={item.dueDate}
          onDeleteItem={onDeleteItem}
        ></ToDoRow1>
      ))}
    </div>
  );
};
export default TodoItems;
