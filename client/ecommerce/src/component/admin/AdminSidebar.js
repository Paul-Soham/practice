import React from "react";
import { Link } from "react-router-dom";

const AdminSidebar = () => {
    return (
        <>
            <aside className="menu-sidebar d-none d-lg-block">
                <div className="logo">

                    <img src="assets/images/icon/logo.png" alt="Cool Admin" />

                </div>
                <div className="menu-sidebar__content js-scrollbar1">
                    <nav className="navbar-sidebar">
                        <ul className="list-unstyled navbar__list">
                            <li className="active has-sub">
                                <Link to="/dashboard" className="js-arrow">
                                    <i className="fas fa-tachometer-alt"></i>Dashboard
                                </Link>
                            </li>
                            <li className="active has-sub">
                                <Link to="/user" className="js-arrow">
                                    <i className="fas fa-user"></i>Users
                                </Link>
                            </li>
                            <li className="active has-sub">
                                <Link to="/contact" className="js-arrow">
                                    <i className="fas fa-address-book"></i>Contacts
                                </Link>
                            </li>
                            <li className="active has-sub">
                                <Link to="/product" className="js-arrow">
                                    <i class="fas fa-shopping-bag"></i>Add Product
                                </Link>
                            </li>
                            <li className="active has-sub">
                                <Link to="/product-list" className="js-arrow">
                                    <i class="fas fa-shopping-bag"></i>All Products
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>
        </>
    );
}
export default AdminSidebar;