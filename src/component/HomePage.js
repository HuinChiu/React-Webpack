import "../index.css"
import React from "react";
import ListPage from "./ListPage";
import { Routes,Route,Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function HomePage(props) {
  const {setCurrentPage} =props;
  // const navigate=useNavigate();
  return (
    <>
      <div className="title">
        <div className="title-item">React專案練習</div>
      </div>
      <div className="header">
        <div className="header-item">歡迎光臨我的頁面</div>
      </div>
      <div className="main">
        <Link to ="/list">
        <button className="start-btn">點此開始</button>

        </Link>
      </div>
    </>

  );
}

export default HomePage;