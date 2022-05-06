import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = ({ current_user, destroySession })=>{
  return(
    <nav className="container-fluid navbar navbar-expand bg-light navbar-light justify-content-between py-0 font-size-lg" >
        
        <ul className="navbar-nav">
            <li className="nav-item">
            <NavLink to='/auction' className="nav-link">
              <img src={process.env.PUBLIC_URL + '/logo.jpg'} alt="Auction Logo" />
            </NavLink>
            
            </li>
        </ul>
        <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to='/auction' className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to='/auctions' className="nav-link">Auctions</NavLink>
            </li>
            { current_user.user ? 
                <>
                  <li className="nav-item">
                    <NavLink to='/auctions/new' className="nav-link">New Auctions</NavLink>
                  </li>
                  <li className="nav-item">
                    <span className="nav-link">{current_user.user.first_name}</span>
                  </li>
                  <li className="nav-item">
                    <button onClick={destroySession}>Sign Out</button>
                  </li>
                </>
                : 
                <>
                  <li className="nav-item">
                    <NavLink to='/sign_in' className="nav-link">Sign In</NavLink>
                  </li> 
                  
                  <li className="nav-item">
                    <NavLink to='/sign_up' className="nav-link">Sign Up</NavLink>
                  </li> 
                </> }
        </ul>
    </nav>
  )
}




export default Navbar;

