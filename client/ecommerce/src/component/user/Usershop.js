import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Userheader from './Userheader';
import Userfooter from './Userfooter';

const Usershop = () => {
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

  const formatTitle = (title) => {
    let formattedTitle = title.toLowerCase();
    formattedTitle = formattedTitle.replace(/\s+/g, '-');
    formattedTitle = formattedTitle.replace(/[^a-z0-9-]/g, '');
    return formattedTitle;
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
          </div>
          <p className='text-center p-2'>Total Products: {products?.length || 0}</p>
          <div className="row">
            {products.map((product, index) => (
              <div className="col-sm-6 col-md-4 col-lg-3" key={product.id}>
                <div className="box">
                  <Link to={`/shop/${formatTitle(product.title)}`}>
                    <div className="img-box">
                      {product.productImages.length > 0 && (
                        <img src={product.productImages[0]} alt="Product" />

                      )}
                    </div>
                    <div className="detail-box">
                      <h6>{product.title}</h6>
                      <h6 className='price-box'>
                        Price
                        <span>
                          ${product.price}
                        </span>
                      </h6>
                    </div>
                    {/* <div className="new">
                      <span>
                        New
                      </span>
                    </div> */}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="btn-box">
            <a >
              View All Products
            </a>
          </div>
        </div>
      </section>
      {/* <!-- end shop section --> */}
      <Userfooter />
    </>
  )
}

export default Usershop