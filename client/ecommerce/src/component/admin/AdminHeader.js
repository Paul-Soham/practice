import React from 'react'

const AdminHeader = () => {
  return (
    <>
      <header className="header-mobile d-block d-lg-none">
        <div className="header-mobile__bar">
          <div className="container-fluid">
            <div className="header-mobile-inner">
              <a className="logo" >
                <img src="assets/images/icon/logo.png" alt="CoolAdmin" />
              </a>
              <button className="hamburger hamburger--slider" type="button">
                <span className="hamburger-box">
                  <span className="hamburger-inner"></span>
                </span>
              </button>
            </div>
          </div>
        </div>
        <nav className="navbar-mobile">
          <div className="container-fluid">
            <ul className="navbar-mobile__list list-unstyled">
              <li className="has-sub">
                <a className="js-arrow" >
                  <i className="fas fa-tachometer-alt"></i>Dashboard</a>
                <ul className="navbar-mobile-sub__list list-unstyled js-sub-list">
                  <li>
                    <a >Dashboard 1</a>
                  </li>
                  <li>
                    <a >Dashboard 2</a>
                  </li>
                  <li>
                    <a >Dashboard 3</a>
                  </li>
                  <li>
                    <a >Dashboard 4</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>
                  <i className="fas fa-chart-bar"></i>Charts</a>
              </li>
              <li>
                <a >
                  <i className="fas fa-table"></i>Tables</a>
              </li>
              <li>
                <a >
                  <i className="far fa-check-square"></i>Forms</a>
              </li>
              <li>
                <a >
                  <i className="fas fa-calendar-alt"></i>Calendar</a>
              </li>
              <li>
                <a >
                  <i className="fas fa-map-marker-alt"></i>Maps</a>
              </li>
              <li className="has-sub">
                <a className="js-arrow" >
                  <i className="fas fa-copy"></i>Pages</a>
                <ul className="navbar-mobile-sub__list list-unstyled js-sub-list">
                  <li>
                    <a >Login</a>
                  </li>
                  <li>
                    <a >Register</a>
                  </li>
                  <li>
                    <a >Forget Password</a>
                  </li>
                </ul>
              </li>
              <li className="has-sub">
                <a className="js-arrow" >
                  <i className="fas fa-desktop"></i>UI Elements</a>
                <ul className="navbar-mobile-sub__list list-unstyled js-sub-list">
                  <li>
                    <a >Button</a>
                  </li>
                  <li>
                    <a >Badges</a>
                  </li>
                  <li>
                    <a >Tabs</a>
                  </li>
                  <li>
                    <a >Cards</a>
                  </li>
                  <li>
                    <a >Alerts</a>
                  </li>
                  <li>
                    <a >Progress Bars</a>
                  </li>
                  <li>
                    <a >Modals</a>
                  </li>
                  <li>
                    <a >Switchs</a>
                  </li>
                  <li>
                    <a >Grids</a>
                  </li>
                  <li>
                    <a >Fontawesome Icon</a>
                  </li>
                  <li>
                    <a >Typography</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  )
}

export default AdminHeader