import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllcountries } from "./store/Actions";

function Countries(props){
    console.log(props)
    useEffect(()=>{
        props.getCountries()
    },[])
    return (
        <div>
            <h1>Countries</h1>
            {
                props.isLoading && <h3>Loading.....</h3>
            }
            {
                props.Countries?.map((c)=>{
                    return <li>
                        <h2>{c.name.common}</h2>
                        <img src={c.flags.png} alt="" />
                    </li>
                })
            }
        </div>
    )
}
function mapStateToProps(state){
    return state.CountriesReducer
}
function mapDispatchToProps(dispatch){
    return {
        getCountries:()=>{dispatch(getAllcountries())}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Countries)