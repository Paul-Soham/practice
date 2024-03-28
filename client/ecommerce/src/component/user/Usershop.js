import React, { useState, useEffect } from 'react';
import Userheader from './Userheader';
import Userfooter from './Userfooter';

const Usershop = () => {
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [allProductsLoaded, setAllProductsLoaded] = useState(false);

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
      setProducts(data.products);
      setVisibleProducts(data.products.slice(startIndex, startIndex + 8));
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const loadMoreProducts = () => {
    const nextStartIndex = startIndex + 8;
    if (nextStartIndex >= (products?.length || 0)) { // Add null check for products and fallback to 0 if undefined
      setAllProductsLoaded(true);
    } else {
      setVisibleProducts([
        ...visibleProducts,
        ...products.slice(nextStartIndex, nextStartIndex + 8)
      ]);
      setStartIndex(nextStartIndex);
    }
  };

  return (
    <>
      <Userheader />
      {/* <!-- shop section --> */}
      <section className="shop_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>
              Latest Products
            </h2>
            <p>Total Products: {products?.length || 0}</p> {/* Add null check for products and fallback to 0 if undefined */}
          </div>
          <div className="row">
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              visibleProducts.map(product => (
                <div className="col-sm-6 col-md-4 col-lg-3" key={product.id}>
                  <div className="box">
                    <a>
                      <div className="img-box">
                        <img src={product.image} alt={product.title} />
                      </div>
                      <div className="detail-box">
                        <h6>{product.title}</h6>
                        <h6>Price <span>${product.price}</span></h6>
                      </div>
                      <div className="new">
                        <span>New</span>
                      </div>
                    </a>
                  </div>
                </div>
              ))
            )}
          </div>
          {!allProductsLoaded && (
            <div className="btn-box">
              <button onClick={loadMoreProducts}>View More Products</button>
            </div>
          )}
          {allProductsLoaded && (
            <p>No more products</p>
          )}
        </div>
      </section>
      {/* <!-- end shop section --> */}
      <Userfooter />
    </>
  );
};

export default Usershop;
