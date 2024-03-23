import React from 'react'
import Userheader from './Userheader';
import Userfooter from './Userfooter';

function Userblog() {
  return (
    <>
      <Userheader />
      {/* <!-- blog section --> */}
      <section className="blog_section layout_padding">
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
                    Look even slightly believable. If you are
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
                    Anything embarrassing hidden in the middle
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
      <Userfooter />
    </>
  )
}

export default Userblog