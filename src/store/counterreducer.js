const initialstate ={
    count:0,
}
function CounterReducer(state=initialstate,action){
    if(action.type==="INC"){
        return {...state,count:state.count+1}
    }
    
    if(action.type==="DEC"){
        return {...state,count:state.count-1}
    }

    return state
}
export default CounterReducer