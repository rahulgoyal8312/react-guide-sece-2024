import { useEffect, useState } from "react";

export default function App() {
  const [todo, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
      const data = await response.json();
      setTodos(data);
    }
    fetchTodos();
  }, []);

  return (
    <>
      <h1>HTTP CALLS</h1>
      <ul>
        {
          todo.map((todo, index) => {
            return <li key={index}>{todo.title}</li>
          })
        }
      </ul>
    </>
  );
}

