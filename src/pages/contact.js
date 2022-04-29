import React from "react"
import Layout from "../components/Layout"
import { graphql, useStaticQuery, Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowAltCircleRight as farArrow } from "@fortawesome/free-regular-svg-icons"
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons"
import { faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import Helmet from "react-helmet"
import { StaticImage } from "gatsby-plugin-image"
export default function Contact() {
  const { headerImg } = useStaticQuery(
    graphql`
      query {
        headerImg: file(relativePath: { eq: "contact/header-img.png" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Gurjivan | Contact</title>
      </Helmet>
      <div className="contact-page">
        <section className="container-fluid buyers-header pb-0 ps-0 ms-0 d-flex justify-content-center">
          <div className="container row ps-0 ms-0 ">
            <BackgroundImage
              Tag={`section`}
              id={`test`}
              className="d-none d-md-block col col-md-4 col-lg-4 "
              fluid={headerImg.childImageSharp.fluid}
            ></BackgroundImage>
            <div className="col col-md-8 col-lg-8 ps-10 header py-20">
              <div className="text-start my-20 pb-5 pt-lg-6">
                <h1 className="mb-5 header-title">Get In Touch</h1>
                <p className="header-subtitle">
                  Interested in working with Gurj? Get in touch with him right
                  away by using any of the contact methods below.
                </p>
                <div className="row">
                  <div className="col mt-10 justify-content-start ">
                    <a
                      className="link btn rounded-0 px-10 py-3"
                      href="mailto:gurj@gurjsingh.ca"
                    >
                      Send Email
                    </a>
                    <a
                      className="ps-5 pe-2"
                      href="tel:778-951-8275"
                      target="_blank"
                    >
                      <div className="small-word d-inline">
                        <FontAwesomeIcon icon={faPhoneAlt} />
                      </div>
                    </a>
                    <a
                      className="px-2"
                      href="https://www.facebook.com/GetGurj"
                      target="_blank"
                    >
                      <div className="small-word d-inline">
                        <FontAwesomeIcon icon={faFacebook} />
                      </div>
                    </a>
                    <a
                      className="px-2"
                      href="https://www.instagram.com/getgurj/"
                      target="_blank"
                    >
                      <div className="small-word d-inline">
                        <FontAwesomeIcon icon={faInstagram} />
                      </div>
                    </a>
                    <a
                      className="px-2"
                      href="https://twitter.com/getgurj"
                      target="_blank"
                    >
                      <div className="small-word d-inline">
                        <FontAwesomeIcon icon={faTwitter} />
                      </div>
                    </a>
                    <a
                      className="px-2"
                      href="https://www.linkedin.com/in/getgurj/"
                      target="_blank"
                    >
                      <div className="small-word d-inline">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container-fluid">
          <div className="container px-0 mx-0 p-md-auto m-md-auto">
            <div className="card-container container align-items-center mt-20">
              <div className="row justify-content-center row-cols-1 row-cols-lg-3 mt-0 pt-0">
                <div className="col col-md-7 col-lg-4 mb-3 ">
                  <div className="card p-4 h-100 mt-0 pt-0">
                    <a className="" href="tel:778-951-8275" target="_blank">
                      <div className="card-body ">
                        <p className="card-header p-2 text-center">
                          Phone Number
                        </p>
                      </div>
                      <div className="card-img d-flex justify-content-center ">
                        <StaticImage
                          src="./../images/contact/contact.png"
                          alt="Two people talking about the home buying process"
                        />
                      </div>
                      <div className="text-container py-5">
                        <p className="small-word text-center">778-951-8275</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col col-md-7 col-lg-4 mb-3 ">
                  <div className="card p-4 h-100 mt-0 pt-0">
                    <a
                      className="link btn rounded-0 py-3"
                      href="mailto:gurj@gurjsingh.ca"
                    >
                      <div className="card-body ">
                        <p className="card-header p-2 text-center">
                          Email Address
                        </p>
                      </div>
                      <div className="card-img d-flex justify-content-center ">
                        <StaticImage
                          src="./../images/contact/contact.png"
                          alt="Two people talking about the home buying process"
                        />
                      </div>
                      <div className="text-container py-5">
                        <p className="small-word text-center">
                          gurj@gurjsingh.ca
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col col-md-7 col-lg-4 mb-3 ">
                  <div className="card p-4 h-100 mt-0 pt-0">
                    <div className="card-body ">
                      <p className="card-header p-2 text-center">
                        Social Media
                      </p>
                    </div>
                    <div className="card-img d-flex justify-content-center ">
                      <StaticImage
                        src="./../images/contact/contact.png"
                        alt="Two people talking about the home buying process"
                      />
                    </div>
                    <div className="text-container py-5 justify-content-center text-center">
                      <p className="small-word text-center d-inline">
                        @getgurj
                      </p>
                      <div className="col mt-10 justify-content-start d-inline ">
                        <a
                          className="px-2"
                          href="https://www.facebook.com/GetGurj"
                          target="_blank"
                        >
                          <div className="small-word d-inline">
                            <FontAwesomeIcon icon={faFacebook} />
                          </div>
                        </a>
                        <a
                          className="px-2"
                          href="https://www.instagram.com/getgurj/"
                          target="_blank"
                        >
                          <div className="small-word d-inline">
                            <FontAwesomeIcon icon={faInstagram} />
                          </div>
                        </a>
                        <a
                          className="px-2"
                          href="https://twitter.com/getgurj"
                          target="_blank"
                        >
                          <div className="small-word d-inline">
                            <FontAwesomeIcon icon={faTwitter} />
                          </div>
                        </a>
                        <a
                          className="px-2"
                          href="https://www.linkedin.com/in/getgurj/"
                          target="_blank"
                        >
                          <div className="small-word d-inline">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="buyers-request border-0 container-fluid align-items-center mb-10">
          <div className="container-request container mb-5 py-20 ">
            <form
              method="post"
              netlify-honeypot="bot-field"
              data-netlify="true"
              name="buyerkit"
              className="g-3 text-center justify-content-center"
            >
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="buyerkit" />
              <div className="row py-5">
                <div className="col d-flex flex-column flex-lg-row row">
                  <div className="col col-lg-7 px-10 justify-content-center d-flex flex-column align-items-center align-items-lg-start">
                    <h2 className="title text-center text-lg-start pb-10">
                      Book your first meeting with Gurjivan
                    </h2>
                    <p className="subtitle text-center text-lg-start mb-10 lh-sm">
                      Enter your details and Gurjivan will get in touch with you
                      as soon as possible.
                    </p>
                  </div>
                  <div className="col form-data row row-cols-1 justify-content-center d-flex align-items-center g-3 px-10">
                    <div className="col ">
                      <input
                        type="text"
                        className="form-control rounded-0 border-0"
                        placeholder="Name"
                        aria-label="Name"
                      />
                    </div>
                    <div className="col">
                      <input
                        type="number"
                        className="form-control rounded-0 border-0"
                        placeholder="Phone Number"
                        aria-label="Phone Number"
                      />
                    </div>
                    <div className="col">
                      <input
                        type="email"
                        className="form-control rounded-0 border-0"
                        placeholder="Email Address"
                        aria-label="Email Address"
                      />
                    </div>
                    <div className="col d-grid">
                      <button className="button link py-2 " type="submit">
                        Contact
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </Layout>
  )
}
