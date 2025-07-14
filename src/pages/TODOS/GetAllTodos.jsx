import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const GetAllTodos = () => {
  const navigate = useNavigate();
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/todos");
      setTodos(res.data.todos);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  const deleteTodo = async (id) => {
    try {
      const res = await axios.delete(`https://dummyjson.com/todos/${id}`);

      if (res.status == 200) {
        alert("Todo deleted successfully");
        getTodos();
      } else {
        alert("something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex justify-end items-center p-5">
        <button
          type="button"
          onClick={() => navigate("/add-todo")}
          className="bg-yellow-400 px-4 py-2 text-white rounded-xl"
        >
          Add Todo
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5">
        {todos.map((todo) => {
          return (
            <div
              key={todo.id}
              className="bg-cyan-100 p-5 cursor-pointer"
              //   onClick={() => navigate(`/todo/${todo.id}`)}
            >
              <div className="">
                <p>{todo?.id}</p>
                <p>{todo?.todo}</p>
                <p>{todo?.completed}</p>
                <p>{todo?.userId}</p>
                <div>
                  <button
                    type="button"
                    onClick={() => deleteTodo(todo.id)}
                    class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  >
                    Red
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default GetAllTodos;
