import React from 'react';

const NavBar = ()=>{

    return (
        <>
            <nav className='navbar'>


                <div className="nav-logo">

                    <a href='/'>

                        <img className='logo-img' 
                             src = "/logo-base.png"
                             alt  = "SkyTunes logo"
                        />

                        <span>SkyTunes</span>
                    </a>

                </div>
                <div className="nav-btn">

                    <a href='https:my gitHub'
                        target='_blank'
                        className='social-btn'>
                            GitHub
                    </a>
                    <a href='/'>Go Home</a>

                </div>
            </nav>
        
        
        </>
    )
}

export default NavBar;