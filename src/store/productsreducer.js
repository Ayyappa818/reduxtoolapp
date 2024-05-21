import product from "./products"
const initialstate={
    products:product,
    cart:[]
}
function productsReducer(state=initialstate,action){
    if(action.type==='ADDTOCART'){
        return {...state,cart:[...state.cart,action.payload]}
    }
    return state
}
export default productsReducer