import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar:React.FC<unknown> = (props) => {
    return(
        <nav className = 'navbar navbar-dark bg-dark px-5'>
            <Link className = 'navbar-brand' to='/this'>Welcome</Link>
                <span className="navbar-nav">
                    <NavLink className = 'nav-link' to = '/leaderboard'> Leaderboard </NavLink>
                </span>
                <span className="navbar-nav">
                    <NavLink className = 'nav-link' to = '/example'> Example Item </NavLink>
                </span>
        </nav>
    );
}

export default NavBar;