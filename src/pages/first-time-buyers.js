import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import backgroundimage from "./../images/background_ftbuyers.png"
import inv_1 from "./../images/first-time-1.png"
import inv_2 from "./../images/first-time-2.png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons"
import { faArrowAltCircleRight as farArrow } from "@fortawesome/free-regular-svg-icons"
import Stars from "../components/Stars"

const sectionBackground = {
  background: `linear-gradient(0deg, #181819 3%, transparent 30% ),
      url(${backgroundimage})`,
}
export default function Home() {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Gurjivan | First Time Buyers</title>
      </Helmet>
      <div>
        <section
          className="home position-relative pt-48 pb-20  bg-cover bg-size--cover"
          style={sectionBackground}
        >
          <div className="container-lg max-w-screen-xl position-relative overlap-10 text-center pt-5 pb-15 pb-lg-20 pt-lg-6 ps-lg-0 ms-lg-0 justify-content-lg-start">
            <div className="row row-grid align-items-center justify-content-center justify-content-lg-start text-center pb-20">
              <div className="header rounded-4 rounded-lg-start-0 bg-black bg-opacity-50 p-10 pb-lg-20 col-8 justify-content-lg-end col-lg-5 col-xl-7 text-start text-lg-center">
                <h1 className="font-bolder display-5 text-white ">
                  First Time Home
                </h1>
                <h1 className="font-bolder display-5 text-white mb-5">
                  Buyers in BC
                </h1>
                <p className="text-white text-opacity-80 fs-3 lh-sm">
                  Helping You Make it Make Sense
                </p>
                <div className="row justify-content-start justify-content-lg-center">
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

        <section className="phases container-fluid text-lg-start align-items-center pt-20">
          <div className=" container-lg max-w-screen-xl   mb-5 pb-10">
            <div className="container">
              <h2 className="phase text-center fs-5 fw-light">
                FIRST TIME BUYERS
              </h2>
              <h2 className="ls-tight font-bolder display-5 text-white text-center mb-2 ">
                What you need to know
              </h2>
              <div className="row justify-content-center">
                <div className="col-8">
                  <p className="description text-white fw-light text-center lh-sm fs-5 ">
                    Entering the market as a first time home buyer, you may be
                    able to qualify for incentives to help you maximize your
                    buying power while helping you save for long term financial
                    growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="phases container-fluid text-lg-start align-items-center pt-10 pb-0">
          <div className="container align-items-center">
            <div className="row justify-content-center align-items-center">
              <div className="first-time col-10 col-lg-5 rounded-5">
                <h2 className="text-white p-5 pt-10 text-center fs-3 lh-sm">
                  WHAT ARE THE INCENTIVES AND WHAT DO THEY DO?
                </h2>
                <div className="d-flex justify-content-center pb-10">
                  <img
                    src={inv_2}
                    className="img-fluid pe-lg-7 mx-auto"
                    alt="a person drawing graphs on a whiteboard"
                  />
                </div>
              </div>
              <div className="col-10 col-lg-7">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item rounded-4 mb-4">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button text-white fs-4 d-grid"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        <div className="row">
                          <div className="col">
                            First Time Home Buyers Program
                          </div>
                          <div className="col-1">
                            <FontAwesomeIcon
                              className="font-awesome fs-1 icon"
                              icon={faCaretLeft}
                            />
                          </div>
                        </div>
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show "
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body row">
                        <p className="col-8 description text-white fw-light lh-sm fs-5 pb-5">
                          Reduces or eliminates the amount of Property Transfer
                          Tax (commonly referred to as PTT) when you purchase
                          your first home. Find out more and see if you qualify{" "}
                          <a
                            className="text-reset first-time-link"
                            target="_blank"
                            href="https://www2.gov.bc.ca/gov/content/taxes/property-taxes/property-transfer-tax/exemptions/first-time-home-buyers"
                          >
                            here
                          </a>
                          .
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item rounded-4 mb-4">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed text-white fs-4 d-grid"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        <div className="row ">
                          <div className="col">
                            First Time Home Buyer’s Tax Credit (HBTC)
                          </div>
                          <div className="col-1">
                            <FontAwesomeIcon
                              className="font-awesome fs-1 icon"
                              icon={faCaretLeft}
                            />
                          </div>
                        </div>
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p className="description text-white fw-light lh-sm fs-5 pe-20 pb-5 ">
                          This tax credit offers a $5,000 non-refundable amount
                          when you file your tax return the following year. The
                          credit offers you up to $750. TO find out if you are
                          eligible, speak to your accountant and see additional
                          information{" "}
                          <a
                            className="text-reset first-time-link"
                            target="_blank"
                            href="https://www2.gov.bc.ca/gov/content/taxes/property-taxes/property-transfer-tax/exemptions/first-time-home-buyers"
                          >
                            here
                          </a>
                          .
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item rounded-4">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed text-white fs-4 d-grid"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        <div className="row ">
                          <div className="col">RRSP Home Buyers Plan (HBP)</div>
                          <div className="col-1">
                            <FontAwesomeIcon
                              className="font-awesome fs-1 icon"
                              icon={faCaretLeft}
                            />
                          </div>
                        </div>
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p className="description text-white fw-light lh-sm fs-5 ">
                          HBP is a program designed to assist first-time buyers
                          in purchasing their first property by giving you the
                          ability withdraw up to $25,000 (or $50,000 combined
                          with your partner) in a single year from your
                          Registered Retirement Savings Plan (RRSP) to be used
                          towards the purchase of a qualifying property. Find
                          more information and see if you can qualify{" "}
                          <a
                            className="text-reset first-time-link"
                            target="_blank"
                            href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/rrsps-related-plans/what-home-buyers-plan.html"
                          >
                            here
                          </a>
                          .
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container container-fluid mt-5">
            {/* PART: What to do with this info?. */}
            <div className="container container-info py-10 row d-flex align-items-center justify-content-center mt-10 rounded-4">
              <div className="col-10 justify-content-center">
                <h3 className="text-white display-5 pb-3 text-center pt-20">
                  What to do with this info?
                </h3>
                <p className="description text-center text-white fw-light lh-sm fs-4 pb-20 ">
                  We know this can be a lot of overwhelming info and is why we
                  encourage all of our first time buyers to sit down with Gurj
                  to discuss their situation one-on-one. Having a conversation
                  with an experienced industry professional will only help you
                  organize and plan success in our market.{" "}
                  <Link className="text-reset first-time-link" to="/contact">
                    Click here
                  </Link>{" "}
                  to get in contact with Gurj as well as to receive a full
                  first-time buyers kit with additional details regarding the
                  info on this page.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* break line */}
        <section className="experience container-fluid text-lg-start align-items-center p-0 my-0 mx-0">
          <div className="experience-inside container-lg text-lg-start py-20">
            <div className="experience-container container-lg mb-5 mb-20">
              <div className="row d-flex justify-content-center">
                <div className="col col-lg-6 ">
                  <h2 className="display-5 text-white mb-5 text-center pb-5">
                    Words from some of Gurj’s First Time Buyers
                  </h2>
                </div>
              </div>
              <div className="container-sm row my-5 g-4 justify-content-center lh-sm">
                <div className="row justify-content-center col-12 col-lg-11">
                  <div className="card-container col-8 col-lg-5 mb-5">
                    <div className="card-testimonial card m-15 m-lg-3 h-100">
                      <div className="card-body p-5 text-start">
                        <p className="">
                          “I had a fantastic experience working with Gurjivan.
                          Always responsive and patient whenever I had questions
                          and concerns. Definitely would recommend for any first
                          time home buyer looking for a home 👍”
                        </p>
                      </div>
                      <div className="card-footer d-flex justify-content-between">
                        <span>Brian M.</span>
                        <Stars />
                      </div>
                    </div>
                  </div>
                  <div className="card-container col-8 col-lg-5 mb-5 ">
                    <div className="card-testimonial card m-15 m-lg-3 h-100">
                      <div className="card-body p-5 text-start">
                        <p className="">
                          “Extremely fantastic professional. Great to work with
                          and knows what needs to get done. Pleased to have been
                          serviced by him.”
                        </p>
                      </div>
                      <div className="card-footer d-flex justify-content-between">
                        <span>Matthew A.</span>
                        <Stars />
                      </div>
                    </div>
                  </div>
                  <div className="card-container col-8 col-lg-5 ">
                    <div className="card-testimonial card m-15 m-lg-3 h-100">
                      <div className="card-body p-5 text-start">
                        <p className="">
                          “Professional and easy to work with. I was left with
                          an great impression and would highly recommend
                          Gurjivan.”
                        </p>
                      </div>
                      <div className="card-footer d-flex justify-content-between">
                        <span>Sherman G.</span>
                        <Stars />
                      </div>
                    </div>
                  </div>
                  <div className="card-container col-8 col-lg-5 ">
                    <div className="card-testimonial card m-15 m-lg-3 h-100">
                      <div className="card-body p-5 text-start">
                        <p className="">
                          “Exceptional communication, professionalism and a
                          get-it-done attitude. My family and I have worked with
                          all types of Realtors over years and I am honestly
                          surprised and excited by Gurj’s professionals &
                          ability to produce results. “
                        </p>
                      </div>
                      <div className="card-footer d-flex justify-content-between">
                        <span>Harman B.</span>
                        <Stars />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="phases container-fluid text-lg-start align-items-center pt-0 mt-0">
          <div className="container container-fluid pt-0 mt-0">
            {/* PART: Better Data, Better Results, Better Returns */}
            <div className="row align-items-center justify-content-start ">
              <div className="col-12 col-lg-8">
                <h3 className="text-white display-5 pb-7 ">
                  Why go with Gurj?
                </h3>
                <p className="description text-white fw-light lh-sm fs-5 pe-7 pb-5">
                  Gurjivan specializes in working with both first time buyers
                  and investors. Much of Gurj’s realty work falls in two
                  categories: Helping maximize opportunities for his first time
                  buyers and helping his investors maximize their return on
                  their capital.
                </p>
                <p className="description text-white fw-light lh-sm fs-5 pe-7 ">
                  This combination has allowed Gurjivan to develop his skillset
                  to assist first time buyers to best navigate and explore the
                  market together and set up his first time buying clients with
                  a plan for long term financial success. And as a young man
                  himself, you’re going to be hard pressed to find another
                  professional with the same strengths that understands first
                  hand how challenging this market can be for first time buyers.
                </p>
              </div>
              <div className="d-flex align-items-center justify-content-center col-9 col-lg-4 pb-7 pb-lg-2">
                <img
                  src={inv_1}
                  className="img-fluid pe-lg-6 "
                  alt="a person with his hand on his head"
                />
              </div>
            </div>
            {/* PART: Our Onboarding Consultation */}
          </div>
        </section>

        <section className="request container-fluid text-lg-start pb-10 align-items-center ">
          {/* PART: What to do with this info?. */}
          <div className="py-10 row d-flex align-items-center justify-content-center ">
            <div className="col-10 justify-content-center">
              <h3 className="text-white display-5 pb-3 text-center">
                Next Steps for First Time Buyers
              </h3>
              <p className="description text-white fw-light lh-sm fs-4 text-center">
                The best thing a first-time buyer can do is reach out to a real
                estate professional to begin planning for their success. To
                discuss with Gurj further regarding all the relevant information
                applicable to you, please feel free to fill in your details
                below to book your first meeting.
              </p>
            </div>
          </div>
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

        <section className="phases container-fluid text-lg-start align-items-center ">
          <div className="container">
            <h2 className="ls-tight font-bolder display-5 text-white text-center mb-2 ">
              Additional Benefits & Information
            </h2>
          </div>
          <div className="container container-fluid ">
            {/* PART: Getting Preapproved */}
            <div className="pt-20 row align-items-start justify-content-center ">
              <div className="col-12 collapse-card">
                <a
                  className="text-white fs-4 accordion-button collapsed d-grid"
                  data-bs-toggle="collapse"
                  href="#collapseOnboarding"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseOnboarding"
                >
                  <div className="row ">
                    <div className="col">GST New Housing Rebate</div>
                    <div className="col-1">
                      <FontAwesomeIcon
                        className="font-awesome fs-1 icon"
                        icon={faCaretLeft}
                      />
                    </div>
                  </div>
                </a>
                <div className="collapse " id="collapseOnboarding">
                  <div className="accordion-description fw-light lh-sm fs-5 p-8 pt-0">
                    You may be eligible for a tax rebate on a portion of the GST
                    paid as part of the purchase or construction of a new home.
                    You make also be legible for a rebate of the cost of
                    substantially renovating your property, building an add-on
                    to your existing home or converting a commercial property to
                    residential only if the fair market of the is under
                    $450,000.
                  </div>
                </div>
              </div>
            </div>

            {/* PART: Home Staging & Décor */}
            <div className="pt-5 row align-items-start justify-content-center ">
              <div className="col-12 collapse-card">
                <a
                  className="text-white fs-4 accordion-button collapsed d-grid"
                  data-bs-toggle="collapse"
                  href="#collapseHome"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseHome"
                >
                  <div className="row ">
                    <div className="col">Home Owner Grant</div>
                    <div className="col-1">
                      <FontAwesomeIcon
                        className="font-awesome fs-1 icon"
                        icon={faCaretLeft}
                      />
                    </div>
                  </div>
                </a>
                <div className="collapse " id="collapseHome">
                  <div className="accordion-description fw-light lh-sm fs-5 p-8 pt-0">
                    Under the B.C Home Owner Grant, you may be eligible to lower
                    the amount of property taxes you pay on an annual basis on
                    your principal residence. View more information,{" "}
                    <a
                      className="text-reset first-time-link"
                      target="_blank"
                      href="https://www2.gov.bc.ca/gov/content/taxes/property-taxes/annual-property-tax/home-owner-grant"
                    >
                      here
                    </a>
                    .
                  </div>
                </div>
              </div>
            </div>

            {/* PART: Exterior Facelifts */}
            <div className="pt-5 row align-items-start justify-content-center ">
              <div className="col-12 collapse-card">
                <a
                  className="text-white fs-4 accordion-button collapsed d-grid"
                  data-bs-toggle="collapse"
                  href="#collapseExterior"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExterior"
                >
                  <div className="row ">
                    <div className="col">RRSP Home Buyers Plan (HBP)</div>
                    <div className="col-1">
                      <FontAwesomeIcon
                        className="font-awesome fs-1 icon"
                        icon={faCaretLeft}
                      />
                    </div>
                  </div>
                </a>
                <div className="collapse " id="collapseExterior">
                  <div className="accordion-description fw-light lh-sm fs-5 p-8 pt-0">
                    Buying a newly built home in B.C? You may be eligible for
                    this exemption which helps lower or eliminate the amount of
                    property transfer tax you’re required to pay when you’re
                    buying a newly build home $750,000 or less. Find out more{" "}
                    <a
                      className="text-reset first-time-link"
                      target="_blank"
                      href="https://www2.gov.bc.ca/gov/content/taxes/property-taxes/property-transfer-tax/exemptions/newly-built-home-exemption"
                    >
                      here
                    </a>
                    .
                  </div>
                </div>
              </div>
            </div>

            {/* PART: Professional Photography & Videography */}
            <div className="pt-5 row align-items-start justify-content-center ">
              <div className="col-12 collapse-card">
                <a
                  className="text-white fs-4 accordion-button collapsed d-grid"
                  data-bs-toggle="collapse"
                  href="#collapseProfessional"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseProfessional"
                >
                  <div className="row ">
                    <div className="col">
                      What is Property Transfer Tax (PTT)
                    </div>
                    <div className="col-1">
                      <FontAwesomeIcon
                        className="font-awesome fs-1 icon"
                        icon={faCaretLeft}
                      />
                    </div>
                  </div>
                </a>
                <div className="collapse " id="collapseProfessional">
                  <div className="accordion-description fw-light lh-sm fs-5 p-8 pt-0">
                    PTT is a tax payable to the provincial government by the
                    purchasers of all types of real estate (commercial,
                    residential, industrial). To find out how PTT is calculated,
                    please see{" "}
                    <a
                      className="text-reset first-time-link"
                      target="_blank"
                      href="https://forms2.gov.bc.ca/forms/content?id=EEE44ACAC0DB4212BB616D7BD233F2A6"
                    >
                      here
                    </a>
                    .
                  </div>
                </div>
              </div>
            </div>

            {/* end phases */}
          </div>
        </section>
      </div>
    </Layout>
  )
}
