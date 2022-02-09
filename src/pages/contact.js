import React from "react"
import Layout from "../components/Layout"
import sol_1 from "./../images/contact-1.png"
import sol_2 from "./../images/contact-2.png"
import sol_3 from "./../images/contact-3.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowAltCircleRight as farArrow } from "@fortawesome/free-regular-svg-icons"
export default function Contact() {
  return (
    <Layout>
      <div className="contact-page">
        <section className="solution container-fluid text-lg-start align-items-center pt-10 pb-15">
          <div className=" container-lg max-w-screen-xl   mb-5 ">
            <div className="row justify-content-center pb-8">
              <div className="col-8 ">
                <h2 className="ls-tight font-bolder display-5 text-white text-center mb-2 ">
                  Get In Touch
                </h2>
                <p className=" description text-white fw-light text-center lh-sm fs-4">
                  Interested in working with Gurj? Get in touch with him right
                  away using any of the contact methods below
                </p>
              </div>
            </div>
          </div>
          <div className="card-container container align-items-center ">
            <div className="row justify-content-center row-cols-1 row-cols-lg-3">
              <div className="contact-card col-7 col-lg-4 mb-3 justify-content-center ">
                <a className="text-reset" href="tel:778-951-8275">
                  <div className="card p-4 h-100 ">
                    <div className="card-img p-4">
                      <img
                        src={sol_1}
                        className="card-img-top"
                        alt="a man talking with a cellphone"
                      />
                    </div>
                    <div className="card-body row align-items-center ">
                      <p className="col-10 card-text p-2 text-white fs-4 lh-sm ">
                        Phone
                      </p>
                      <p className="col-10 card-text text-white fs-4 lh-sm fw-bold">
                        778-951-8275
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="contact-card col-7 col-lg-4 mb-3 justify-content-center">
                <a className="text-reset" href="mailto:gurj@gurjsingh.ca">
                  <div className="card p-4 h-100">
                    <div className="card-img p-4">
                      <img
                        src={sol_2}
                        className="card-img-top"
                        alt="a hand holding a smartphone"
                      />
                    </div>
                    <div className="card-body row align-items-center ">
                      <p className="col-10 card-text p-2 text-white fs-4 lh-sm ">
                        Email
                      </p>
                      <p className="col-10 card-text text-white fs-4 lh-sm fw-bold">
                        gurj@gurjsingh.ca
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="contact-card col-7 col-lg-4 mb-3 justify-content-center">
                <a
                  className="text-reset"
                  href="https://twitter.com/getgurj"
                  target="_blank"
                >
                  <div className="card p-4 h-100">
                    <div className="card-img p-4">
                      <img
                        src={sol_3}
                        className="card-img-top"
                        alt="a publication with likes and hearts"
                      />
                    </div>
                    <div className="card-body row align-items-center ">
                      <p className="col-10 card-text p-2 text-white fs-4 lh-sm ">
                        Social Media
                      </p>
                      <p className="col-10 card-text text-white fs-4 lh-sm fw-bold">
                        @getgurj
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="contact-request container-fluid text-lg-start pb-10 align-items-center ">
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
              <div className="form-data row justify-content-center d-flex align-items-center  g-3 px-10">
                <div className="col-9 col-lg-3">
                  <input
                    type="text"
                    className="form-control bg-white bg-opacity-50 border-0"
                    placeholder="Name"
                    aria-label="Name"
                  />
                </div>
                <div className="col-9 col-lg-3">
                  <input
                    type="number"
                    className="form-control bg-white bg-opacity-50 border-0"
                    placeholder="Phone Number"
                    aria-label="Phone Number"
                  />
                </div>
                <div className="col-9 col-lg-3">
                  <input
                    type="email"
                    className="form-control bg-white bg-opacity-50 border-0"
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
