import { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const res = await axios.get("http://localhost:5000/api/todos");
    setTodos(res.data);
  };

  const addTodo = async () => {
    if (!text.trim()) return;
    const res = await axios.post("http://localhost:5000/api/todos", { text });
    setTodos([...todos, res.data]);
    setText("");
  };

  const toggleTodo = async (id) => {
    const res = await axios.put(`http://localhost:5000/api/todos/${id}`);
    setTodos(todos.map((t) => (t.id === id ? res.data : t)));
  };

  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:5000/api/todos/${id}`);
    setTodos(todos.filter((t) => t.id !== id));
  };

  return (
    <div style={{ maxWidth: "400px", margin: "20px auto", textAlign: "center", alignItems:"center"}}>
      <h2>Todo App</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a todo"
      />
      <button onClick={addTodo}>Add</button>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              margin: "10px 0",
            }}
          >
            <span onClick={() => toggleTodo(todo.id)} style={{ cursor: "pointer" }}>
              {todo.text}
            </span>
            <button
              onClick={() => deleteTodo(todo.id)}
              style={{ marginLeft: "10px" }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
