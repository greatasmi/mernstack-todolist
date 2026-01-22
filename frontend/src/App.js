// App.js
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const res = await axios.get("http://localhost:5000/api/todos");
    setTodos(res.data);
  };

  const addTodo = async () => {
    await axios.post("http://localhost:5000/api/todos", { title });
    setTitle("");
    fetchTodos();
  };

  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:5000/api/todos/${id}`);
    fetchTodos();
  };

  return (
    <div>
      <h1>MERN Todo App</h1>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add Todo"
      />
      <button onClick={addTodo}>Add</button>

      {todos.map(todo => (
        <div key={todo._id}>
          <span>{todo.title}</span>
          <button onClick={() => deleteTodo(todo._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default App;
