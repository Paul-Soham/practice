import React from 'react'

function Userfooter() {
    return (
        <>
            {/* info section */}
            <section className="info_section layout_padding2">
                <div className="container">
                    <div className="row info_form_social_row">
                        <div className="col-md-8 col-lg-9">
                            <div className="info_form">
                                <form action="">
                                    <input type="email" placeholder="Enter your email" />
                                    <button>
                                        <i className="fas fa-arrow-right" aria-hidden="true"></i>
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-3">

                            <div className="social_box">
                                <a >
                                    <i className="fa fa-facebook" aria-hidden="true"></i>
                                </a>
                                <a >
                                    <i className="fas fa-twitter" aria-hidden="true"></i>
                                </a>
                                <a >
                                    <i className="fas fa-linkedin" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row info_main_row">
                        <div className="col-md-6 col-lg-3">
                            <div className="info_links">
                                <h4>
                                    Menu
                                </h4>
                                <div className="info_links_menu">
                                    <a href="index.html">Home</a>
                                    <a href="about.html">About</a>
                                    <a href="shop.html">Shop</a>
                                    <a href="blog.html">Blog</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="info_insta">
                                <h4>
                                    Instagram
                                </h4>
                                <div className="insta_box">
                                    <div className="img-box">
                                        <img src="user-assets/images/p1.png" alt="" />
                                    </div>
                                    <p>
                                        long established fact that a reader
                                    </p>
                                </div>
                                <div className="insta_box">
                                    <div className="img-box">
                                        <img src="user-assets/images/p2.png" alt="" />
                                    </div>
                                    <p>
                                        long established fact that a reader
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="info_detail">
                                <h4>
                                    About Us
                                </h4>
                                <p className="mb-0">
                                    when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <h4>
                                Contact Us
                            </h4>
                            <div className="info_contact">
                                <a >
                                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                                    <span>
                                        Location
                                    </span>
                                </a>
                                <a >
                                    <i className="fa fa-phone" aria-hidden="true"></i>
                                    <span>
                                        Call +01 1234567890
                                    </span>
                                </a>
                                <a >
                                    <i className="fa fa-envelope"></i>
                                    <span>
                                        demo@gmail.com
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end info_section  */}

            {/* footer section  */}
            <footer className="footer_section">
                <div className="container">
                    <p>
                        &copy; <span id="displayYear"></span> All Rights Reserved By
                        <a href="#">Free Html Templates</a>
                    </p>
                </div>
            </footer>
            {/* footer section */}

        </>
    )
}

export default Userfooter

