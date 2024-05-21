const initialstate ={
    todos:['Ayyappa','institute fee','hostel fee']
}
function TodolistReducer(state=initialstate,action){
    if(action.type==="ADDTODO"){
        return {...state,todos:[...state.todos,action.payload]}
    }
    return state
}
export default TodolistReducer  