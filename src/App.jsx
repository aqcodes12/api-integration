import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/home/HomePage";
import PostsPage from "./pages/posts/PostsPage";
import PostDetails from "./pages/posts/PostDetails";
import LoginPage from "./pages/onboarding/LoginPage";
import GetAllTodos from "./pages/TODOS/GetAllTodos";
import DetailedTodo from "./pages/TODOS/DetailedTodo";
import AddTodo from "./pages/TODOS/AddTodo";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/post/:id" element={<PostDetails />} />
          {/* TODOS */}
          <Route path="/all-todos" element={<GetAllTodos />} />
          <Route path="/todo/:id" element={<DetailedTodo />} />
          <Route path="/add-todo" element={<AddTodo />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
