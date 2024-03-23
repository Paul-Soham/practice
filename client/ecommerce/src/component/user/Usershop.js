import React from 'react'
import Userheader from './Userheader';
import Userfooter from './Userfooter';

function Usershop() {
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
          <div className="row">
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="box">
                <a >
                  <div className="img-box">
                    <img src="user-assets/images/p1.png" alt="" />
                  </div>
                  <div className="detail-box">
                    <h6>
                      Necklace
                    </h6>
                    <h6>
                      Price
                      <span>
                        $200
                      </span>
                    </h6>
                  </div>
                  <div className="new">
                    <span>
                      New
                    </span>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="box">
                <a >
                  <div className="img-box">
                    <img src="user-assets/images/p2.png" alt="" />
                  </div>
                  <div className="detail-box">
                    <h6>
                      Necklace
                    </h6>
                    <h6>
                      Price
                      <span>
                        $300
                      </span>
                    </h6>
                  </div>
                  <div className="new">
                    <span>
                      New
                    </span>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="box">
                <a >
                  <div className="img-box">
                    <img src="user-assets/images/p3.png" alt="" />
                  </div>
                  <div className="detail-box">
                    <h6>
                      Necklace
                    </h6>
                    <h6>
                      Price
                      <span>
                        $110
                      </span>
                    </h6>
                  </div>
                  <div className="new">
                    <span>
                      New
                    </span>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="box">
                <a >
                  <div className="img-box">
                    <img src="user-assets/images/p4.png" alt="" />
                  </div>
                  <div className="detail-box">
                    <h6>
                      Ring
                    </h6>
                    <h6>
                      Price
                      <span>
                        $45
                      </span>
                    </h6>
                  </div>
                  <div className="new">
                    <span>
                      New
                    </span>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="box">
                <a >
                  <div className="img-box">
                    <img src="user-assets/images/p5.png" alt="" />
                  </div>
                  <div className="detail-box">
                    <h6>
                      Ring
                    </h6>
                    <h6>
                      Price
                      <span>
                        $95
                      </span>
                    </h6>
                  </div>
                  <div className="new">
                    <span>
                      New
                    </span>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="box">
                <a >
                  <div className="img-box">
                    <img src="user-assets/images/p6.png" alt="" />
                  </div>
                  <div className="detail-box">
                    <h6>
                      Earrings
                    </h6>
                    <h6>
                      Price
                      <span>
                        $70
                      </span>
                    </h6>
                  </div>
                  <div className="new">
                    <span>
                      New
                    </span>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="box">
                <a >
                  <div className="img-box">
                    <img src="user-assets/images/p7.png" alt="" />
                  </div>
                  <div className="detail-box">
                    <h6>
                      Earrings
                    </h6>
                    <h6>
                      Price
                      <span>
                        $400
                      </span>
                    </h6>
                  </div>
                  <div className="new">
                    <span>
                      New
                    </span>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="box">
                <a >
                  <div className="img-box">
                    <img src="user-assets/images/p8.png" alt="" />
                  </div>
                  <div className="detail-box">
                    <h6>
                      Necklace
                    </h6>
                    <h6>
                      Price
                      <span>
                        $450
                      </span>
                    </h6>
                  </div>
                  <div className="new">
                    <span>
                      New
                    </span>
                  </div>
                </a>
              </div>
            </div>
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