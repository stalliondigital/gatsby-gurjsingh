import React from "react"
import Layout from "../../components/Layout"
import { Link } from "gatsby"
import sol_1 from "./../../images/sol-1.png"
import sol_2 from "./../../images/sol-2.png"
import sol_3 from "./../../images/sol-3.png"
import prep_1 from "./../../images/prep-1.png"
import prep_2 from "./../../images/prep-2.png"
import prep_3 from "./../../images/prep-3.png"
import prep_6 from "./../../images/prep-6.png"
import prep_7 from "./../../images/prep-7.png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faSearch,
  faHome,
  faChartLine,
  faFileInvoice,
} from "@fortawesome/free-solid-svg-icons"
import Helmet from "react-helmet"
import { StaticImage } from "gatsby-plugin-image"

export default function Home() {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Gurjivan | Buyers</title>
      </Helmet>
      <div>
        <section className="container-fluid buyers-header pb-20 d-flex justify-content-center ">
          <div className="container row">
            <div className="col col-md-8 col-lg-6 header">
              <div className="text-center pt-5 pb-5 pt-lg-6">
                <h1 className="mb-5 header-title">
                  Guiding you to your dream home
                </h1>
                <p className="header-subtitle">
                  How we tailor our services best to serve you
                </p>
                <div className="row">
                  <div className="col-6 mt-10 d-grid pe-0">
                    <Link
                      to="/first-time-buyers"
                      className="primary btn btn-block border-none shadow-sm mx-2"
                    >
                      First Time Buyers
                    </Link>
                  </div>
                  <div className="col-6 mt-10 d-grid ps-0">
                    <Link
                      to="/services/sellers"
                      className="secondary btn btn-block border-none mx-2"
                    >
                      I am a seller
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-none d-md-block col-4 col-lg-6">
              <StaticImage
                src="./../../images/buyers/header-img.png"
                fit={"cover"}
              />
            </div>
          </div>
        </section>
        <section className="solution container-fluid text-lg-start align-items-center pt-10 pb-15">
          <div className=" container-lg max-w-screen-xl   mb-5 ">
            <div className="row justify-content-center">
              <div className="col-8 col-lg-5">
                <h2 className="ls-tight font-bolder display-5 text-white text-center mb-2 ">
                  Our Three Phase <br></br>Solution to Success
                </h2>
                <p className=" description text-white fw-light text-center lh-sm fs-5">
                  We organize our buying process down into three simple steps to
                  make the home buying process as simple, straight forward and
                  stress free as possible.
                </p>
              </div>
            </div>
          </div>
          <div className="card-container container align-items-center ">
            <div className="row justify-content-center row-cols-1 row-cols-lg-3">
              <div className="col-7 col-lg-4 mb-3 justify-content-center ">
                <div className="card p-4 h-100 ">
                  <div className="card-img p-4">
                    <img
                      src={sol_1}
                      className="card-img-top"
                      alt="two people discussing"
                    />
                  </div>
                  <div className="card-body row align-items-center ">
                    <span className="col-2 number card-title fs-5 p-2 fw-bold ">
                      1
                    </span>
                    <p className="col-10 card-text p-2 text-white fs-4 lh-sm ">
                      Onboarding Consulatation
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-7 col-lg-4 mb-3 justify-content-center">
                <div className="card p-4 h-100">
                  <div className="card-img p-4">
                    <img
                      src={sol_2}
                      className="card-img-top"
                      alt="a person talking on the phone"
                    />
                  </div>
                  <div className="card-body d-flex flex-row align-items-center">
                    <span className="col-2 number card-title fs-5 p-2 fw-bold ">
                      2
                    </span>
                    <p className="col-10 card-text p-2 text-white fs-4 lh-sm ">
                      Tailoring Our Services For You
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-7 col-lg-4 mb-3 justify-content-center">
                <div className="card p-4 h-100">
                  <div className="card-img p-4">
                    <img
                      src={sol_3}
                      className="card-img-top"
                      alt="a person next to a for sale sign"
                    />
                  </div>
                  <div className="card-body d-flex flex-row align-items-center">
                    <span className="col-2 number card-title fs-5 p-2 fw-bold ">
                      3
                    </span>
                    <p className="col-10 card-text p-2 text-white fs-4 lh-sm ">
                      Welcoming you to your dream home
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="phases container-fluid container-text-lg-start align-items-center ">
          <div className=" container-lg mb-5 ">
            <div className="container container-phase rounded-4 pt-10 d-flex flex-column align-items-center">
              <h2 className="phase  fs-5 fw-light pt-5">PHASE ONE</h2>
              <h2 className="ls-tight font-bolder display-5 text-white mb-2 ">
                Preparing You to Buy
              </h2>
              <div className="row justify-content-center pb-5">
                <div className="col-8 col-lg-8">
                  <p className="description text-white fw-light text-center lh-sm fs-4 pb-10">
                    Our first step toward success will be to discuss & plan
                    exactly what you need from your home to best position you
                    when exploring Greater Vancouver's real estate market.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container-discover container-fluid d-flex align-items-center justify-content-center mx-0 p-10 ps-20 mb-10">
          <div className="container-xl row d-flex align-items-center justify-content-center">
            <div className="col-9 col-lg-5 pb-7 pt-5 pb-lg-2">
              <img
                src={prep_1}
                className="img-fluid pe-lg-7"
                alt="three people discussing"
              />
            </div>
            <div className="col-12 col-lg-7 ">
              <p className="description text-white fw-light lh-sm fs-4 ">
                We will discover exactly what you are looking for, go through,
                plan and discuss expecting closing costs when buying a home,
                ensure you are taken care of with a preapproval and set up
                everything we need for success when we are ready to enter the
                market.
              </p>
            </div>
          </div>
        </div>
        <section className="phases container-xl text-lg-start d-grid justify-content-center align-items-center pe-0">
          <div className="row align-items-center justify-content-center mx-0">
            {/* PART: Our Onboarding Consultation */}
            <div className="col-12 col-lg-7 my-5 py-10 px-5 pe-20">
              <h3 className="text-white fs-4 pb-3 ">
                Our Onboarding Consultation
              </h3>
              <p className="description text-white fw-light lh-sm fs-5 ">
                Our initial 1-hour meeting will be used to unearth everything
                you need and want from your home. We will further discuss
                initial information regarding current market conditions, share
                the benefits and obligations when working with a professional
                REALTOR© and set all expectations needed to best position you
                for success!
              </p>
            </div>
            <div className="col-8 col-lg-5 py-10 ps-5 mb-10 container-discover d-flex justify-content-center me-0 rounded-4 rounded-end-lg-0 rounded-end-xl-4 rounded-start-lg-4">
              <img
                src={sol_1}
                className="img-fluid"
                alt="three people discussing"
              />
            </div>

            {/* PART: Estimation of Expenses & Closing Costs */}
            <div className="col-12 col-lg-7 my-5 px-5 pe-20">
              <h3 className="text-white fs-4 pb-3 ">
                Estimation of Expenses & Closing Costs
              </h3>
              <p className="description text-white fw-light lh-sm fs-5 ">
                A massive part my clients success is ensuring they have all the
                necessary information ahead of time so there are no mix ups or
                surprises when moving forward with buying your dream home. Apart
                of this is transparently sharing the associated costs involved
                with the purchase of your home and proactively preparing so we
                can make the entire process be as smooth as possible.
              </p>
            </div>
            <div className="col-8 col-lg-5 py-10 ps-5 mb-10 container-discover d-flex justify-content-center me-0 rounded-4 rounded-end-lg-0 rounded-end-xl-4 rounded-start-lg-4">
              <img
                src={prep_2}
                className="img-fluid"
                alt="three people discussing"
              />
            </div>

            {/* PART: Getting Preapproved */}
            <div className="col-12 col-lg-7 my-5 px-5 pe-20 ">
              <h3 className="text-white fs-4 pb-3 ">
                Estimation of Expenses & Closing Costs
              </h3>
              <p className="description text-white fw-light lh-sm fs-5 ">
                A massive part my clients success is ensuring they have all the
                necessary information ahead of time so there are no mix ups or
                surprises when moving forward with buying your dream home. Apart
                of this is transparently sharing the associated costs involved
                with the purchase of your home and proactively preparing so we
                can make the entire process be as smooth as possible.
              </p>
            </div>
            <div className="col-8 col-lg-5 py-10 ps-5 container-discover d-flex justify-content-center me-0 rounded-4 rounded-end-lg-0 rounded-end-xl-4 rounded-start-lg-4">
              <img
                src={prep_7}
                className="img-fluid"
                alt="three people discussing"
              />
            </div>
            {/* end phases */}
          </div>
        </section>

        {/* PHASE TWO */}
        <section className="phases container-fluid text-lg-start align-items-center ">
          <div className=" container-lg max-w-screen-xl  mb-5 ">
            <div className="container container-phase rounded-4 pt-10 d-flex flex-column align-items-center">
              <h2 className="phase text-center fs-5 fw-light pt-5">
                PHASE TWO
              </h2>
              <h2 className="ls-tight font-bolder display-5 text-white text-center mb-2 ">
                Preparing You to Buy
              </h2>
              <div className="row justify-content-center pb-5">
                <div className="col-8 ">
                  <p className="description text-white fw-light text-center lh-sm fs-4 pb-10 ">
                    The Difference lays within our process of serving you.
                    Gurjivan takes pride in his ability to adapt his services
                    and share information in ways that's most convenient and
                    hassle free for his clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container-discover container-fluid d-flex align-items-center justify-content-center mx-0 p-10 ps-20 mb-10">
          <div className="container-xl row d-flex align-items-center justify-content-center">
            <div className="col-9 col-lg-5 pb-7 pt-5 pb-lg-2 d-flex justify-content-center">
              <img
                src={prep_3}
                className="img-fluid pe-lg-8"
                alt="a person writing on a board"
              />
            </div>
            <div className="col-12 col-lg-7">
              <p className="description text-white fw-light lh-sm fs-4 pe-10 ">
                Everything within the scope of your home search including home
                tours, in-depth market analysis, explaining contracts,
                negotiations and the entire home transaction process will have
                Gurj there to explain and walk through the entire process to
                ensure you, the client always understand what is going on while
                instilling confidence throughout.
              </p>
            </div>
          </div>
        </div>

        <section className="phases container-fluid align-items-center ">
          <div className="container-xl container-instructions">
            {/* PART: Our Onboarding Consultation */}
            <div className="pt-20 row d-flex align-items-stretch justify-content-center g-5">
              <div className="col-10 col-lg-5 p-10 pe-5">
                <h3 className="instruction-title fs-4 pb-3 lead">
                  <span className="pe-4">
                    <FontAwesomeIcon icon={faSearch} className="fa-icon" />
                  </span>
                  Proactive Monitoring
                </h3>
                <p className="description fw-light lh-sm fs-5 ">
                  After our initial sit down, when you’re ready to enter the
                  market, we will take all the information initially discussed
                  and put it to work. Gurj will set up a system for you that
                  will make life simple and easy by having a search engine
                  proactively pull listings and homes for you to review. With
                  your feedback of what you like or did not like, the engine
                  will narrow it’s search until we are consistently landing on
                  homes that are serious contenders for us to move forward on.
                  Using information as a tool will allow us to find and close on
                  your dream home a quick as possible.
                </p>
              </div>

              {/* PART: Estimation of Expenses & Closing Costs */}
              <div className="col-10 col-lg-5 p-10 pe-5">
                <h3 className="instruction-title fs-4 pb-3 lead">
                  <span className="pe-4">
                    <FontAwesomeIcon
                      icon={faHome}
                      className="fa-icon fa-increase"
                    />
                  </span>
                  Home Tours & Explorations
                </h3>
                <p className="description fw-light lh-sm fs-5 ">
                  Find a home that meets your use case and passes the eye test
                  is only part one of the equation. The next step will always be
                  to get in the home and objectively look at and evaluate the
                  property in person. Gurj will be there to show you what to
                  look for in the home, what small details we should keep an eye
                  out for, and what clues we can pick up on that will give us a
                  deeper insight of the property.
                </p>
              </div>

              {/* PART: Getting Preapproved */}
              <div className="col-10 col-lg-5 p-10 pe-5">
                <h3 className="instruction-title fs-4 pb-3 lead">
                  <span className="pe-4">
                    <FontAwesomeIcon
                      icon={faChartLine}
                      className="fa-icon fa-increase"
                    />
                  </span>
                  Market Analysis
                </h3>
                <p className="description fw-light lh-sm fs-5 ">
                  We always do our homework so we can always make the smart
                  decision. Regardless of your budget or personal situation, for
                  any homes you seriously consider, we will prepare a full
                  evaluation of the property, look at the long & short term
                  plans of the associated community & then plan and discuss
                  pricing strategy to close in on your dream home.
                </p>
              </div>

              {/* PART: Estimation of Expenses & Closing Costs */}
              <div className="col-10 col-lg-5 p-10 pe-5">
                <h3 className="instruction-title fs-4 pb-3 lead">
                  <span className="pe-4">
                    <FontAwesomeIcon
                      icon={faFileInvoice}
                      className="fa-icon fa-increase"
                    />
                  </span>
                  The Paperwork
                </h3>
                <p className="description fw-light lh-sm fs-5 ">
                  After strategizing and planning the home we want to close in
                  on, Gurj will carefully review and present our offer while
                  having an open channel of communication available to further
                  negotiate the terms of the contract to best position your
                  interest as a buyer while ensuring we don’t run into any
                  untimely surprises.
                </p>
              </div>
              {/* end phases */}
            </div>
          </div>
        </section>
        {/* PHASE THREE */}
        <section className="phases container-fluid text-lg-start pb-5 align-items-center ">
          <div className=" container-xl max-w-screen-xl   mb-5 ">
            <div className="container container-phase rounded-4 pt-10 d-flex justify-content-center flex-column align-items-center ">
              <h2 className="phase text-center fs-5 fw-light pt-5">
                PHASE THREE
              </h2>
              <h2 className="ls-tight font-bolder display-5 text-white text-center mb-2 ">
                Welcoming You to Your New Home
              </h2>
              <div className="row justify-content-center pb-5">
                <div className="col-8">
                  <p className="description text-white fw-light text-center lh-sm fs-4 pb-10 ">
                    The most difficult and stressful part of the process is
                    over. Now we can start shift our energy from finding you the
                    house you love, to making your new property your perfect
                    home.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container container-fluid py-20">
            {/* PART: Estimation of Expenses & Closing Costs */}
            <div className="container-xl row align-items-center justify-content-center ">
              <div className="col-9 col-lg-4 pb-7 pb-lg-2 d-flex align-items-center justify-content-center ">
                <img
                  src={prep_6}
                  className="img-fluid pe-lg-7"
                  alt="a smiley face"
                />
              </div>
              <div className="col-12 col-lg-8">
                <p className="description text-white fw-light lh-sm fs-5 ">
                  When we get confirmation that your deal goes through and your
                  new home is officially yours, Gurj will assist with additional
                  tools and benefits to make post-possession as seamless as
                  possible. Some benefits include but are not limited to, a full
                  move-in checklist, contacts for furnishing & electronics
                  outlets at discounted prices, moving service referrals,
                  contacts for priority service installations and more.
                </p>
              </div>
            </div>

            {/* end phases */}
          </div>
        </section>
      </div>
    </Layout>
  )
}
