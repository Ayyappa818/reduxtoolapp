import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { connect } from "react-redux";
import product from "./store/products";
import { addtocart } from "./store/Actions";
function Products(props){
    console.log(props)
    return (
        <div className="border border-2 border-primary m-2 p-2">
            <h1>Products</h1>
            <ul className="d-flex flex-wrap">
                {
                    props.products.map((p)=>{
                        return <li className="w-25 p-5 d-flex flex-column justify-content-between">
                            <p>{p.title.slice(0,20)}</p>
                            <img src={p.image} alt="" className="w-100" />
                            <h3>{p.price}</h3>
                            <button className="btn btn-success" onClick={()=>{props.addtocart(p)}}>Add To Cart</button>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}
export default connect(function(state){
    return state.productsReducer
},function(dispatch){
    return {
        addtocart:(products)=>{
            dispatch(addtocart(products))
        }
    }
})(Products)
