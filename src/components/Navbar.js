import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"
import logo from "./../images/gurjsingh-logo.png"

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
    <nav className="navbar navbar-expand-lg navbar-dark px-0 py-3 position-absolute top-0 start-0 w-full bg-dark bg-lg-transparent">
      <div className="container-xl max-w-screen-xl">
        {/* <!-- Logo --> */}
        {/* <div class="container-fluid"> */}
        <Link className="navbar-brand ms-10" to="/">
          <img src={logo} className="h-10" alt="" />
          <span className="navbar-text">
            {title}
            {description}
          </span>
        </Link>
        <button
          className="navbar-toggler"
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
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link class="dropdown-item" to="/services/buyers">
                    Buyers
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="/services/sellers">
                    Sellers
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="/services/investors">
                    Investors
                  </Link>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Resources
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link class="dropdown-item" to="/first-time-buyers">
                    First Time Buyers Center
                  </Link>
                </li>
                <li>
                  <a
                    class="dropdown-item"
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
              <Link className="nav-link" to="/about">
                Know Gurj
              </Link>
            </li>
          </ul>
          <div className="d-flex align-items-lg-center mt-3 ms-3 mt-lg-0">
            <Link
              to="/contact"
              className="btn btn-sm btn-neutral bg-yellow-500 border-none text-light w-full w-lg-auto"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
