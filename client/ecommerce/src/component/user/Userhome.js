import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Userfooter from './Userfooter'

const Userhome = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* <!-- header section strats --> */}
      <header className="header_section">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container">
            <a className="navbar-brand" href="index.html">
              <span>
                Healet
              </span>
            </a>
            <div className="" id="">

              <div className={`custom_menu-btn ${isOpen ? 'menu_btn-style' : ''}`}>
                <button onClick={toggleMenu}>
                  <span className="s-1"> </span>
                  <span className="s-2"> </span>
                  <span className="s-3"> </span>
                </button>
                <div id="myNav" className={`overlay ${isOpen ? 'menu_width' : ''}`}>
                  <div className="overlay-content">
                  <Link to="/">Home</Link>
                  <Link to="/about">About</Link>
                  <Link to="/shop">Shop</Link>
                  <Link to="/blog">Blog</Link>
                  </div>
                </div>
              </div>

            </div>
          </nav>
        </div>
      </header>
      {/* <!-- end header section --> */}

      {/* <!-- slider section --> */}
      <section className="slider_section position-relative">
        <div className="slider_bg_box">
          <img src="user-assets/images/slider-bg.jpg" alt="" />
        </div>
        <div className="slider_bg"></div>
        <div className="container">
          <div className="col-md-9 col-lg-8">
            <div className="detail-box">
              <h1>
                Best Jewellery
                <br /> Collection
              </h1>
              <p>
                It is a long established fact that a reader will be distracted by the readable content of a page when
                looking at its layout. The point of using Lorem
              </p>
              <div>
                <a className="slider-link">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end slider section --> */}

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

      {/* <!-- about section --> */}
      <section className="about_section  ">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="img-box">
                <img src="user-assets/images/about-img.jpg" alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>
                    About Us
                  </h2>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolorem eum consequuntur ipsam repellat dolor soluta aliquid laborum, eius odit consectetur vel quasi in quidem, eveniet ab est corporis tempore.
                </p>
                <a >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end about section --> */}

      {/* <!-- offer section --> */}
      <section className="offer_section layout_padding">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-7 px-0">
              <div className="box offer-box1">
                <img src="user-assets/images/o1.jpg" alt="" />
                <div className="detail-box">
                  <h2>
                    Upto 15% Off
                  </h2>
                  <a >
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-5 px-0">
              <div className="box offer-box2">
                <img src="user-assets/images/o2.jpg" alt="" />
                <div className="detail-box">
                  <h2>
                    Upto 10% Off
                  </h2>
                  <a >
                    Shop Now
                  </a>
                </div>
              </div>
              <div className="box offer-box3">
                <img src="user-assets/images/o3.jpg" alt="" />
                <div className="detail-box">
                  <h2>
                    Upto 20% Off
                  </h2>
                  <a >
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end offer section --> */}

      {/* <!-- blog section --> */}
      <section className="blog_section ">
        <div className="container">
          <div className="heading_container">
            <h2>
              Latest From Blog
            </h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="box">
                <div className="img-box">
                  <img src="user-assets/images/b1.jpg" alt="" />
                  <h4 className="blog_date">
                    14 <br />
                    July
                  </h4>
                </div>
                <div className="detail-box">
                  <h5>
                    Molestiae ad reiciendis dignissimos
                  </h5>
                  <p>
                    alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                  </p>
                  <a >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="box">
                <div className="img-box">
                  <img src="user-assets/images/b2.jpg" alt="" />
                  <h4 className="blog_date">
                    15 <br />
                    July
                  </h4>
                </div>
                <div className="detail-box">
                  <h5>
                    Dolores vel maiores voluptatem enim
                  </h5>
                  <p>
                    alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                  </p>
                  <a >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end blog section --> */}

      {/* <!-- client section --> */}
      <section className="client_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>
              Testimonial
            </h2>
          </div>
          <div id="carouselExample2Controls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-md-11 col-lg-10 mx-auto">
                    <div className="box">
                      <div className="img-box">
                        <img src="user-assets/images/client.jpg" alt="" />
                      </div>
                      <div className="detail-box">
                        <div className="name">
                          <h6>
                            Samantha Jonas
                          </h6>
                        </div>
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable cIt is a long established fact
                          that a reader will be distracted by the readable c
                        </p>
                        <i className="fa fa-quote-left" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-md-11 col-lg-10 mx-auto">
                    <div className="box">
                      <div className="img-box">
                        <img src="user-assets/images/client.jpg" alt="" />
                      </div>
                      <div className="detail-box">
                        <div className="name">
                          <h6>
                            Samantha Jonas
                          </h6>
                        </div>
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable cIt is a long established fact
                          that a reader will be distracted by the readable c
                        </p>
                        <i className="fa fa-quote-left" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-md-11 col-lg-10 mx-auto">
                    <div className="box">
                      <div className="img-box">
                        <img src="user-assets/images/client.jpg" alt="" />
                      </div>
                      <div className="detail-box">
                        <div className="name">
                          <h6>
                            Samantha Jonas
                          </h6>
                        </div>
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable cIt is a long established fact
                          that a reader will be distracted by the readable c
                        </p>
                        <i className="fa fa-quote-left" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel_btn-container">
              <a className="carousel-control-prev" href="#carouselExample2Controls" role="button" data-slide="prev">
                <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExample2Controls" role="button" data-slide="next">
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end client section --> */}

      <Userfooter />
    </>
  )
}

export default Userhome