import h from '../Assests/hackathon.png';
import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div className="nav">
            <div className="leftgrp">
                <img src={h} alt="navlogo" className='navlogo' />
                <Link to="/a" className="navlink">Hackathons</Link>
                <Link to="/a" className="navlink">Projects</Link>
                <Link to="/a" className="navlink">Blog</Link>
            </div>
            <div className="rightgrp">
                <Link to="/a" className="navlink">Host a Hackathon</Link>
                <Link to="/a" className="login">Login</Link>
                <Link to="/a" className="sign">Register</Link>
            </div>
        </div>

    )
}
export default Nav