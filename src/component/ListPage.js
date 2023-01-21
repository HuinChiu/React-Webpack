import "../ListPage.css"
import React from "react";
import { useState } from "react";
import { Routes,Route,Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import HomePage from "./HomePage";


const TodoList = ({ list,deleteTask }) => (

    <div>
    {
        list.map((item, index) => {
            return (
                <div className="msg-item" key={index}>
                    <div className="msg-item__msg">{item}</div>
                    <button className="msg-item__btn" onClick={() => deleteTask(item)} >刪除</button>
                </div>


            );
        })
    }
    </div>
);
//建立表單
const Control = ({ onAdd }) => { //props.onAdd 傳入control
    const [value, setValue] = useState('');//初始化input內是空的

    const onChange = (e) => {
        setValue(e.target.value);//獲取input內的值放進value
    }
    const addItem = (e) => {
        onAdd(value);//將value傳到setlist
        setValue('');//將input清空
    }

    return (
        <div className="input">
            <input className="input-item" value={value} onChange={onChange}/>
            <button className=".start-btn" onClick={addItem}>新增紀錄</button>
        </div>
    );
};


function ListPage({ setCurrentPage }){
    // {* todolist目前無任何資料*}
    // const navigate=useNavigate();
    const [list, setList] = useState([]);

    const onAdd =(value)=>{
        setList([...list,value]);
    }
    const deleteTask=(item)=>{
        let index=list.indexOf(item)
        if(index > -1){
            let newList=list.splice(index,1)
            console.log(list)
            setList([...list])
        }

    }
    return(
        <>
            <Control onAdd={onAdd}></Control>
            <hr></hr>
            <div className="msg">
                <TodoList list={list} deleteTask={deleteTask}></TodoList>
            </div>
            <div className="back-btn">
                <Link to ="/">
                <button className="start-btn">返回首頁</button>
                </Link>
            </div>
        </>
    );
}

export default ListPage;



