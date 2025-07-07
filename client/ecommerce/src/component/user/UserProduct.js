import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Userheader from './Userheader';
import Userfooter from './Userfooter';

const UserProduct = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const productId = queryParams.get('id');
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/product/${productId}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setProduct(data.product);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <Userheader />
      <div className="product-details">
        <h2>{product.title}</h2>
        <p>Description: {product.description}</p>
        <p>Price: ${product.price}</p>
        <p>Brand: {product.brand}</p>
        <p>Category: {product.category}</p>
        {product.productImages.length > 0 && (
          <img src={product.productImages[0]} alt={product.title} />
        )}
      </div>
      <Userfooter />
    </>
  );
};

export default UserProduct;
