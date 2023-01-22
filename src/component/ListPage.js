import "../ListPage.css"
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
    addDoc,
    getDoc,
    getDocs,
    collection,
} from "firebase/firestore";
import {db} from "./firestore";

const todoListCollection=collection(db, "TodoList");

// const TodoList = ({deleteTask,list,querySnapshot}) => (
//     <div>
//     {
        
//         list.map((item, index) => {
//             return (
//                 <div className="msg-item" key={index}>
//                     <div className="msg-item__msg">{item}</div>
//                     <button className="msg-item__btn" onClick={() => deleteTask(item)} >刪除</button>
//                 </div>


//             );
//         })
//     }
//     </div>
// );
const TodoList = ({deleteTask,list,querySnapshot}) => (
    const query= querySnapshot()

    query.forEach(doc => {
        console.log(doc.id, doc.data());
        return (
            <div className="msg-item" key={doc.id}>
                <div className="msg-item__msg">{doc.data()}</div>
                <button className="msg-item__btn" onClick={() => deleteTask(item)} >刪除</button>
            </div>


        );
    })

);

//建立表單
const Control = ({ onAdd }) => { //props.onAdd 傳入control

    const [value, setValue] = useState('');//初始化input內是空的

    const onChange = (e) => {
        setValue(e.target.value);//獲取input內的值放進value
    }

    const AddTodo=async ({e})=>{
        try {
            await addDoc(todoListCollection, {
                msg:value
            });
            setValue('');//將input清空
          } catch (err) {
            console.error("Error: ", err);
          }
    }

    return (
        <div className="input">
            <input className="input-item" value={value} onChange={onChange}/>
            <button className=".start-btn" onClick={AddTodo}>新增紀錄</button>
        </div>
    );
};


function ListPage({ setCurrentPage }){
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
    async function querySnapshot(){
            const query=await getDocs(todoListCollection);
            console.log(query)
            query.forEach(doc => {
                console.log(doc.id, doc.data());
              });
            return query
    }


    return(
        <>
            <Control onAdd={onAdd}></Control>
            <hr></hr>
            <div className="msg">
                <TodoList list={list} deleteTask={deleteTask} querySnapshot={querySnapshot}></TodoList>
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



