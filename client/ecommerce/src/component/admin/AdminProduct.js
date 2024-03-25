import React, { useState } from 'react';
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';
import AdminSearch from './AdminSearch';

function AdminProduct() {
    const [productData, setProductData] = useState({
        id: "",
        title: "",
        description: "",
        price: "",
        discountPercentage: "",
        rating: "",
        stock: "",
        brand: "",
        category: "",
        productImages: []
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductData({
            ...productData,
            [name]: value
        });
    };

    const handleImageChange = (e) => {
        setProductData({
            ...productData,
            productImages: [...e.target.files]
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('id', productData.id);
        formData.append('title', productData.title);
        formData.append('description', productData.description);
        formData.append('price', productData.price);
        formData.append('discountPercentage', productData.discountPercentage);
        formData.append('rating', productData.rating);
        formData.append('stock', productData.stock);
        formData.append('brand', productData.brand);
        formData.append('category', productData.category);
        productData.productImages.forEach((image) => {
            formData.append('productImages', image);
        });

        try {
            const response = await fetch('http://localhost:5000/api/products', {
                method: 'POST',
                body: formData
            });
            if (!response.ok) {
                throw new Error('Failed to upload product');
            }
            console.log('Product uploaded successfully');
            // Clear form data after successful submission
            setProductData({
                id: "",
                title: "",
                description: "",
                price: "",
                discountPercentage: "",
                rating: "",
                stock: "",
                brand: "",
                category: "",
                productImages: []
            });
        } catch (error) {
            console.error('Error uploading product:', error);
        }
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
                                            <label>Product ID:</label>
                                            <input type="text" className="form-control" name="id" value={productData.id} onChange={handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <label>Product Title:</label>
                                            <input type="text" className="form-control" name="title" value={productData.title} onChange={handleChange} required />
                                        </div>
                                        <div className="form-group">
                                            <label>Product Description:</label>
                                            <textarea className="form-control" rows="3" name="description" value={productData.description} onChange={handleChange}></textarea>
                                        </div>
                                        <div className="form-group">
                                            <label>Product Price:</label>
                                            <input type="number" className="form-control" name="price" value={productData.price} onChange={handleChange} required />
                                        </div>
                                        <div className="form-group">
                                            <label>Product Discount Percentage:</label>
                                            <input type="number" className="form-control" name="discountPercentage" value={productData.discountPercentage} onChange={handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <label>Product Rating:</label>
                                            <input type="number" className="form-control" name="rating" value={productData.rating} onChange={handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <label>Product Stock:</label>
                                            <input type="number" className="form-control" name="stock" value={productData.stock} onChange={handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <label>Product Brand:</label>
                                            <input type="text" className="form-control" name="brand" value={productData.brand} onChange={handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <label>Product Category:</label>
                                            <input type="text" className="form-control" name="category" value={productData.category} onChange={handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <label>Product Images:</label>
                                            <input type="file" className="form-control-file" name="productImages" onChange={handleImageChange} multiple />
                                        </div>
                                        <button type="submit" className="btn btn-success btn-sm">
                                            Upload Product
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminProduct
