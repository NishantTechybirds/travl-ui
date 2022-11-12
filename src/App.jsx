/** @format */

import { useState } from "react";
import logo from "./logo.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Dashboard from "./pages/Dashboard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage></LoginPage>}></Route>
        <Route path="signup" element={<SignupPage></SignupPage>}></Route>
        <Route path="dashboard" element={<Dashboard></Dashboard>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
