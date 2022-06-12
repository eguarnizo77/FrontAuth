import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import AuthContext from "../context/Auth";
import UserContext from "../context/User";

import useAuth from "../hooks/useAuth";
import useUser from "../hooks/useUser";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Profile from "../pages/Profile";
import NotFound from "../pages/Home";

function App() {
  const stateAuth = useAuth();
  const stateUser = useUser();
  return (
    <AuthContext.Provider value={stateAuth}>
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
    </AuthContext.Provider>
  );
}

export default App;
