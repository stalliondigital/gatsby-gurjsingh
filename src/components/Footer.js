import { Link, graphql, useStaticQuery } from "gatsby";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhoneAlt,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { StaticImage } from "gatsby-plugin-image";

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
  `);

  const { title, description } = data.site.siteMetadata;

  return (
    <section className="footer pt-10 container-fluid p-0 m-0">
      <div className="container justify-content-center">
        <div className="row p-0 pb-10">
          <div className="contact col-12 col-lg-7 d-flex justify-content-center  align-items-center row pb-10 pb-lg-0 px-0 mx-0">
            <div className="col-12 col-md-7 ">
              <Link className="text-reset" to="/">
                <div className="row row-cols-auto">
                  <div className="col pe-0 ">
                    <StaticImage
                      src="./../images/gurjsingh-logo.png"
                      alt="Enterprise logo"
                      className="logo"
                      imgClassName="logo"
                      height={65}
                      width={65}
                    />
                  </div>
                  <div className="col d-flex flex-column logo-text ">
                    <span>{title}</span>
                    <span className="description-text fs-7 lh-0 pt-0">
                      {description}
                    </span>
                  </div>
                </div>
              </Link>
              <p className="cite pt-2 lh-sm d-none d-md-block">
                Whether it being finding a new home or selling your existing
                home, I'm here to help you every step of the way.
              </p>
              <div className="row pt-4">
                <div className="col col-sm-8 d-flex">
                  <a
                    className="footer-icon pe-2"
                    href="tel:778-951-8275"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faPhoneAlt} />
                  </a>
                  <a
                    className="footer-icon pe-2"
                    href="mailto:gurj@gurjsingh.ca"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faEnvelope} />
                  </a>
                  <a
                    className="footer-icon pe-2"
                    href="https://www.facebook.com/GetGurj"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                  <a
                    className="footer-icon pe-2"
                    href="https://www.instagram.com/getgurj/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a
                    className="footer-icon pe-2"
                    href="https://twitter.com/getgurj"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a
                    className="footer-icon"
                    href="https://www.linkedin.com/in/getgurj/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-5 pt-10 pt-md-0">
              {/* <img src={footerImg} className="img-fluid h-4" alt="" /> */}
              <StaticImage
                src="./../images/footer/royale.png"
                alt="mls logo"
                width={85}
                height={43}
                className="pb-0 mb-n1 d-block"
              />
              <a
                className="text-reset"
                href="https://www.royallepage.ca/en/office/british-columbia/langley/royal-lepage-wolstencroft-realty/357"
                target="_blank"
                rel="noreferrer"
              >
                <p className="brokerage-text pt-0 mt-n1 pb-5">
                  Royal LePage Wolstencroft Realty
                </p>
              </a>
              <div className="row text-start lh-sm pe-0">
                <a
                  className="text-reset text-start footer-icon row pe-0"
                  href="https://goo.gl/maps/5jnt94uo3t56WFsz9"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="footer-icon col-1 d-none d-lg-inline">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                  </div>
                  <div className="col text-reset text-start footer-address ">
                    #135-19664 64th Avenue, Langley, BC V2Y 3J6
                  </div>
                </a>
              </div>
              <div className="row text-start">
                <a
                  className="text-reset text-start pe-2 footer-icon row"
                  href="tel:778-951-8275"
                >
                  <div className="footer-icon col-1 d-none d-lg-inline text-start lh-sm pt-2">
                    <FontAwesomeIcon icon={faPhoneAlt} />
                  </div>
                  <div className="col pt-2 text-reset text-start footer-address">
                    778-951-8275
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="d-none d-lg-block col-12 col-lg-5">
            <div className="links row">
              <div className="col-3">
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

        <div className="row py-5 align-items-center border-top-2 px-0 mx-0">
          <div className="col-12 col-lg-6 order-2 order-lg-1 text-center text-lg-start pt-6 px-0 mx-0">
            <p className="footer-name">
              © 2022 Gurjivan Singh. All Rights Reserved
            </p>
            <p className="footer-link">
              Made with <span className="footer-icon">♥</span> by{" "}
              <a
                className="text-reset footer-link"
                href="https://stalliondigital.ca"
                target="_blank"
                rel="noreferrer"
              >
                Stallion Digital
              </a>
            </p>
          </div>
          <div className="col-12 col-lg-6 order-1 order-lg-2 mx-0 px-0">
            <div className="container justify-content-center align-items-center ">
              <div className="row justify-content-center align-items-center ">
                <div className="col-5 col-md-2 pb-5">
                  <StaticImage
                    src="./../images/footer/mls.png"
                    alt="mls logo"
                  />
                </div>
                <div className="footer-mls col-12 col-md-10 text-start lh-sm ">
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
  );
}
