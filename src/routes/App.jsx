import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Sign from "../pages/Sign";
import Signup from "../pages/Signup";
import Profile from "../pages/Home";
import NotFound from "../pages/Home";
import Layout from "../layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sign" element={<Sign />} />
        <Route path="signup" element={<Signup />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}

export default App;
