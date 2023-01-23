import "../ListPage.css"
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
    addDoc,
    getDoc,
    getDocs,
    collection,
    deleteDoc,
    doc,
    onSnapshot
} from "firebase/firestore";
import {db} from "./firestore";

const todoListCollection=collection(db, "TodoList");

const TodoList = ({msgList,deleteTask}) => {

    console.log(msgList)
    return(
            <div>
                {msgList.map((item,index)=>(
                    <div className="msg-item" key={item.id}>
                    <div className="msg-item__msg">{item.msg}</div>
                    <button className="msg-item__btn" onClick={() => deleteTask(item.id,index)} >刪除</button>
                    </div>
                ))}
            </div>
    )

};
//建立表單
const Control = ({onAdd, msgList}) => { //props.onAdd 傳入control

    const [value, setValue] = useState('');//初始化input內是空的

    const onChange = (e) => {
        setValue(e.target.value);//獲取input內的值放進value
    }

    // const addItem = (e) => {
    //     onAdd(value);//將value傳到setlist
    //     setValue('');//將input清空
    // }

    const AddTodo=async ({e})=>{
        try {
            // onAdd(value);//將value傳到setlist
            // setValue('');//將input清空
            const docRef=await addDoc(todoListCollection, {
                msg:value
            });
            const record={"id":docRef.id,"msg":value}
            onAdd(record)
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


function ListPage({}){
    const [msgList, setmsgList] = useState([]);
    async function querySnapshot(){
        const query=await getDocs(todoListCollection);
        query.forEach((doc)=>{
            setmsgList(function(msgList){
                return[
                    ...msgList,{"id":doc.id,"msg":doc.data().msg}
                ]
            })
            })
    }
    useEffect(() => {
        querySnapshot();
      }, []);

    const deleteTask=async(id, index)=>{
        await deleteDoc(doc(db,"TodoList",id));
        let newList=msgList.splice(index,1)
        setmsgList([...msgList])
        }
    const onAdd =(value)=>{
        setmsgList([...msgList,value]);
        console.log(msgList)
    }


    return(
        <>
            <Control  onAdd={onAdd} msgList={msgList}></Control>
            <hr></hr>
            <div className="msg">
                <TodoList msgList={msgList} querySnapshot={querySnapshot} deleteTask={deleteTask}></TodoList>
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



