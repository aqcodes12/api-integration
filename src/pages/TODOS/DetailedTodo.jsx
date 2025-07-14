import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailedTodo = () => {
  const { id } = useParams();
  const [todo, setTodo] = useState({});

  const getTodo = async () => {
    try {
      const res = await axios.get(`https://dummyjson.com/todos/${id}`);
      setTodo(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTodo();
  }, [id]);

  return (
    <>
      <div className="grid place-items-center p-5 min-h-screen w-full">
        <div className="bg-cyan-100 p-5 ">
          <p>{todo?.id}</p>
          <p>{todo?.todo}</p>
          <p>{todo?.completed}</p>
          <p>{todo?.userId}</p>
        </div>
      </div>
    </>
  );
};

export default DetailedTodo;
