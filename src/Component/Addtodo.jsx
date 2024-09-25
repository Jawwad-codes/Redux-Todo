import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, setTodos } from "../Reducers/todoSlice";

const Addtodo = () => {
  const [Input, setInput] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("Todos"));
    if (savedTodos && savedTodos.length > 0) {
      dispatch(setTodos(savedTodos));
    }
  }, [dispatch]);
  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("Todos", JSON.stringify(todos));
    }
  }, [todos]);

  const handleaddTodo = (e) => {
    e.preventDefault();
    const checktodos = todos.find((item) => item.text === Input);

    if (!checktodos && Input.trim() !== "") {
      dispatch(addTodo(Input)); // Dispatch addTodo action to add the new todo
      setInput(""); // Clear the input after adding
    } else {
      alert("This todo is already added or the input is empty.");
    }
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg mt-6">
      <form onSubmit={handleaddTodo} className="space-y-4">
        <div className="flex flex-col">
          <label
            htmlFor="name"
            className="text-lg font-medium text-gray-700 mb-2"
          >
            Todo Name:
          </label>
          <input
            type="text"
            value={Input}
            id="name"
            name="name"
            className="px-4 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-400 outline-none"
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default Addtodo;
