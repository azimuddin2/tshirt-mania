import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';


const Header = () => {
    return (
        <nav className='nav'>
            <Link to="/home">Home</Link>
            <Link to="/order">Order</Link>
            <Link to="/about">About</Link>
        </nav>
    );
};

export default Header;