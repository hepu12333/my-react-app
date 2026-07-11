import AppName from "./component/AppName";
import AddToDo from "./component/AddToDo"
import TodoItems from "./component/todoitems";
import "./App.css";
function App() {

const todoItems=[
  {
  name:"go to dairy",
  dueDate:"4/10/2023",
},

{
  name:"go to college",
  dueDate:"4/10/2023",
},
{
  name:"go to dairy",
  dueDate:"4/10/2023",
}
];



  return (
    <center className="todo-container">
      <AppName />
      <AddToDo />
<TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
