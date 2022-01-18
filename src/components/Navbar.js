import { Link } from "gatsby"
import React from "react"

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark px-0 py-3 position-absolute top-0 start-0 w-full bg-dark bg-lg-transparent mb-10">
      <div className="container-xl max-w-screen-xl">
        <Link className="navbar-brand" to="/">
          <img src="../../images/gurjsingh-logo.png" className="h-10" alt="" />
          <div className="d-flex flex-wrap">
            <span>Gurjivan Singh</span>
            <span>Professional Realtor &copy;</span>
          </div>
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
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">
                Resources
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/about">
                Know Gurj
              </Link>
            </li>
          </ul>
          <div className="d-flex align-items-lg-center mt-3 ms-3 mt-lg-0">
            <a
              href="#"
              className="btn btn-sm btn-neutral bg-yellow-500 border-none text-light w-full w-lg-auto"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
