import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});

  const fetchPost = async () => {
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      console.log(res.data);
      setPost(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPost();
  }, [id]);

  return (
    <>
      <div className="text-center">
        <p>{id}</p>
        <p>{post.userId}</p>
        <p>{post.title}</p>
        <p>{post.body}</p>
      </div>
    </>
  );
};

export default PostDetails;
