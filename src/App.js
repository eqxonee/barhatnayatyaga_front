import React from "react";
import {Route, Routes} from "react-router-dom";

import MainPage from "./components/MainPage";
import AuthPage from "./components/account_manager_pages/AuthPage";
import RegisterPage from "./components/account_manager_pages/RegisterPage";
import NotAuthPage from "./components/optional/NotAuthPage";
import SecureLayoutAdmin from "./components/secure/secure_admin/SecureLayoutAdmin";
import MenuItem from "./components/secure_common_page/MenuItem";
import PriceList from "./components/secure_common_page/PriceList";
import Promo from "./components/secure_common_page/Promo";
import HomePageAdmin from "./components/secure/secure_admin/HomePageAdmin";
import BookTableUser from "./components/secure/secure_user/BookTableUser";
import SecureLayoutUser from "./components/secure/secure_user/SecureLayoutUser";
import MenuPageUser from "./components/secure/secure_user/MenuPageUser";
import MenuPageAdmin from "./components/secure/secure_admin/MenuPageAdmin";

const App =()=> {
  return (
  <Routes>
    <Route path="/" element={<MainPage/>}/>
    <Route path="*" element={<NotAuthPage/>}/>
    <Route path="/book" element={<BookTableUser/>}/>    {/*потом убрать*/}
    <Route path="/menu" element={<MenuPageUser/>}/>      {/*в секюрку*/}
    <Route path="/menua" element={<MenuPageAdmin/>}/>      {/*в секюрку*/}
    <Route path="/register" element={<RegisterPage/>}/>
    <Route path="/authenticate" element={<AuthPage/>}/>
    <Route path="/secure" element={<SecureLayoutAdmin/>}/> {/*user/admin poka wto*/}
        <Route path="home" element={<HomePageAdmin/>}/>
        <Route path="menu-item" element={<MenuItem/>}/>
        <Route path="price-list" element={<PriceList/>}/>
        <Route path="promo" element={<Promo/>}/>
        <Route path="book-table" element={<BookTableUser/>}/>


<Route/>


  </Routes>
  )
}

export default App;
