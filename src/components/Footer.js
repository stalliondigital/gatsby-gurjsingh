import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"
import logo from "./../images/gurjsingh-logo.png"
import mls_logo from "./../images/mls.png"
import footerImg from "./../images/footer_image.png"

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
    <div className="bg-black container-fluid text-white">
      <div className="container">
        <div className="row py-5">
          <div className="col-6 col-lg-3">
            <Link className="text-reset" to="/">
              <div className="row row-cols-auto">
                <div className="col-3 pe-0 ">
                  <img src={logo} className="h-10" alt="" />
                </div>
                <div className="col ps-1">
                  <span className="navbar-text">
                    {title}
                    <br />
                    {description}
                  </span>
                </div>
              </div>
            </Link>
            <p>
              Whether it being finding a new home or selling your existing home,
              I’m here to help you every step of the way.
            </p>
            <div className="row">
              <div className="col-8 d-flex justify-content-around">
                <FontAwesomeIcon icon={faPhoneAlt} />
                <FontAwesomeIcon icon={faEnvelope} />
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faLinkedinIn} />
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-3">
            <img src={footerImg} className="h-4" alt="" />
            <p>RE/MAX 2000 REALTY</p>
            <div className="row">
              <div className="col-1">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </div>
              <div className="col-11">
                #103-15127 100th Avenue,
                <br />
                Surrey, BC V3R 0N9
              </div>
              <div className="col-1">
                <FontAwesomeIcon icon={faPhoneAlt} />
              </div>
              <div className="col-11">778-951-8275</div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="row">
              <div className="col-3">
                <p>Services</p>
                <ul className="list-unstyled">
                  <li>
                    <Link className="text-reset" to="/services/buyers">
                      Buyers
                    </Link>
                  </li>
                  <li>
                    <Link className="text-reset" to="/services/sellers">
                      Sellers
                    </Link>
                  </li>
                  <li>
                    <Link className="text-reset" to="/services/investors">
                      Investors
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-5">
                <p>Resources</p>
                <ul className="list-unstyled">
                  <li>
                    <Link className="text-reset" to="/first-time-buyers">
                      First Time Buyers
                    </Link>
                  </li>
                  <li>
                    <a
                      className="text-reset"
                      href="https://www.ratehub.ca/mortgage-payment-calculator"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Mortage Calculator
                    </a>
                  </li>
                  <li>
                    <Link className="text-reset" to="#">
                      Featured Listings
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-4">
                <p>Know Gurj</p>
                <ul className="list-unstyled">
                  <li>
                    <Link className="text-reset" to="#">
                      Our Process
                    </Link>
                  </li>
                  <li>
                    <Link className="text-reset" to="/about">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link className="text-reset" to="#">
                      Community
                    </Link>
                  </li>
                  <li>
                    <Link className="text-reset" to="#">
                      Testimonials
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row py-5 align-items-center">
          <div className="col-12 col-lg-6 order-2 order-lg-1 text-center pt-6">
            <p>© 2022 Gurjivan Singh. All Rights Reserved</p>
            <p>Made by Stallion Digital</p>
          </div>
          <div className="col-12 col-lg-6 order-1 order-lg-2">
            <div className="container justify-content-center align-items-center">
              <div className="row justify-content-center align-items-center">
                <div className="col-2">
                  <img src={mls_logo} className="img-fluid w-auto" alt="" />
                </div>
                <div className="col-10 small text-muted text-center">
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
    </div>
  )
}
