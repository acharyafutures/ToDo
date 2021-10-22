import React from "react";
import "./App.css";

function Todo({ todo,index,completeTodo,removeTodo }) {
  return (
<div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(index)}>x</button>
      </div>
    </div>
  );
};

function Todoform({addtodo}){
    const[value,setValue]=React.useState("");

    const handleSubmit=e=>{
        e.preventDefault();
        if(!value) return;
        addtodo(value);
        setValue("");
    };
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" className="input" 
            value={value}
            onChange={e=>setValue(e.target.value)}
            />
        </form>
    );
}

function App() {
    const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
      };
    const completeTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = true;
        setTodos(newTodos);
      };
    const addtodo=text=>{
        const newTodos=[...todos,{text}];
        setTodos(newTodos);
    };
    const [todos, setTodos] = React.useState([
    { text: "Learn about React" ,
    isCompleted: false},
    { text: "Meet friend for lunch",
    isCompleted: false },
    { text: "Build really cool todo app",
    isCompleted: false }
  ]);

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
        completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <Todoform addtodo={addtodo} />
      </div>
    </div>
  );
}

export default App;
 