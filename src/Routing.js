import React from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from "./components/MainPage";
import NotAuthPage from "./components/optional/NotAuthPage";
import RegisterPage from "./components/account_manager_pages/RegisterPage";
import AuthPage from "./components/account_manager_pages/AuthPage";
import SecureLayoutAdmin from "./components/secure/secure_admin/SecureLayoutAdmin";
import HomePageAdmin from "./components/secure/secure_admin/HomePageAdmin";
import MenuItem from "./components/secure_common_page/MenuItem";
import PriceList from "./components/secure_common_page/PriceList";
import Promo from "./components/secure_common_page/Promo";
import BookTableAdmin from "./components/secure/secure_admin/BookTableAdmin";

const Routing = () => {
    if (user.role === admin){
    return (
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="*" element={<NotAuthPage/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="/authenticate" element={<AuthPage/>}/>
            <Route path="/secure" element={<SecureLayoutAdmin/>}/>
                <Route path="home" element={<HomePageAdmin/>}/>
                <Route path="menu-item" element={<MenuItem/>}/>
                <Route path="price-list" element={<PriceList/>}/>
                <Route path="promo" element={<Promo/>}/>
                <Route path="book-table" element={<BookTableAdmin/>}/>

            <Route/>
        </Routes>
    );
}else {
    return (
        rout
    )
    }
}

export default Routing;