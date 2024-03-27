import React, { useState, useEffect } from 'react';

import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';
import AdminSearch from './AdminSearch';

const AdminProductlist = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/allproducts');
            if (!response.ok) {
                throw new Error('Failed to fetch products');
            }
            const data = await response.json();
            setProducts(data.users);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    return (
        <>
            <div className="page-wrapper">
                <AdminHeader />
                <AdminSidebar />
                <div className="page-container">
                    <AdminSearch />
                    <div className="main-content">
                        <div className="section__content section__content--p30">
                            <div className="container-fluid">
                                <div className="table-responsive table--no-card m-b-40">
                                    <table className="table table-borderless table-striped table-earning">
                                        <thead>
                                            <tr>
                                                <th className="text-center">Image</th>
                                                <th>Title</th>
                                                <th>Description</th>
                                                <th>Price</th>
                                                <th>Stock</th>
                                                <th>Brand</th>
                                                <th>Category</th>
                                                <th className="text-right">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {products.map((product, index) => (
                                                <tr key={product._id}>
                                                    <td className="text-center">
                                                        {product.productImages.length > 0 && (
                                                            <img src={product.productImages[0]} alt="Product" style={{ width: '100px' }} />

                                                        )}
                                                        {/* {product.productImages.length > 1 && (
                                                            <img src={product.productImages[1]} alt="Product" style={{ width: '100px' }} />
                                                        )} */}
                                                    </td>
                                                    <td>{product.title}</td>
                                                    <td>{product.description}</td>
                                                    <td>{product.price}</td>
                                                    <td>{product.stock}</td>
                                                    <td>{product.brand}</td>
                                                    <td>{product.category}</td>
                                                    <td className="text-right">
                                                        <div className="action-button">
                                                            <button className="btn btn-primary">
                                                                <i className="fas fa-edit"></i> Edit
                                                            </button>
                                                            <button className="btn btn-danger">
                                                                <i className="fas fa-trash"></i> Delete
                                                            </button>
                                                        </div>
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
        </>
    );
};

export default AdminProductlist;
