import React, { useState, useEffect } from 'react';
import Userheader from './Userheader';
import Userfooter from './Userfooter';

const UserSingleProduct = ({ match }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProduct(match.params.title);
  }, [match.params.title]);

  const fetchProduct = async (title) => {
    try {
      const response = await fetch(`http://localhost:5000/api/allproducts/${title}`);
      if (!response.ok) {
        throw new Error('Failed to fetch product');
      }
      const data = await response.json();
      setProduct(data.product);
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };

  return (
    <>
      <Userheader />
      {product && (
        <section className="single_product_section layout_padding">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="img-box">
                  <img src={product.productImages[0]} alt={product.title} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="detail-box">
                  <h2>{product.title}</h2>
                  <h3>Price: ${product.price}</h3>
                  <p>{product.shortDescription}</p>
                  <p>{product.longDescription}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      <Userfooter />
    </>
  );
}

export default UserSingleProduct;
