import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import UserContext from "../context/user";
import useAuth from "../hooks/useAuth";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Profile from "../pages/Profile";
import NotFound from "../pages/Home";

function App() {
  const stateUser = useAuth();
  return (
    <UserContext.Provider value={stateUser}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
