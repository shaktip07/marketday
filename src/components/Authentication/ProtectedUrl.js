import React,{useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

function ProtectedUrl(props) {
    let Comp = props.comp
    const navigate = useNavigate();
    useEffect(()=>{
        if(!localStorage.getItem("user-Info")){
            navigate("/login")
        }
    })
    return (
        <div>
            <Comp/>
        </div>
    )
}

export default ProtectedUrl;
