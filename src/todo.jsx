import { useState, useEffect } from "react";

export default function Todo() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(() => JSON.parse(localStorage.getItem("todos")) || []);
  const [currendIndex, setCurrentIndex] = useState(null);


  useEffect(() => {
    if(currendIndex !== null) {
      setInput(todos[currendIndex].label);
    }
  },[currendIndex])

  function handleTodo() {
    if (input === "") {
      return;
    }
    if(currendIndex === null){
      let newTodos = [...todos, { label: input, isDone: false }];
      setTodos(newTodos);
      localStorage.setItem("todos", JSON.stringify(newTodos));
      setInput("");
    } else{
      let newTodos = [...todos];
      newTodos[currendIndex].label = input;
      setTodos(newTodos);
      localStorage.setItem("todos", JSON.stringify(newTodos));
      setInput("");
      setCurrentIndex(null);
    }
  }

  const handleDelete = (index) => {
    let newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    console.log(todos)
    localStorage.setItem("todos", JSON.stringify(newTodos))
  }

  const handleComplete = (index) => {
    let newTodos = [...todos];
    newTodos[index].isDone = !newTodos[index].isDone;
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  }

  return (
    <>
      <div className="p-10 w-full space-x-2 max-w-3xl flex ">
        <input
          onChange={(e) => setInput(e.target.value)}
          className="border-2 py-2 px-4 w-full"
          value={input}
          type="text"
        />
        <button onClick={handleTodo} className="px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600">
          {currendIndex === null ? "Ajouter" : "Modifier"}
        </button>
      </div>

      <div className="px-10 space-y-2 max-w-3xl">
        {todos.map((todo, index) => {
          return (
            <div
              key={index}
              className="flex items-center justify-between max-w-3xl space-x-2 my-2 px-4 py-2 border-2 rounded-md shadow-md "
            >
              <input onChange={() => handleComplete(index)} className="w-8 h-8 " type="checkbox" name="done" id="" />
              <label className={`text-xl font-semibold ${todo.isDone ? 'line-through': ''}`} htmlFor="done">
                {todo.label}
              </label>
              <div className="space-x-2">
                <button onClick={function () {
                  setCurrentIndex(index);
                }} className="bg-yellow-300 hover:bg-yellow-500/50 px-2 py-1 rounded-md shadow">
                  modifier
                </button>
                <button onClick={handleDelete} className="bg-red-300 hover:bg-red-500 hover:text-white px-2 py-1 rounded-md shadow">
                  Supprimer
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
