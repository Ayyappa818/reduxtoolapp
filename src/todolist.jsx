import React, { useState } from "react";
import { connect } from "react-redux";
import { addtodo } from "./store/Actions";
function Todolist(props){
    console.log(props)

    var [newtodo,setNewtodo]=useState("")
    return (
        <div className="border border-2 border-secondary m-2 p-2">
            <h1>Todolist</h1>
            <input type="text" onChange={(e)=>{setNewtodo(e.target.value)}}/>
            <button className="btn btn-warning" onClick={()=>{props.addtodo(newtodo)}}>Add Todo</button>
            <ul>
                {
                    props.todos.map((todo)=>{
                        return <li>{todo}</li>
                    })
                }
            </ul>
        </div>
    )
}
export default  connect(function(state){
    return state.TodolistReducer
},function(dispatch){
    return {
        addtodo:(newtodo)=>{dispatch(addtodo(newtodo))}
    }
})(Todolist)