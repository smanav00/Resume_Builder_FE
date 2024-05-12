import React from 'react'
import {Link, Navigate, useNavigate} from "react-router-dom";
import '../CSS/navbar.css'


const CustomNavabr = (props) => {
        const logstatus = props.isLogged;
        const navigate = useNavigate();

        function handleClick(){
            localStorage.removeItem('token');
            props.setIsLogged(false);
            navigate('/');
        }
        return (
            <>
               <div className='navbar'>
                    <h2 className='title'>Resume Crafter</h2>
                    <div className='navitems'>
                        <Link className='navlink' to="/"> <p >Home</p> </Link>
                        <Link className='navlink' to="/build"> <p >Resume</p> </Link>
                        <Link className='navlink' to="/contact"> <p >Contact</p> </Link>
                        {!logstatus ? <Link className='navlink' to="/login"> <p >LogIn</p> </Link>
                        : <Link className='navlink' to="/"><p onClick={handleClick} >LogOut</p></Link> } 
                    </div>
                </div> 
            </>
        )
}

export default CustomNavabr
