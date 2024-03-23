import React from 'react'
import Userheader from './Userheader';
import Userfooter from './Userfooter';

function Userabout() {
  return (
    <>
      <Userheader />
      {/* <!-- about section --> */}
      <section className="about_section  layout_padding">
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
      <Userfooter />
    </>
  )
}

export default Userabout