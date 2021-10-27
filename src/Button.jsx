import React from "react";
import "./App.css";

const Button=(props1,props2)=>{
    return( 
        <>
        <button className="btn-style" style={{width:`${props1.width}px`,height:`${props2.height}px`}}>click here!!</button>
        </>
    )
}

export default Button;