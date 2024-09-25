import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../Reducers/todoSlice";
import { FaTrash, FaEdit } from "react-icons/fa";
export const Todo = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(removeTodo(id));
  };
  const handleUpdate = (id, newText) => {
    dispatch(updateTodo({ id, text: newText }));
  };
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Todo List</h2>
      {todos.length === 0 ? (
        <p>No todos available.</p>
      ) : (
        <ul className="space-y-4">
          {todos.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm hover:bg-gray-50"
            >
              <span className="text-lg text-gray-700">{item.text}</span>
              <div className="space-x-2 flex align-middle justify-center">
                <button
                  className="px-2 py-2 bg-red-500 text-white rounded hover:bg-red-600 flex items-center"
                  onClick={() => handleRemove(item.id)}
                >
                  <FaTrash className="mr-2" />
                </button>
                <button
                  className="px-2 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center"
                  onClick={() => {
                    const newText = prompt("Update todo:", item.text);
                    if (newText) {
                      handleUpdate(item.id, newText);
                    }
                  }}
                >
                  <FaEdit className="mr-2" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
