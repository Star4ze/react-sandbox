import React from 'react';
import { Route, Routes as RouterRoutes } from 'react-router-dom';
import IndexPage from "./../../components/Index/IndexPage";
import Home from "./../../components/Home/Home";
import Login from "./../Login/Login";
import Blogs from "./../Blog/Blogs";
import Error404 from "./../../components/404/Error404";

function Routes() {
    return (
        <RouterRoutes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path='/home/:index' element={<Blogs />} />

            <Route path="*" element={<Error404 />} />
        </RouterRoutes>
    );
}

export default Routes;
