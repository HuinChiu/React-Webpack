import React from "react";
import {useState} from 'react';
import HomePage from "./component/HomePage";
import ListPage from "./component/ListPage";
const App=()=>{
    //確認是HomePage還是ListPage
    const [currentPage, setCurrentPage] = useState('HomePage');

    return(
        <>
        {/* <ListPage/> */}
        {currentPage === "HomePage"&& <HomePage setCurrentPage={setCurrentPage}></HomePage>}
        {currentPage === "ListPage"&& <ListPage setCurrentPage={setCurrentPage}></ListPage>}
        </>

    )
}

export default App;