import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Signin from "./screens/Signin";
import Blogs from "./screens/auth/Blogs";
import Create from "./screens/auth/Create";
import AuthProvider from "./context/AuthContext";
export default function App() {
  return (
    <AuthProvider>
      <Router>
        {/* Guest users */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
        {/* Auth users */}
        <Routes>
          <Route path="/blogs/dashboard" element={<Blogs />} />
          <Route path="/blogs/workspace/create" element={<Create />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
