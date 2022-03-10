import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"
import logo from "./../images/gurjsingh-logo.png"
import mls_logo from "./../images/mls.png"
import footerImg from "./../images/footer_image.png"
import gurjivanSinghLogo from "./../images/gurjivan-singh-logo.png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons"
import {
  faPhoneAlt,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons"

export default function Footer() {
  const data = useStaticQuery(graphql`
    query Info {
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
    <section className="footer pt-10 container-fluid text-white">
      <div className="container-fluid">
        <div className="row">
          <div className="contact col-12 col-lg-7 row pb-10 pb-lg-0">
            <div className="col-7 ">
              <Link className="text-reset" to="/">
                <div className="row row-cols-auto">
                  <div className="col pe-0 ">
                    <img src={logo} className="h-14" alt="" />
                  </div>
                  <div className="col d-flex flex-column text-white ">
                    <img src={gurjivanSinghLogo} className="h-8 pb-0" alt="" />
                    <span className="navbar-text pt-0">{description}</span>
                  </div>
                </div>
              </Link>
              <p className="cite pt-2">
                Whether it being finding a new home or selling your existing
                home, I'm here to help you every step of the way.
              </p>
              <div className="row pt-4">
                <div className="col-8 ">
                  <a className="text-reset footer-icon" href="tel:778-951-8275">
                    <FontAwesomeIcon icon={faPhoneAlt} />
                  </a>
                  <a
                    className="text-reset footer-icon"
                    href="mailto:gurj@gurjsingh.ca"
                  >
                    <FontAwesomeIcon icon={faEnvelope} />
                  </a>
                  <a
                    className="text-reset footer-icon"
                    href="https://www.facebook.com/GetGurj"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                  <a
                    className="text-reset footer-icon"
                    href="https://www.instagram.com/getgurj/"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a
                    className="text-reset footer-icon"
                    href="https://twitter.com/getgurj"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a
                    className="text-reset footer-icon"
                    href="https://www.linkedin.com/in/getgurj/"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-5">
              <img src={footerImg} className="h-4" alt="" />
              <a
                className="text-reset"
                href="https://www.remax.ca"
                target="_blank"
              >
                <p className="pt-2 pb-5">RE/MAX 2000 REALTY</p>
              </a>
              <div className="row text-start lh-sm">
                <div className="col-1">
                  <a
                    className="text-reset text-start footer-icon"
                    href="https://goo.gl/maps/5jnt94uo3t56WFsz9"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                  </a>
                </div>
                <div className="col footer-address">
                  #103-15127 100th Avenue, Surrey, BC V3R 0N9
                </div>
              </div>
              <div className="row text-start">
                <div className="col-1 text-start lh-sm pt-2">
                  <a
                    className="text-reset text-start pe-2 footer-icon"
                    href="tel:778-951-8275"
                  >
                    <FontAwesomeIcon icon={faPhoneAlt} />
                  </a>
                </div>
                <div className="col pt-2">778-951-8275</div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-5">
            <div className="links row">
              <div className="col-3 col-lg-3">
                <p className="header">Services</p>
                <ul className="list-unstyled">
                  <li>
                    <Link
                      className="text-reset footer-link"
                      to="/services/buyers"
                    >
                      Buyers
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-reset footer-link"
                      to="/services/sellers"
                    >
                      Sellers
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-reset footer-link"
                      to="/services/investors"
                    >
                      Investors
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-5 col-lg-4">
                <p className="header">Resources</p>
                <ul className="list-unstyled">
                  <li>
                    <Link
                      className="text-reset footer-link"
                      to="/first-time-buyers"
                    >
                      First Time Buyers
                    </Link>
                  </li>
                  <li>
                    <a
                      className="text-reset footer-link"
                      href="https://www.ratehub.ca/mortgage-payment-calculator"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Mortage Calculator
                    </a>
                  </li>
                  <li>
                    <Link className="text-reset footer-link" to="#">
                      Featured Listings
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-4 col-lg-5">
                <p className="header">Know Gurj</p>
                <ul className="list-unstyled">
                  <li>
                    <Link className="text-reset footer-link" to="#">
                      Our Process
                    </Link>
                  </li>
                  <li>
                    <Link className="text-reset footer-link" to="/about">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link className="text-reset footer-link" to="#">
                      Community{" "}
                      <span className="d-none d-lg-inline">Investing</span>
                    </Link>
                  </li>
                  <li>
                    <Link className="text-reset footer-link" to="#">
                      <span className="d-none d-lg-inline">Reviews & </span>
                      Testimonials
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row py-5 align-items-center">
          <div className="col-12 col-lg-6 order-2 order-lg-1 text-center text-lg-start pt-6">
            <p className="footer-name">
              © 2022 Gurjivan Singh. All Rights Reserved
            </p>
            <p className="footer-license">
              Made with ♥ by{" "}
              <a
                className="text-reset footer-link"
                href="https://stalliondigital.ca"
                target="_blank"
              >
                Stallion Digital
              </a>
            </p>
          </div>
          <div className="col-12 col-lg-6 order-1 order-lg-2">
            <div className="container justify-content-center align-items-center">
              <div className="row justify-content-center align-items-center">
                <div className="col-2">
                  <img src={mls_logo} className="img-fluid w-auto" alt="" />
                </div>
                <div className="footer-mls col-10 small text-start lh-sm">
                  The data relating to real estate on this web site comes in
                  part from the MLS® Reciprocity program of the Real Estate
                  Board of Greater Vancouver or the Fraser Valley Real Estate
                  Board. Real estate listings held by participating real estate
                  firms are marked with the MLS® Reciprocity logo and detailed
                  information about the listing includes the name of the listing
                  agent. This representation is based in whole or part on data
                  generated by the Real Estate Board of Greater Vancouver or the
                  Fraser Valley Real Estate Board which assumes no
                  responsibility for its accuracy. The materials contained on
                  this page may not be reproduced without the express written
                  consent of the Real Estate Board of Greater Vancouver or the
                  Fraser Valley Real Estate Board.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
