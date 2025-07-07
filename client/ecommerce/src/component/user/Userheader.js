import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Userheader = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        // alert('Button clicked!'); // Adding an alert on button click
    };

    // Sample counts (can be replaced with actual state or props)
    const wishlistCount = 3;
    const cartCount = 6;

    return (
        <header className="header_section innerpage_header">
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg custom_nav-container">
                    <a className="navbar-brand" href="/">
                        <span>Healet</span>
                    </a>
                    <div className="icon-container">
                        <Link to="/search">
                            <span role="img" aria-label="Search"><i className="fa fa-search" aria-hidden="true"></i></span>
                        </Link>
                        <Link to="/my-account">
                            <span role="img" aria-label="My Account"><i className="fa fa-user" aria-hidden="true"></i></span>
                        </Link>
                        <Link to="/wishlist">
                            <span role="img" aria-label="Wishlist"><i className="fa fa-heart" aria-hidden="true"></i></span>
                            {wishlistCount > 0 && <span className="count">{wishlistCount}</span>}
                        </Link>
                        <Link to="/cart">
                            <span role="img" aria-label="Cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i></span>
                            {cartCount > 0 && <span className="count">{cartCount}</span>}
                        </Link>
                    </div>
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