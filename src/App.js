import React from "react";
import {Route, Routes} from "react-router-dom";

import MainPage from "./components/MainPage";
import AuthPage from "./components/account_manager_pages/AuthPage";
import RegisterPage from "./components/account_manager_pages/RegisterPage";
import NotAuthPage from "./components/optional/NotAuthPage";

function App() {
  return (
  <Routes>
    <Route path="/" element={<MainPage/>}/>
    <Route path="*" element={<NotAuthPage/>}/>
    <Route path="/register" element={<RegisterPage/>}/>
    <Route path="/authenticate" element={<AuthPage/>}/>
<Route/>


  </Routes>
  );
}

export default App;
