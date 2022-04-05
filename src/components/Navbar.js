import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"
import logo from "./../images/gurjsingh-logo.png"
import gurjivanSinghLogo from "./../images/gurjivan-singh-logo.png"

export default function Navbar() {
  const data = useStaticQuery(graphql`
    query SiteInfo {
      site {
        siteMetadata {
          description
          title
        }
      }
    }
  `)

  const { title, description } = data.site.siteMetadata

  return (
    <nav className="navbar navbar-expand-lg w-full">
      <div className="container-lg">
        {/* <!-- Logo --> */}
        {/* <div className="container-fluid"> */}
        <Link className="navbar-brand ms-10" to="/">
          <div className="row row-cols-auto">
            <div className="col ">
              <img src={logo} className="h-14" alt="" />
            </div>
            <div className="col d-flex flex-column logo-text pt-0">
              <span>{title}</span>
              <span className="description-text fs-7 lh-0 pt-0">
                {description}
              </span>
            </div>
          </div>
        </Link>
        <button
          className="nav-button navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* </div> */}
        {/* <!-- Navbar toggle --> */}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarCollapse"
        >
          <ul className="navbar-nav ms-auto navbar-end ">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle fw-light"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>
              <ul
                className="nav-dropdown dropdown-menu border-0"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <Link
                    className="dropdown-item fw-light"
                    to="/services/buyers"
                  >
                    Buyers
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item fw-light"
                    to="/services/sellers"
                  >
                    Sellers
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item fw-light"
                    to="/services/investors"
                  >
                    Investors
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle fw-light"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Resources
              </a>
              <ul
                className="nav-dropdown dropdown-menu border-0"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <Link
                    className="dropdown-item  fw-light "
                    to="/first-time-buyers"
                  >
                    First Time Buyers Center
                  </Link>
                </li>
                <li>
                  <a
                    className="dropdown-item  fw-light "
                    href="https://www.ratehub.ca/mortgage-payment-calculator"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Mortage Calculator
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-light " to="/about">
                Know Gurj
              </Link>
            </li>
          </ul>
          <div className="d-flex justify-content-start align-items-lg-center mt-3 mt-lg-0">
            <Link
              to="/contact"
              className="btn btn-sm border-none w-auto w-lg-auto rounded-0  fw-light"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
