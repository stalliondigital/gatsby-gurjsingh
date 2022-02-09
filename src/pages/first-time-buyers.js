import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import backgroundimage from "./../images/background_ftbuyers.png"
import inv_1 from "./../images/first-time-1.png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowAltCircleDown } from "@fortawesome/free-solid-svg-icons"
import { faArrowAltCircleRight as farArrow } from "@fortawesome/free-regular-svg-icons"
export default function Home() {
  return (
    <Layout>
      <div>
        <section
          className="home position-relative pt-48 pb-20  bg-cover bg-size--cover"
          style={{ background: `url(${backgroundimage})` }}
        >
          <div className="container-lg max-w-screen-xl position-relative overlap-10 text-center pt-5 pb-5 pt-lg-6 pe-lg-0 me-lg-0 justify-content-lg-end">
            <div className="row row-grid align-items-center justify-content-center justify-content-lg-end text-center">
              <div className="header rounded-4 rounded-lg-end-0 bg-black bg-opacity-50 p-10 col-8 justify-content-lg-end col-lg-6 text-start">
                <h1 className="ls-tight font-bolder display-5 text-white ">
                  First Time Home
                </h1>
                <h1 className="ls-tight font-bolder display-5 text-white mb-5">
                  Buyers in BC
                </h1>
                <p className="lead text-white text-opacity-80 fs-5 lh-sm">
                  Helping You Make it Make Sense
                </p>
                <div className="row justify-content-start">
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
          <div className=" container-lg max-w-screen-xl  pb-5 mb-5 ">
            <div className="container">
              <h2 className="ls-tight font-bolder display-5 text-white text-center mb-2 ">
                What are the incentives and what do they do?
              </h2>
            </div>
          </div>
        </section>
        <div className="break container-fluid">
          <h2>
            <span>
              <FontAwesomeIcon
                className="font-awesome fs-1"
                icon={faArrowAltCircleDown}
              />
            </span>
          </h2>
        </div>
        <section className="phases container-fluid text-lg-start align-items-center pt-10">
          <div className="container container-fluid ">
            {/* PART: First Time Home Buyers Program */}
            <div className="py-10 row align-items-start justify-content-start ">
              <div className="col-12">
                <h3 className="text-white fs-4 pb-3 ">
                  First Time Home Buyers Program
                </h3>
                <p className="description text-white fw-light lh-sm fs-5 ">
                  Reduces or eliminates the amount of Property Transfer Tax
                  (commonly referred to as PTT) when you purchase your first
                  home. Find out more and see if you qualify{" "}
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
            {/* PART: First Time Home Buyer’s Tax Credit (HBTC) */}
            <div className="py-10 row align-items-start justify-content-start ">
              <div className="col-12">
                <h3 className="text-white fs-4 pb-3 ">
                  First Time Home Buyer’s Tax Credit (HBTC)
                </h3>
                <p className="description text-white fw-light lh-sm fs-5 ">
                  This tax credit offers a $5,000 non-refundable amount when you
                  file your tax return the following year. The credit offers you
                  up to $750. TO find out if you are eligible, speak to your
                  accountant and see additional information{" "}
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
            {/* PART: Why Information is King. */}
            <div className="py-10 row align-items-start justify-content-start ">
              <div className="col-12">
                <h3 className="text-white fs-4 pb-3 ">
                  RRSP Home Buyers Plan (HBP)
                </h3>
                <p className="description text-white fw-light lh-sm fs-5 ">
                  HBP is a program designed to assist first-time buyers in
                  purchasing their first property by giving you the ability
                  withdraw up to $25,000 (or $50,000 combined with your partner)
                  in a single year from your Registered Retirement Savings Plan
                  (RRSP) to be used towards the purchase of a qualifying
                  property. Find more information and see if you can qualify{" "}
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
            {/* PART: What to do with this info?. */}
            <div className="py-10 row d-flex align-items-center justify-content-center ">
              <div className="col-10 justify-content-center">
                <h3 className="text-white display-5 pb-3 text-center">
                  What to do with this info?
                </h3>
                <p className="description text-white fw-light lh-sm fs-5 ">
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
        <div className="break container-fluid">
          <h2></h2>
        </div>
        <section className="phases container-fluid text-lg-start align-items-center pt-20">
          <div className="container container-fluid ">
            {/* PART: Better Data, Better Results, Better Returns */}
            <div className="row align-items-center justify-content-start pt-10">
              <div className="col-12 col-lg-8">
                <h3 className="text-white display-5 pb-7 ">
                  Why go with Gurj?
                </h3>
                <p className="description text-white fw-light lh-sm fs-5 pe-7 pb-5">
                  Gurjivan specializes in working with both first time buyers
                  and investors. Much of Gurj’s realty work falls in two
                  categories: Helping you maximize your opportunities for his
                  first time buyers and helping his investors maximize their
                  return on their capital.
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
        <section className="experience container-fluid text-lg-start pt-lg-6 align-items-center py-10 pb-10">
          <div className="experience-inside container-fluid text-lg-start">
            <div className="experience-container container-lg max-w-screen-xl   mb-5 ">
              <div className="row d-flex justify-content-center">
                <div className="col col-lg-6 ">
                  <h2 className="ls-tight font-bolder display-5 text-white mb-5 text-center pb-5">
                    Words from some of Gurj’s First Time Buyers
                  </h2>
                </div>
              </div>
              <div className="row my-5 g-4 justify-content-center row-cols-1 row-cols-lg-3  lh-sm">
                <div className="card-container col-8 col-lg-4 ">
                  <div className="card-testimonial card m-15 m-lg-3 h-100">
                    <div className="card-body p-5 text-start">
                      <p className="">
                        “I had a fantastic experience working with Gurjivan.
                        Always responsive and patient whenever I had questions
                        and concerns. Definitely would recommend for any first
                        time home buyer looking for a home 👍”
                      </p>
                    </div>
                    <div className="card-footer">Brian Marquez</div>
                  </div>
                </div>
                <div className="card-container col-8 col-lg-4 ">
                  <div className="card-testimonial card m-15 m-lg-3 h-100">
                    <div className="card-body p-5 text-start">
                      <p className="">
                        “Extremely fantastic professional. Great to work with
                        and knows what needs to get done. Pleased to have been
                        serviced by him.”
                      </p>
                    </div>
                    <div className="card-footer">Matthew de Asis</div>
                  </div>
                </div>
                <div className="card-container col-8 col-lg-4">
                  <div className="card-testimonial card m-15 m-lg-3 h-100">
                    <div className="card-body p-5 text-start">
                      <p className="">
                        “We are new to the area we were looking to buy in. Gurj
                        walked us through each step of the way and prioritized
                        what we needed from a home rather than just trying to
                        make a sale. Safe to say, we've found our family agent.”
                      </p>
                    </div>
                    <div className="card-footer">Rahul A</div>
                  </div>
                </div>
                <div className="card-container col-8 col-lg-4 ">
                  <div className="card-testimonial card m-15 m-lg-3 h-100">
                    <div className="card-body p-5 text-start">
                      <p className="">
                        “Professional and easy to work with. I was left with an
                        great impression and would highly recommend Gurjivan.”
                      </p>
                    </div>
                    <div className="card-footer">Sherman Gotinga</div>
                  </div>
                </div>
                <div className="card-container col-8 col-lg-4 ">
                  <div className="card-testimonial card m-15 m-lg-3 h-100">
                    <div className="card-body p-5 text-start">
                      <p className="">
                        “Exceptional communication, professionalism and a
                        get-it-done attitude. My family and I have worked with
                        all types of Realtors over years and I am honestly
                        surprised and excited by Gurj’s professionals & ability
                        to produce results. “
                      </p>
                    </div>
                    <div className="card-footer">Harman Bains</div>
                  </div>
                </div>
              </div>
            </div>
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
                    className="form-control text-warning bg-white bg-opacity-50 border-0"
                    placeholder="Name"
                    aria-label="Name"
                  />
                </div>
                <div className="col-9 col-lg-3">
                  <input
                    type="number"
                    className="form-control text-warning bg-white bg-opacity-50 border-0"
                    placeholder="Phone Number"
                    aria-label="Phone Number"
                  />
                </div>
                <div className="col-9 col-lg-3">
                  <input
                    type="email"
                    className="form-control text-warning bg-white bg-opacity-50 border-0"
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
          <div className=" container-lg max-w-screen-xl   mb-5 pb-10">
            <div className="container">
              <h2 className="ls-tight font-bolder display-5 text-white text-center mb-2 ">
                Additional Benefits & Information
              </h2>
              {/* PART: GST New Housing Rebate */}
              <div className="py-10 row align-items-start justify-content-start ">
                <div className="col-12">
                  <h3 className="text-white fs-4 pb-3 ">
                    GST New Housing Rebate
                  </h3>
                  <p className="description text-white fw-light lh-sm fs-5 ">
                    You may be eligible for a tax rebate on a portion of the GST
                    paid as part of the purchase or construction of a new home.
                    You make also be legible for a rebate of the cost of
                    substantially renovating your property, building an add-on
                    to your existing home or converting a commercial property to
                    residential only if the fair market of the is under
                    $450,000.
                  </p>
                </div>
              </div>
              {/* PART: Home Owner Grant */}
              <div className="py-10 row align-items-start justify-content-start ">
                <div className="col-12">
                  <h3 className="text-white fs-4 pb-3 ">Home Owner Grant</h3>
                  <p className="description text-white fw-light lh-sm fs-5 ">
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
                  </p>
                </div>
              </div>
              {/* PART: RRSP Home Buyers Plan (HBP) */}
              <div className="py-10 row align-items-start justify-content-start ">
                <div className="col-12">
                  <h3 className="text-white fs-4 pb-3 ">
                    RRSP Home Buyers Plan (HBP)
                  </h3>
                  <p className="description text-white fw-light lh-sm fs-5 ">
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
                  </p>
                </div>
              </div>
              {/* PART: First Time Home Buyers Program */}
              <div className="py-10 row align-items-start justify-content-start ">
                <div className="col-12">
                  <h3 className="text-white fs-4 pb-3 ">
                    What is Property Transfer Tax (PTT)
                  </h3>
                  <p className="description text-white fw-light lh-sm fs-5 ">
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
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
