import React, { useState, useEffect } from "react";
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";
import AdminSearch from "./AdminSearch";

const AdminUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Fetch data from the API
        fetch("http://localhost:5000/api/users")
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setUsers(data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, []);

    const handleEdit = (userId) => {
        // Implement the logic for editing a user
        console.log(`Edit user with ID: ${userId}`);
    };

    const handleDelete = (userId) => {
        // Implement the logic for deleting a user
        console.log(`Delete user with ID: ${userId}`);
    };

    return (
        <>
            <div className="page-wrapper">
                <AdminHeader />
                <AdminSidebar />
                <div className="page-container">
                    <AdminSearch />
                    <div className="section__content section__content--p30 mt-5">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-12">
                                    <h2 className="title-1 m-b-25 mt-5">User List</h2>
                                    <div className="table-responsive table--no-card m-b-40">
                                        <table className="table table-borderless table-striped table-earning">
                                            <thead>
                                                <tr>
                                                    <th>Username</th>
                                                    <th>Email</th>
                                                    <th>Phone</th>
                                                    <th className="text-right">Role</th>
                                                    <th className="text-right">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {users.map(user => (
                                                    <tr key={user.id}>
                                                        <td>{user.username}</td>
                                                        <td>{user.email}</td>
                                                        <td>{user.phone}</td>
                                                        <td className="text-right">{user.role}</td>
                                                        <td className="text-right">
                                                            <button className="btn btn-primary" onClick={() => handleEdit(user.id)}>Edit</button>
                                                            <button className="btn btn-danger" onClick={() => handleDelete(user.id)}>Delete</button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminUsers;
