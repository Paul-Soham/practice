import React from 'react';
import Userheader from './Userheader';
import Userfooter from './Userfooter';

const UserProduct = () => {
  return (
    <>
      <Userheader />
      <div className="modal">
        <div className="modal-content">
          <span className="close">&times;</span>
          <div className="modal-body">
            <div className="product-details">
              <h2>Product Name</h2>
              <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p>Price: $100</p>
              <img src="product-image.jpg" alt="Product" />
            </div>
            <div className="modal-footer">
              <button>Add to Cart</button>
              <button>Close</button>
            </div>
          </div>
        </div>
      </div>
      <Userfooter />
    </>
  );
};

export default UserProduct;
