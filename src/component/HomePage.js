import "../index.css"
import React from "react";
import ListPage from "./ListPage";

function HomePage(props) {
  const {setCurrentPage} =props;
  return (
    <>
      <div className="title">
        <div className="title-item">React專案練習</div>
      </div>
      <div className="header">
        <div className="header-item">歡迎光臨我的頁面</div>
      </div>
      <div className="main">
        <button className="start-btn" onClick={()=> setCurrentPage("ListPage")}>點此開始</button>
      </div>
    </>

  );
}

export default HomePage;