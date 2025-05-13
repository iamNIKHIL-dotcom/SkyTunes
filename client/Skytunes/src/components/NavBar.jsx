import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../assets/logo.png';



const NavBar = ()=>{

    return (
        
            <div className='navbar'>


                <div className="nav-logo">

                    <a href='/'>

                        <img className='logo-img' src={logo} alt="SkyTunes logo" />

                        <span className="logo-txt">SkyTunes</span>
                    </a>

                </div>
                <div className="nav-btn">

                    <a href='https://github.com/iamNIKHIL-dotcom'
                        target='_blank'
                        className='social-btn'>
                            GitHub
                    </a>
                    

                    <a href='/'>Go Home</a>
                    

                </div>
            </div>
        
        
        
    )
}

export default NavBar;