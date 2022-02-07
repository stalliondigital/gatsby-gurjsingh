import React from "react"
import Layout from "../components/Layout"
import sol_1 from "./../images/contact-1.png"
import sol_2 from "./../images/contact-2.png"
import sol_3 from "./../images/contact-3.png"
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
              <div className="col-7 col-lg-4 mb-3 justify-content-center ">
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
              <div className="col-7 col-lg-4 mb-3 justify-content-center">
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
              <div className="col-7 col-lg-4 mb-3 justify-content-center">
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
                        alt="a post with likes and hearts"
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
      </div>
    </Layout>
  )
}
