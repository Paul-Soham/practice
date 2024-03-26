import React, { useState, useEffect } from "react";
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";
import AdminSearch from "./AdminSearch";

const AdminUsers = () => {
    const [users, setUsers] = useState([]);
<<<<<<< HEAD

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
=======
    const [deleteUserId, setDeleteUserId] = useState(null);
    const [isEditModalVisible, setIsEditModalVisible] = useState(false);
    const [editUserData, setEditUserData] = useState({ username: "", email: "", phone: "" });
    const [alert, setAlert] = useState({
        open:false,
        titile:'',
        desc:''
    })

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/users");
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            setUsers(data.users);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleEdit = async (user) => {
        setEditUserData(user);
        setIsEditModalVisible(true);
    };

    const handleDelete = (userId) => {
        setDeleteUserId(userId);
        deleteUserData(userId);
    };

    const handleModalClose = () => {
        setIsEditModalVisible(false);
    };

    const deleteUserData = async (userId) => {
        try {
            const response = await fetch(`http://localhost:5000/api/delete?userId=${userId}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            
            setUsers((users|| []).filter(row=>row._id !== userId))

            setAlert({
                open:true,
                titile:'Deleted',
                desc:'User successfully deleted'
            })
            
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    };

    const handleSaveChanges = async () => {
        try {
            if(editUserData?._id){
            const response = await fetch(`http://localhost:5000/api/update?UserId=${editUserData._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(editUserData),
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            setUsers((users || []).map(row=>{
                if(editUserData?._id === row?._id){
                    return editUserData;
                }
                return row;
            }));
            setAlert({
                open:true,
                titile:'Updated',
                desc:'User successfully updated'
            })
            setIsEditModalVisible(false);
        }
        } catch (error) {
            console.error("Error updating user:", error);
        }
    };

    const closeModal = () => {
        setAlert({
            open:false,
            titile:'',
            desc:''
        })
>>>>>>> 62c3ac1835686638464660a8905b7f5ccb52bc45
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
<<<<<<< HEAD
                                                    <th>Username</th>
                                                    <th>Email</th>
                                                    <th>Phone</th>
                                                    <th className="text-right">Role</th>
=======
                                                    <th className="text-center">ID</th>
                                                    <th>Username</th>
                                                    <th>Email</th>
                                                    <th>Phone</th>
>>>>>>> 62c3ac1835686638464660a8905b7f5ccb52bc45
                                                    <th className="text-right">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
<<<<<<< HEAD
                                                {users.map(user => (
                                                    <tr key={user.id}>
                                                        <td>{user.username}</td>
                                                        <td>{user.email}</td>
                                                        <td>{user.phone}</td>
                                                        <td className="text-right">{user.role}</td>
                                                        <td className="text-right">
                                                            <button className="btn btn-primary" onClick={() => handleEdit(user.id)}>Edit</button>
                                                            <button className="btn btn-danger" onClick={() => handleDelete(user.id)}>Delete</button>
=======
                                                {users.map((user) => (
                                                    <tr>
                                                        <td className="text-left">{user._id}</td>
                                                        <td>{user.username}</td>
                                                        <td>{user.email}</td>
                                                        <td>{user.phone}</td>
                                                        <td className="">
                                                            <div className="action-button">
                                                                <button className="btn btn-primary" onClick={() => handleEdit(user)}><i className="fas fa-edit"></i> Edit</button>
                                                                <button className="btn btn-danger" onClick={() => handleDelete(user._id)}><i className="fas fa-trash"></i> Delete</button>
                                                            </div>
>>>>>>> 62c3ac1835686638464660a8905b7f5ccb52bc45
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
<<<<<<< HEAD
=======

            {/* Modal for User Deletion */}
            {alert.open && (
                <div className="modal fade show" tabIndex="-1" role="dialog" style={{ display: "block" }}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{alert.titile}</h5>
                                <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                    onClick={closeModal}
                                >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>{alert.desc}</p>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-dismiss="modal"
                                    onClick={closeModal}
                                >
                                    OK
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal for Editing User */}
            {isEditModalVisible && editUserData?._id && (
                <div className="modal fade show" tabIndex="-1" role="dialog" style={{ display: "block" }}>
                    <div className="modal-dialog edit-modal" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Edit User</h5>
                                <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                    onClick={handleModalClose}
                                >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                {/* Add your form for editing here */}
                                <div className="card-body card-block">
                                    <form action="" method="post" className="">
                                        <div className="form-group">
                                            <div className="input-group">
                                                <div className="input-group-addon">
                                                    <i className="fa fa-user"></i>
                                                </div>
                                                <input type="text" id="username" name="username" placeholder="Username" className="form-control" value={editUserData.username} onChange={(e) => setEditUserData({ ...editUserData, username: e.target.value })} />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group">
                                                <div className="input-group-addon">
                                                    <i className="fa fa-envelope"></i>
                                                </div>
                                                <input type="email" id="email" name="email" placeholder="Email" className="form-control" value={editUserData.email} onChange={(e) => setEditUserData({ ...editUserData, email: e.target.value })} />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group">
                                                <div className="input-group-addon">
                                                    <i className="fa fa-phone"></i>
                                                </div>
                                                <input type="text" id="phone" name="phone" placeholder="Phone" className="form-control" value={editUserData.phone} onChange={(e) => setEditUserData({ ...editUserData, phone: e.target.value })} />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-dismiss="modal"
                                    onClick={handleModalClose}
                                >
                                    Close
                                </button>
                                <button type="button" className="btn btn-primary" onClick={handleSaveChanges}>
                                    Save changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
>>>>>>> 62c3ac1835686638464660a8905b7f5ccb52bc45
        </>
    );
};

export default AdminUsers;
