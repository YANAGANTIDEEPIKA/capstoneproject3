import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import "../Styles/AppointmentForm.css";
// import { ToastContainer, toast } from "react-toastify";
function CHECK(){
    let stle = {
        background:"skyblue",
        color:'pink',
        fontSize:'20px'//font-size not work
    }
    return(
        <div style={stle}>
            <h1>THIS IS HOME PAGE</h1>
        </div>
    )
}

export default CHECK;