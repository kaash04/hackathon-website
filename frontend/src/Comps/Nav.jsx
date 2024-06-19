import h from '../Assests/hackathon.png';
import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div className="nav">
            <div className="leftgrp">
                <img src={h} alt="navlogo" className='navlogo' />
                <Link to="/home" className="navlink">Hackathons</Link>
                <Link to="/projects" className="navlink">Projects</Link>
                <Link to="/blog" className="navlink">Blog</Link>
            </div>
            <div className="rightgrp">
                <Link to="/hosthackathon" className="navlink">Host a Hackathon</Link>
                <Link to="/login" className="login">Login</Link>
                <Link to="/register" className="sign">Register</Link>
            </div>
        </div>

    )
}
export default Nav