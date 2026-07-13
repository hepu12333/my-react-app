import AppName from "./component/AppName";
import AddToDo from "./component/AddToDo";
import TodoItems from "./component/TodoItemsTemp";
import { useState } from "react";
import "./App.css";
function App() {

const initialTodoItems=[
];

const [todoItems, setTodoItems ] = useState(initialTodoItems);

const  handleNewItem = (itemName, itemDueDate)=>{
  console.log(`new item added: ${itemName} Date:${itemDueDate}`);
  setTodoItems(prevItems => [
    ...prevItems,
    { name: itemName, dueDate: itemDueDate }
  ]);
}

const handleDeleteItem = (todoItemName) => {
  const newTodoItems = todoItems.filter(item => item.name !== todoItemName);
  setTodoItems(newTodoItems);
  console.log(`Delete item: ${todoItemName}`);
};

  return (
    <center className="todo-container">
      <AppName />
      <AddToDo onNewItem={handleNewItem} />
<TodoItems todoItems={todoItems} onDeleteItem={handleDeleteItem}></TodoItems>
    </center>
  );
}

export default App;
