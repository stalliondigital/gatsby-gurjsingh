import React from "react"
import Layout from "../components/Layout"
import { graphql, useStaticQuery, Link } from "gatsby"
import Helmet from "react-helmet"
import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { navigate } from "gatsby-link"
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons"
import { faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}
export default function About() {
  // data necesary for form submit
  const [state, setState] = React.useState({})

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  const { headerImg, uniImg } = useStaticQuery(
    graphql`
      query {
        headerImg: file(relativePath: { eq: "about/header-img.png" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        uniImg: file(relativePath: { eq: "about/uni-logo.png" }) {
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
        <title>Gurjivan | About</title>
      </Helmet>
      <div className="contact-page">
        <section className="container-fluid buyers-header pb-0 ps-0 ms-0">
          <div className="container-fluid row ps-0 ms-0 ">
            <BackgroundImage
              Tag={`section`}
              id={`test`}
              className="d-none d-md-block col col-md-4 col-lg-6 "
              fluid={headerImg.childImageSharp.fluid}
              alt="Gurjivan portrait"
            ></BackgroundImage>
            <div className="col col-md-8 col-lg-6 ps-10 header py-20">
              <div className="text-start my-20 pb-5 pt-lg-6">
                <h1 className="mb-5 header-title">Gurjivan Singh</h1>
                <p className="header-subtitle">
                  It’s going to be a tough task finding a more studied,
                  reliable, personable, well-connected and hard-working realtor
                  in the Lower Mainland.
                </p>
                <div className="row">
                  <div className="col mt-10 justify-content-start ">
                    <Link
                      className="link btn rounded-0 px-10 py-3"
                      to="/contact"
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container-fuid py-20 d-flex justify-content-center align-items-center">
          <div className="container row mx-0 px-0">
            <div className="col-12 col-lg-6 pb-10">
              <p className="banner-title pb-10">About Gurjivan</p>
              <p className="subtitle text-start">
                Gurj’s entire professional service philosophy forever revolves
                around the Three Tee’s: Truth, Trust and Transparency. Gurj,
                regardless of the industries he’s been in, has built his working
                reputation through working & planning proactively, having clear
                channels of communication, and getting things done the right
                way.
              </p>
            </div>
            <div className="col-12 col-lg-6 pb-10 d-flex justify-content-center align-items-center ">
              <div className="banner row pb-5 pe-10 ps-5">
                <div className="group px-5 col-4 ">
                  <p className="p big-letter text-center">T</p>
                  <p className="small-word text-center">TRUTH</p>
                </div>
                <div className="group px-5 col-4">
                  <p className="p big-letter text-center">T</p>
                  <p className="small-word text-center">TRUST</p>
                </div>
                <div className="group px-5 col-4 d-flex flex-column justify-content-center align-items-center">
                  <p className="p big-letter text-center">T</p>
                  <p className="small-word text-center">TRANSPARENCY</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 pb-10">
              <p className="banner-title pb-10">Why Clients Trust Gurj</p>
              <p className="subtitle text-start">
                Gurj’s duty to his clients is to instill confidence & security
                through each step of the way. Ensuring service is done with
                phenomenal and coherent communication while ensuring to being
                available to his clients whenever needed.
              </p>
            </div>
            <div className="col-12 col-lg-6">
              <p className="subtitle text-start pt-lg-20 mt-6">
                Pair this work ethic and relentless drive with the genuine
                desire of wanting to see all his clients grow & succeed, you’ll
                quickly realize why Gurj has always been considered a natural
                talent in the real estate industry and how he has already wowed
                so many members of our communities.
              </p>
            </div>
          </div>
        </section>
        <section className="container-fluid banner py-20">
          <div className="container">
            <div className="container row justify-content-center">
              <div className="col-12 col-lg-8">
                <p className="banner-title">
                  Thousands of other success stories
                </p>
                <p className="subtitle pt-10 text-start">
                  Still unsure? There’s thousands of other success stories where
                  Gurjivan has helped buyers with their first home purchase.
                  Read more until you are satisfied.
                </p>
              </div>
              <div className="col-12 col-lg-4 mt-10 mt-lg-0 d-flex align-items-center justify-content-center">
                <a
                  href="https://goo.gl/maps/KJs3vYFhrUSz2iRz7"
                  target="_blank"
                  rel="noreferrer"
                  className="card-link btn rounded-0 px-5"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="container- py-20">
          <div className="container">
            <div className="container row justify-content-center">
              <div className="col-12 col-lg-8">
                <p className="banner-title pb-10">Professional History</p>
                <p className="subtitle text-start mb-8">
                  Before becoming an accredited network engineer working as a
                  technical consultant across Pacific Canada while diving into
                  Real Estate, Gurjivan first learned the significance of hard &
                  honest work working nights in the lumber mills during his
                  early teens.
                </p>
                <p className="subtitle text-start mb-8">
                  While attending The University of British Columbia’s Sauder
                  School of Business, Gurjivan started and then sold his first
                  service company where he was able to work and connect with key
                  players in Greater Vancouver's real estate & development
                  industries.
                </p>
                <div className="col-10 banner py-10 d-flex align-items-center justify-content-center">
                  <Img
                    fluid={uniImg.childImageSharp.fluid}
                    alt="Logo of University of British Columbia"
                    className="col-10 px-5 img-fluid"
                  />
                </div>
                <p className="subtitle text-start mb-8 mt-8">
                  Applying his work ethic to his passion of technology and
                  business, Gurjivan was able to move forward from IT consulting
                  & operations to business management & administration where he
                  then began to focus on real estate with the long-term goal of
                  developing and building sustainable, affordable housing.
                </p>
                <p className="subtitle text-start mb-8">
                  Today Gurj continues working toward that goal by actively
                  working as a consultant in the industry, being involved with
                  community development committees and sitting on the boards of
                  local organizations who focus on building our communities up
                  and giving back.
                </p>
              </div>
              <div className="col-12 col-lg-4 mt-10 mt-lg-0 d-flex align-items-center justify-content-center">
                <div className="white-card-body d-none d-md-block">
                  <div className="card-body pt-20 px-10">
                    <p className="small-word pb-10">QUICK LINKS</p>
                    <div className="banner row px-5 py-10">
                      <a
                        className="text-reset text-start footer-icon row pe-0"
                        href="tel:778-951-8275"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="footer-icon col-1 ">
                          <FontAwesomeIcon icon={faPhoneAlt} />
                        </div>
                        <div className="ps-5 pb-5 col text-start quick-links ">
                          778-951-8275
                        </div>
                      </a>
                      <a
                        className="text-reset text-start footer-icon row pe-0"
                        href="mailto:gurj@gurjsingh.ca"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="footer-icon col-1 ">
                          <FontAwesomeIcon icon={faEnvelope} />
                        </div>
                        <div className="ps-5 pb-5 col text-start quick-links ">
                          gurj@gurjsingh.ca
                        </div>
                      </a>
                      <a
                        className="text-reset text-start footer-icon row pe-0"
                        href="https://www.facebook.com/GetGurj"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="footer-icon col-1 ">
                          <FontAwesomeIcon icon={faFacebook} />
                        </div>
                        <div className="ps-5 pb-5 col text-start quick-links ">
                          facebook.com/GetGurj
                        </div>
                      </a>
                      <a
                        className="text-reset text-start footer-icon row pe-0"
                        href="https://www.instagram.com/getgurj/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="footer-icon col-1 ">
                          <FontAwesomeIcon icon={faInstagram} />
                        </div>
                        <div className="ps-5 pb-5 col text-start quick-links ">
                          @getgurj
                        </div>
                      </a>
                      <a
                        className="text-reset text-start footer-icon row pe-0"
                        href="https://twitter.com/getgurj"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="footer-icon col-1 ">
                          <FontAwesomeIcon icon={faTwitter} />
                        </div>
                        <div className="ps-5 pb-5 col text-start quick-links ">
                          @getgurj
                        </div>
                      </a>
                      <a
                        className="text-reset text-start footer-icon row pe-0"
                        href="https://www.linkedin.com/in/getgurj/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="footer-icon col-1 ">
                          <FontAwesomeIcon icon={faLinkedinIn} />
                        </div>
                        <div className="ps-5 pb-5 col text-start quick-links ">
                          in/getgurj
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="buyers-request border-0 container-fluid py-10 align-items-center mb-10">
          <div className="container-request container mb-5 py-20 mt-20">
            <form
              method="post"
              netlify-honeypot="bot-field"
              data-netlify="true"
              name="buyerkit"
              className="g-3 text-center justify-content-center"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="bot-field" onChange={handleChange} />
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
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col">
                      <input
                        type="number"
                        className="form-control rounded-0 border-0"
                        placeholder="Phone Number"
                        aria-label="Phone Number"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col">
                      <input
                        type="email"
                        className="form-control rounded-0 border-0"
                        placeholder="Email Address"
                        aria-label="Email Address"
                        onChange={handleChange}
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
