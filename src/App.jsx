import React from "react";
import { Todo } from "./Component/Todo";
import Addtodo from "./Component/Addtodo";

const App = () => {
  return (
    <div className="min-h-screen w-full bg-gray-50 flex flex-col items-center justify-center py-10 px-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
        Redux Todo
      </h1>
      <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-lg">
        <Addtodo />
        <Todo />
      </div>
    </div>
  );
};

export default App;
