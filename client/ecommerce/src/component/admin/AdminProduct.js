import React, { useState } from 'react';
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';
import AdminSearch from './AdminSearch';

function AdminProduct() {
    const [productData, setProductData] = useState({
        title: "",
        image: "",
        sku: "",
        price: "",
        quantity: "",
        offerPrice: "",
        shortDescription: "",
        longDescription: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductData({
            ...productData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log("Product data:", productData);
    };

    return (
        <>
            <div className="page-wrapper">
                <AdminHeader />
                <AdminSidebar />
                <div className="page-container">
                    <AdminSearch />
                    <div className="section__content section__content--p30 mt-5 pt-5">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-12">
                                    <h2 className="pb-3">Upload Product</h2>
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <label>Product Title:</label>
                                            <input type="text" className="form-control" name="title" value={productData.title} onChange={handleChange} required />
                                        </div>
                                        <div className="form-group">
                                            <label>Product Image:</label>
                                            <input type="file" className="form-control-file" name="image" onChange={handleChange} required />
                                        </div>
                                        <div className="form-group">
                                            <label>Product SKU:</label>
                                            <input type="text" className="form-control" name="sku" value={productData.sku} onChange={handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <label>Product Price:</label>
                                            <input type="number" className="form-control" name="price" value={productData.price} onChange={handleChange} required />
                                        </div>
                                        <div className="form-group">
                                            <label>Product Quantity:</label>
                                            <input type="number" className="form-control" name="quantity" value={productData.quantity} onChange={handleChange} required />
                                        </div>
                                        <div className="form-group">
                                            <label>Product Offer Price:</label>
                                            <input type="number" className="form-control" name="offerPrice" value={productData.offerPrice} onChange={handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <label>Product Short Description:</label>
                                            <textarea className="form-control" rows="3" name="shortDescription" value={productData.shortDescription} onChange={handleChange}></textarea>
                                        </div>
                                        <div className="form-group">
                                            <label>Product Long Description:</label>
                                            <textarea className="form-control" rows="5" name="longDescription" value={productData.longDescription} onChange={handleChange}></textarea>
                                        </div>
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminProduct;
