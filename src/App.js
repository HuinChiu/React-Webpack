import React from "react";
import {useState} from 'react';
import { Routes, Route } from "react-router-dom";
import HomePage from "./component/HomePage";
import ListPage from "./component/ListPage";

const App=()=>{
    //確認是HomePage還是ListPage
    const [currentPage, setCurrentPage] = useState('HomePage');

    return(
        <>
        <Routes>
            <Route path="/" element={<HomePage></HomePage>}></Route>
            <Route path="/list" element={<ListPage></ListPage>}></Route>
        </Routes>
        </>


    )
}

export default App;