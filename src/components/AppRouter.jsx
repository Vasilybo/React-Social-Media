import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import About from "../pages/About";
import Error from "../pages/Error";
import Login from "../pages/Login";
import {AuthContext} from "../context";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext)

    if(isLoading) {
        return <Loader/>
    }
    return (
        isAuth
        ? <Routes>
                <Route path="/posts" element={<Posts/>} exact/>
                <Route path="/posts/:id" element={<PostIdPage/>} exact/>
                <Route path="/about" element={<About/>} exact/>
                <Route path="/error" element={<Error/>} exact/>
                <Route path="*" element={<Navigate to ="/posts" />}/>
                {/*<Route path="*" element={<Navigate to ="/error" />}/>*/}
            </Routes>
            : <Routes>
                <Route path="/login" element={<Login/>} exact/>
                <Route path="*" element={<Navigate to ="/login" />}/>
            </Routes>
    );
};

export default AppRouter;