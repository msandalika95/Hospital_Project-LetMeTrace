import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return(
        <nav>
            
                
                    <div className = "nav">
                        <NavLink exact activeClassName = "nav-active" style={{ marginLeft: 15}} to = "/"><b>Home</b></NavLink>
                        <NavLink activeClassName = "nav-active" style={{ marginLeft: 15}} to = "/admin"><b>Admin</b></NavLink>
                    </div>
                
            
        </nav>
    )
}

export default Navbar;