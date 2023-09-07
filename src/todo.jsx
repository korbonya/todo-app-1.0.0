import { useState } from "react";

export default function Todo() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  function handleTodo() {
    if (input === "") {
      return;
    }
    let newTodos = [...todos, { label: input, isDone: false }];
    setTodos(newTodos);
    console.log(todos);
    setInput("");
  }

  return (
    <>
      <div className="p-10">
        <input
          onChange={(e) => setInput(e.target.value)}
          className="border-2 py-2 px-4"
          value={input}
          type="text"
        />
        <button onClick={handleTodo} className="px-4 py-2 bg-blue-300">
          Ajouter
        </button>
      </div>

      <div className="px-10 space-y-2">
        {todos.map((todo, index) => {
         return <div key={index} className="space-x-2">
            <input
              className="border-2 bg-slate-200 "
              type="checkbox"
              name="done"
              id=""
            />
            <label htmlFor="done">{todo.label}</label>
            <button className="bg-yellow-300">modifier</button>
            <button className="bg-red-300">Supprimer</button>
          </div>;
        })}
      </div>
    </>
  );
}
