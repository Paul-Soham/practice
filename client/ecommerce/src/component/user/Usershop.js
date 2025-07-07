import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Userheader from './Userheader';
import Userfooter from './Userfooter';

const Usershop = () => {
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [allProductsLoaded, setAllProductsLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/allproducts");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      //console.log(data);

      if (Array.isArray(data.products)) {
        setProducts(data.products);
        setVisibleProducts(data.products.slice(startIndex, startIndex + 8));
      } else {
        throw new Error("Invalid data format: 'products' is not an array or is undefined.");
      }

      setIsLoading(false);
    } 
    catch (error) {
      console.error("Error fetching products:", error);
      setIsLoading(false);
    }
  };

  const loadMoreProducts = () => {
    const nextStartIndex = startIndex + 8;
    if (nextStartIndex >= products.length) {
      setAllProductsLoaded(true);
    } else {
      setVisibleProducts([
        ...visibleProducts,
        ...products.slice(nextStartIndex, nextStartIndex + 8)
      ]);
      setStartIndex(nextStartIndex);
    }
  };

  const handleProductClick = (productId) => {
    navigate(`/product?id=${productId}`);
  };

  return (
    <>
      <Userheader />
      <section className="shop_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Latest Products</h2>
            <p>Total Products: {products.length}</p>
          </div>
          <div className="row">
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              visibleProducts.map(product => (
                <div className="col-sm-6 col-md-4 col-lg-3" key={product._id} onClick={() => handleProductClick(product._id)}>
                  <div className="box">
                    <div className="img-box">
                      {product.productImages.length > 0 && (
                        <img src={product.productImages[0]} alt={product.title} />
                      )}
                    </div>
                    <div className="detail-box">
                      <h6>{product.title}</h6>
                      <h6>Price <span>${product.price}</span></h6>
                    </div>
                    <div className="new">
                      <span>New</span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          {!allProductsLoaded && !isLoading && (
            <div className="btn-box">
              <button onClick={loadMoreProducts}>View More Products</button>
            </div>
          )}
          {allProductsLoaded && (
            <p>No more products</p>
          )}
        </div>
      </section>
      <Userfooter />
    </>
  );
};

export default Usershop;
