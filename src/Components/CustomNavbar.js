import React from 'react'
import {Link} from "react-router-dom";
import '../CSS/navbar.css'


const CustomNavabr = () => {
        return (
            <>
               <div className='navbar'>
                    <h2 className='title'>Resume Crafter</h2>
                    <div className='navitems'>
                        <Link className='navlink' to="/"> <p >Home</p> </Link>
                        <Link className='navlink' to="/build"> <p >Resume</p> </Link>
                        <Link className='navlink' to="/contact"> <p >Contact</p> </Link>
                    </div>
                </div> 
            </>
        )
}

export default CustomNavabr
