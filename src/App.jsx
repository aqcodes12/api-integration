import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/home/HomePage";
import PostsPage from "./pages/posts/PostsPage";
import PostDetails from "./pages/posts/PostDetails";
import LoginPage from "./pages/onboarding/LoginPage";

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
        </Routes>
      </Router>
    </>
  );
}

export default App;
