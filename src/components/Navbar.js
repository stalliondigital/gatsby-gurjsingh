import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"
import { StaticImage } from "gatsby-plugin-image"

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
      <div className="container">
        {/* <!-- Logo --> */}
        {/* <div className="container-fluid"> */}
        <Link className="navbar-brand ms-10" to="/">
          <div className="row row-cols-auto">
            <div className="col ">
              <StaticImage
                src="./../images/gurjsingh-logo.png"
                alt="Enterprise logo"
                className="logo"
                imgClassName="logo"
                height={65}
                width={65}
              />
            </div>
            <div className="col d-flex flex-column logo-text pt-0">
              <span>{title}</span>
              <span className="description-text fs-7 lh-0 mt-n1">
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
          {/* small screen */}
          <ul className="navbar-nav ms-auto navbar-end d-lg-none rounded-0">
            <li className="nav-item dropdown rounded-0">
              <a className="nav-link dropdown-toggle fw-light">Services</a>
              <ul
                className="nav-dropdown dropdown-menu shadow-none d-block"
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
              <a className="nav-link dropdown-toggle fw-light">Resources</a>
              <ul
                className="nav-dropdown dropdown-menu shadow-none d-block"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <Link className="dropdown-item  fw-light " to="/blog">
                    Blog
                  </Link>
                </li>
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
          {/* big screen */}
          <ul className="navbar-nav ms-auto navbar-end rounded-0 d-none d-lg-flex">
            <li className="nav-item dropdown rounded-0">
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
                className="nav-dropdown dropdown-menu"
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
                className="nav-dropdown dropdown-menu "
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <Link className="dropdown-item  fw-light " to="/blog">
                    Blog
                  </Link>
                </li>
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
              className="btn btn-sm border-none w-auto w-lg-auto rounded-0 button-hover fw-light"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
