import React from "react"
import Layout from "../components/Layout"
import contactImage from "./../images/contact-gurjivan-image.png"
import backgroundimage from "./../images/background_about.png"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowAltCircleRight as farArrow } from "@fortawesome/free-regular-svg-icons"
export default function About() {
  return (
    <Layout>
      <div className="contact-page">
        <section
          className="home position-relative pt-48 pb-20 mb-10  bg-cover bg-size--cover"
          style={{ background: `url(${backgroundimage})` }}
        >
          <div className="container-lg max-w-screen-xl position-relative overlap-10 text-center pt-5 pb-20 pt-lg-6 ps-lg-0 ms-lg-0 justify-content-lg-start">
            <div className="row row-grid align-items-center justify-content-center justify-content-lg-start text-center pb-20">
              <div className="header rounded-4 rounded-lg-start-0 bg-black bg-opacity-50 p-10 col-8 justify-content-lg-end col-lg-5 text-start">
                <h1 className="ls-tight font-bolder display-5 text-white pb-5 ps-10">
                  Gurjivan Singh
                </h1>
                <p className="text-white text-opacity-80 lead lh-sm ps-10">
                  It’s going to be a tough task finding a more studied,
                  reliable, personable, well-connected and hard-working realtor
                  in the Lower Mainland.
                </p>
                <div className="row justify-content-start ps-10">
                  <div className="col-6 mt-10 pe-0">
                    <Link
                      to="/contact"
                      className="primary btn border-none shadow-sm mx-2"
                    >
                      Contact Gurjivan
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="phases container-fluid text-lg-start align-items-center">
          <div className="container-fluid ">
            {/* PART: First Time Home Buyer’s Tax Credit (HBTC) */}
            <div className="d-flex flex-column flex-lg-row justify-content-between ">
              <div className="justify-content-center container-discover  rounded-4 m-5 p-10 pt-3  pe-20">
                <h3 className="text-white display-6 pb-5 pt-5 ">About Gurj</h3>
                <p className="contact-description description text-white fw-light lh-sm fs-5 pb-5 ">
                  Gurj’s entire professional service philosophy forever revolves
                  around the Three Tee’s: Truth, Trust and Transparency. Gurj,
                  regardless of the industries he’s been in, has built his
                  working reputation through working & planning proactively,
                  having clear channels of communication, and getting things
                  done the right way.
                </p>
                <p className="contact-description description text-white fw-light lh-sm fs-5 pb-5 ">
                  Gurj’s duty to his clients is to instill confidence & security
                  through each step of the way. Ensuring service is done with
                  phenomenal and coherent communication while ensuring to being
                  available to his clients whenever needed.
                </p>
                <p className="contact-description description text-white fw-light lh-sm fs-5 ">
                  Pair this work ethic and relentless drive with the genuine
                  desire of wanting to see all his clients grow & succeed,
                  you’ll quickly realize why Gurj has always been considered a
                  natural talent in the real estate industry and how he has
                  already wowed so many members of our communities.
                </p>
              </div>
              <div className="justify-content-center container-discover rounded-4 m-5 p-10 pt-3 pe-20">
                <h3 className="text-white display-6 pb-5 pt-5 ">
                  Professional History
                </h3>
                <p className="contact-description description text-white fw-light lh-sm fs-5 pb-5 ">
                  Before becoming an accredited network engineer working as a
                  technical consultant across Pacific Canada while diving into
                  Real Estate, Gurjivan first learned the significance of hard &
                  honest work working nights in the lumber mills during his
                  early teens.
                </p>
                <p className="contact-description description text-white fw-light lh-sm fs-5 pb-5 ">
                  While attending The University of British Columbia’s Sauder
                  School of Business, Gurjivan started and then sold his first
                  service company where he was able to work and connect with key
                  players in Greater Vancouver's real estate & development
                  industries.
                </p>
                <p className="contact-description description text-white fw-light lh-sm fs-5 pb-5">
                  Applying his work ethic to his passion of technology and
                  business, Gurjivan was able to move forward from IT consulting
                  & operations to business management & administration where he
                  then began to focus on real estate with the long-term goal of
                  developing and building sustainable, affordable housing.
                </p>
                <p className="contact-description description text-white fw-light lh-sm fs-5 ">
                  Today Gurj continues working toward that goal by actively
                  working as a consultant in the industry, being involved with
                  community development committees and sitting on the boards of
                  local organizations who focus on building our communities up
                  and giving back
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="request container-fluid text-lg-start pt-20 pb-15 align-items-center ">
          <div className="container-request container container-lg max-w-screen-lg mb-5 rounded-3 py-5 pb-10 ">
            <form
              method="post"
              netlify-honeypot="bot-field"
              data-netlify="true"
              name="meeting"
              className="g-3 text-center justify-content-center"
            >
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="contact" />
              <div className="row justify-content-center pb-5">
                <div className="col col-lg-7">
                  <h2 className="ls-tight font-bolder display-5 text-white ">
                    Book your first meeting with Gurjivan
                  </h2>
                </div>
              </div>
              <div className="form-data row justify-content-center  d-flex align-items-center  g-3 px-10">
                <div className="col-9 col-lg-3">
                  <input
                    type="text"
                    className="form-control border-0"
                    placeholder="Name"
                    aria-label="Name"
                  />
                </div>
                <div className="col-9 col-lg-3">
                  <input
                    type="number"
                    className="form-control border-0"
                    placeholder="Phone Number"
                    aria-label="Phone Number"
                  />
                </div>
                <div className="col-9 col-lg-3">
                  <input
                    type="email"
                    className="form-control border-0"
                    placeholder="Email Address"
                    aria-label="Email Address"
                  />
                </div>
                <div className="arrow-icon col-9 col-lg-1 ">
                  <button className="py-0" type="submit">
                    <FontAwesomeIcon icon={farArrow} className="fa-icon" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </Layout>
  )
}
