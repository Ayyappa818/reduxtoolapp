import React from "react";
import { connect } from "react-redux";
function Counter(props){
    console.log(props)
    return (
        <div className="border border-2 border-danger p-2 m-2">
            <h1>Counter:{props.count}</h1>
            <button style={{backgroundColor:"red"}} onClick={()=>{props.inc()}}>Increment</button> 
            <button style={{backgroundColor:"green"}} onClick={()=>{props.dec()}}>Decrement</button> 
        </div>
    )
}
export default  connect(function(state){
    return state.CounterReducer
},function(dispatch){
    return {
        inc:()=>{dispatch({type:"INC"})},
        dec:()=>{dispatch({type:"DEC"})}
    }
})(Counter)