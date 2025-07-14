import axios from "axios";
import React, { useState } from "react";

const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const [completed, setCompleted] = useState(false);

  const addTodo = async (e) => {
    e.preventDefault();

    const reqBody = {
      todo: todo,
      completed: completed,
      userId: 5,
    };

    try {
      const res = await axios.post("https://dummyjson.com/todos/add", reqBody);

      if (res.status == 201) {
        alert("todo added successfully");
      } else {
        alert("something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="p-5">
        <form
          onSubmit={addTodo}
          className="grid grid-cols-1 place-items-center gap-5  max-w-md mx-auto p-5"
        >
          <div>
            <label
              for="todo"
              class="block mb-2 text-sm font-medium text-gray-900"
            >
              Todo
            </label>
            <input
              type="text"
              id="todo"
              onChange={(e) => setTodo(e.target.value)}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="add your todo here"
              required
            />
          </div>
          <div>
            <label class="inline-flex items-center me-5 cursor-pointer">
              <input
                type="checkbox"
                checked={completed}
                onChange={() => setCompleted(!completed)}
                className="sr-only peer"
              />
              <div class="relative w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-4 peer-focus:ring-green-300  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-green-600 "></div>
              <span class="ms-3 text-sm font-medium text-gray-900 ">
                {completed ? "Completed" : "Not Completed"}
              </span>
            </label>
          </div>
          <div>
            <button
              type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Default
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddTodo;
