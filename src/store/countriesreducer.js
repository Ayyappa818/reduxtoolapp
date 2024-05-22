import Countries from "../countries"

const initialstate = {
    Countries:[],
    isLoading:true
}
const CountriesReducer=(state=initialstate,action)=>{
    if(action.type=='LOADCOUNTRIES'){
        return {...state,Countries:action.payload,isLoading:false}
    }
    if(action.type==='UPDATELOADING'){
        return {...state,isLoading:action.payload}
    }
    return state
}
export default CountriesReducer