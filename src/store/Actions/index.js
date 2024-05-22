import axios from "axios"
export function addtodo(newtodo){
    return {type:"ADDTODO",payload:newtodo}
}

export function addtocart(products){
    return {type:"ADDTOCART",payload:products}
}

export function inc(){
    return {type:"INC"}
}

export function dec(){
    return {type:"DEC"}
}

export function getAllcountries(){
    return (dispatch)=>{
        axios.get("https://restcountries.com/v3.1/all").then((res)=>{
            return dispatch({type:"LOADCOUNTRIES",payload:res.data})
        })
    }
}