import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import Userheader from './Userheader';
import Userfooter from './Userfooter';

const ProductDetails = () => {
  const { productName } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProductDetails();
  }, [productName]);

  const fetchProductDetails = async () => {
    try {
      setIsLoading(true);

      // First try to use the product data passed through navigation state
      if (location.state?.productData) {
        setProduct(location.state.productData);
        setIsLoading(false);
        return;
      }

      // If no state data, fetch from API using the product ID from state or make API call
      let productId = location.state?.productId;

      if (!productId) {
        // If no productId in state, you might need to fetch by name or redirect back
        // For now, let's try to fetch all products and find by name
        const response = await fetch('http://localhost:5000/api/allproducts');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();

        // Find product by matching URL-friendly name
        const foundProduct = data.products.find(p => {
          const urlFriendlyName = p.title
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-')
            .trim();
          return urlFriendlyName === productName;
        });

        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          throw new Error('Product not found');
        }
      } else {
        // Fetch specific product by ID
        const response = await fetch(`http://localhost:5000/api/product/${productId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product details');
        }
        const data = await response.json();
        setProduct(data.product);
      }

      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching product details:', error);
      setError(error.message);
      setIsLoading(false);
    }
  };

  const handleBackToShop = () => {
    navigate('/shop');
  };

  if (isLoading) {
    return (
      <>
        <Userheader />
        <div className="container" style={{ padding: '50px 0' }}>
          <p>Loading product details...</p>
        </div>
        <Userfooter />
      </>
    );
  }

  if (error || !product) {
    return (
      <>
        <Userheader />
        <div className="container" style={{ padding: '50px 0' }}>
          <h2>Product Not Found</h2>
          <p>{error || 'The requested product could not be found.'}</p>
          <button onClick={handleBackToShop} className="btn btn-primary">
            Back to Shop
          </button>
        </div>
        <Userfooter />
      </>
    );
  }

  return (
    <>
      <Userheader />
      <section className="product_details_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="img-box">
                {product.productImages.length > 0 && (
                  <img src={product.productImages[0]} alt={product.title} style={{ width: '100%', height: 'auto' }} />

                )}
              </div>
            </div>
            <div className="col-md-6">
              <div className="detail-box">
                <h2>{product.title}</h2>
                <div className="price">
                  <h3>${product.price}</h3>
                </div>

                {product.description && (
                  <div className="description">
                    <h4>Description</h4>
                    <p>{product.description}</p>
                  </div>
                )}

                {product.category && (
                  <div className="category">
                    <h4>Category</h4>
                    <p>{product.category}</p>
                  </div>
                )}

                {product.stock && (
                  <div className="stock">
                    <h4>Stock</h4>
                    <p>{product.stock} available</p>
                  </div>
                )}

                <div className="btn-box">
                  <button className="btn btn-primary" style={{ marginRight: '10px' }}>
                    Add to Cart
                  </button>
                  <button
                    onClick={handleBackToShop}
                    className="btn btn-secondary"
                  >
                    Back to Shop
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Userfooter />
    </>
  );
};

export default ProductDetails;