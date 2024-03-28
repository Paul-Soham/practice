import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Userheader = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        // alert('Button clicked!'); // Adding an alert on button click
    };

    return (
        <header className="header_section innerpage_header">
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg custom_nav-container">
                    <a className="navbar-brand" href="/">
                        <span>Healet</span>
                    </a>
                    <div>
                        <div className={`custom_menu-btn ${isOpen ? 'menu_btn-style' : ''}`}>
                            <button onClick={toggleMenu}>
                                <span className="s-1"> </span>
                                <span className="s-2"> </span>
                                <span className="s-3"> </span>
                            </button>
                            <div id="myNav" className={`overlay ${isOpen ? 'menu_width' : ''}`}>
                                <div className="overlay-content">
                                    <Link to="/">Home</Link>
                                    <Link to="/about">About</Link>
                                    <Link to="/shop">Shop</Link>
                                    <Link to="/blog">Blog</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Userheader;