import React from "react"
import Layout from "../../components/Layout"
import backgroundimage from "./../../images/background_sellers.png"
import sellers_1 from "./../../images/sol-1.png"
import sellers_2 from "./../../images/sellers-2.png"
import sellers_3 from "./../../images/sellers-3.png"
import sellers_4 from "./../../images/sellers-4.png"
import sellers_5 from "./../../images/sellers-5.png"
import sellers_6 from "./../../images/sellers-6.png"
import sellers_7 from "./../../images/prep-5.png"
import sellers_8 from "./../../images/sellers-8.png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faArrowAltCircleDown,
  faCaretLeft,
} from "@fortawesome/free-solid-svg-icons"
import Helmet from "react-helmet"

const sectionBackground = {
  background: `linear-gradient(0deg, #181819 3%, transparent 30% ),
      url(${backgroundimage})`,
}

export default function Home() {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Gurjivan | Sellers</title>
      </Helmet>
      <div>
        <section
          className="home position-relative pt-48 pb-40 me-0 pe-0 bg-cover bg-size--cover"
          style={sectionBackground}
        >
          <div className="container-fluid position-relative overlap-10 text-center pt-5 pb-5 pb-lg-20 pt-lg-6 pe-lg-0 me-lg-0 justify-content-lg-end">
            <div className="row align-items-center justify-content-center justify-content-lg-end text-center me-0 my-20 pt-lg-20 pe-0 pb-lg-10">
              <div className="header rounded-4 rounded-end-lg-0 bg-black bg-opacity-50 p-10 me-0 col-12 col-lg-6 d-flex flex-column justify-content-center col-lg-7 text-center">
                <div className="d-flex justify-content-center ">
                  <h1 className="seller-title display-5 text-white mb-5">
                    How We Help You Realize Your Home's Potential
                  </h1>
                </div>
                <p className="lead text-white text-opacity-80 fs-5 lh-sm">
                  When it comes to getting you ready for your next chapter, we
                  go above and beyond to ensure every detail is accounted for.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="solution container-fluid text-lg-start align-items-center pt-10 pb-15">
          <div className=" container-lg max-w-screen-xl   mb-5 pb-10 ">
            <div className="row justify-content-center">
              <div className="col-8">
                <h2 className="ls-tight font-bolder display-5 text-white text-center mb-2 ">
                  Our Seller's Process
                </h2>
                <p className=" description text-white fw-light text-center lh-sm fs-5">
                  Having a home on the market in Greater Vancouver alone will be
                  enough to generate interest. With Gurjivan, however, we have
                  broken down our process into a handful of steps aimed at
                  generating the most public interest and competition to raise
                  the quality of offers submitted.
                </p>
              </div>
            </div>
          </div>
          <div className="card-container container align-items-center ">
            <div className="row justify-content-center row-cols-1 row-cols-lg-3">
              <div className="col-7 col-lg-4 mb-7 justify-content-center">
                <div className="card p-4 h-100 ">
                  <div className="card-img p-4">
                    <img
                      src={sellers_1}
                      className="card-img-top"
                      alt="two people discussing"
                    />
                  </div>
                  <div className="card-body row align-items-center ">
                    <span className="col-2 number card-title fs-5 p-2 fw-bold ">
                      1
                    </span>
                    <p className="col-10 card-text p-2 text-white fs-4 lh-sm ">
                      Onboarding Consultation & Sales Strategy
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-7 col-lg-4 mb-7 justify-content-center">
                <div className="card p-4 h-100">
                  <div className="card-img p-4">
                    <img
                      src={sellers_2}
                      className="card-img-top"
                      alt="a person watering a plant"
                    />
                  </div>
                  <div className="card-body d-flex flex-row align-items-center">
                    <span className="col-2 number card-title fs-5 p-2 fw-bold ">
                      2
                    </span>
                    <p className="col-10 card-text px-2 pb-5 text-white fs-4 lh-sm ">
                      Home Staging & Décor
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-7 col-lg-4 mb-7 justify-content-center">
                <div className="card p-4 h-100">
                  <div className="card-img p-4">
                    <img
                      src={sellers_3}
                      className="card-img-top"
                      alt="a person holding the roof of a house"
                    />
                  </div>
                  <div className="card-body d-flex flex-row align-items-center">
                    <span className="col-2 number card-title fs-5 p-2 fw-bold ">
                      3
                    </span>
                    <p className="col-10 card-text px-2 pb-5 text-white fs-4 lh-sm ">
                      Exterior Improvement
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-7 col-lg-4 mb-7 justify-content-center">
                <div className="card p-4 h-100">
                  <div className="card-img p-4">
                    <img
                      src={sellers_4}
                      className="card-img-top"
                      alt="a photografic camera"
                    />
                  </div>
                  <div className="card-body d-flex flex-row align-items-center">
                    <span className="col-2 number card-title fs-5 p-2 fw-bold ">
                      4
                    </span>
                    <p className="col-10 card-text p-2 text-white fs-4 lh-sm ">
                      Photography & Videography
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-7 col-lg-4 mb-7 justify-content-center">
                <div className="card p-4 h-100">
                  <div className="card-img p-4">
                    <img
                      src={sellers_5}
                      className="card-img-top"
                      alt="a hand holding a megaphone"
                    />
                  </div>
                  <div className="card-body d-flex flex-row ">
                    <span className="col-2 number card-title fs-5 px-2 fw-bold align-self-center ">
                      5
                    </span>
                    <p className="col-10 card-text px-2 pb-5 text-white fs-4 lh-sm  align-self-center">
                      Marketing Strategy
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-7 col-lg-4 mb-7 justify-content-center">
                <div className="card p-4 h-100">
                  <div className="card-img p-4">
                    <img
                      src={sellers_6}
                      className="card-img-top"
                      alt="a person carrying a wheelbarrow"
                    />
                  </div>
                  <div className="card-body d-flex flex-row align-items-center">
                    <span className="col-2 number card-title fs-5 p-2 fw-bold ">
                      6
                    </span>
                    <p className="col-10 card-text p-2 text-white fs-4 lh-sm ">
                      Relocation & Sanitary Services
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-7 col-lg-4 mb-7 justify-content-center">
                <div className="card p-4 h-100">
                  <div className="card-img p-4">
                    <img
                      src={sellers_7}
                      className="card-img-top"
                      alt="a person next to a for sale sign"
                    />
                  </div>
                  <div className="card-body d-flex flex-row align-items-center">
                    <span className="col-2 number card-title fs-5 p-2 fw-bold ">
                      7
                    </span>
                    <p className="col-10 card-text px-2 pb-5 text-white fs-4 lh-sm ">
                      Paperwork
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-7 col-lg-4 mb-7 justify-content-center">
                <div className="card p-4 h-100">
                  <div className="card-img p-4">
                    <img
                      src={sellers_8}
                      className="card-img-top"
                      alt="a computer with envelopes next to it"
                    />
                  </div>
                  <div className="card-body d-flex flex-row align-items-center">
                    <span className="col-2 number card-title fs-5 p-2 fw-bold ">
                      8
                    </span>
                    <p className="col-10 card-text p-2 text-white fs-4 lh-sm ">
                      Additional Post Sale Services
                    </p>
                  </div>
                </div>
              </div>
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
        <section className="phases container-fluid text-lg-start align-items-center pb-40">
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
                    <div className="col">Onboarding & Strategy</div>
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
                    When you’re ready to sit down and discuss the elements that
                    go into getting you the most out of your home, Gurjivan will
                    take time to go through all your personal needs and
                    expectations to best address real estate goals. Apart of
                    this process is discussing logistics regarding selling your
                    existing home. This includes doing a full assessment of your
                    property and then creating a pricing plan aimed to create
                    optimal competition and interest in your home.
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
                    <div className="col">Home Staging & Décor</div>
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
                    After we plan the fine details of getting your home ready
                    for the market, the next steps is to put the gears in
                    motion. The immediate next step would be to do any necessary
                    improvements that would allow us to show and capture the
                    home as best as it can. This may include bringing in a
                    professional designer to rework the space as optimally as
                    possible to best show the quality of your home, the
                    potential of the space and create a sense of awe that buyers
                    will fall in love with!
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
                    <div className="col">Exterior Facelifts</div>
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
                    In addition to the interior, we will plan to have the
                    exterior of the home in tip-top shape to attract as much
                    excitement as possible from prospective buyers. A home owner
                    with a well looked after lawn, exterior walls, home entry
                    amongst other things indicates a true sense of care for
                    their home and that it’s been well taken care of. To wow all
                    of our prospective buyers, we need to make sure their first
                    impression of the home – the exterior, is a masterful one.
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
                      Professional Photography & Videography
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
                    After we having your home looking better than the ones we
                    see in design catalogues; the next step is to bring in our
                    professional photographers who will further highlight and
                    capture your home at it’s best. Our professional partners
                    will work magic when working with lighting, angles which
                    will for certain boost the appeal and desire of your home.
                  </div>
                </div>
              </div>
            </div>

            {/* PART: Marketing & Design */}
            <div className="pt-5 row align-items-start justify-content-center ">
              <div className="col-12 collapse-card">
                <a
                  className="text-white fs-4 accordion-button collapsed d-grid"
                  data-bs-toggle="collapse"
                  href="#collapseMarketing"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseMarketing"
                >
                  <div className="row ">
                    <div className="col">Marketing & Design</div>
                    <div className="col-1">
                      <FontAwesomeIcon
                        className="font-awesome fs-1 icon"
                        icon={faCaretLeft}
                      />
                    </div>
                  </div>
                </a>
                <div className="collapse " id="collapseMarketing">
                  <div className="accordion-description fw-light lh-sm fs-5 p-8 pt-0">
                    After your home has been highlighted and shown to its
                    fullest potential, we then need to execute our marketing
                    plan to get it in front of as many people as we can. Besides
                    the traditional marketing materials (feature sheets,
                    postings, etc.) we will get word of your listing out by
                    utilizing social media, realtor meetings and pages, online
                    classifieds, media outlets, and more to drive as much
                    interest as we can to your home.
                  </div>
                </div>
              </div>
            </div>

            {/* PART: The Paperwork */}
            <div className="pt-5 row align-items-start justify-content-center ">
              <div className="col-12 collapse-card">
                <a
                  className="text-white fs-4 accordion-button collapsed d-grid"
                  data-bs-toggle="collapse"
                  href="#collapsePaperwork"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapsePaperwork"
                >
                  <div className="row ">
                    <div className="col">The Paperwork</div>
                    <div className="col-1">
                      <FontAwesomeIcon
                        className="font-awesome fs-1 icon"
                        icon={faCaretLeft}
                      />
                    </div>
                  </div>
                </a>
                <div className="collapse " id="collapsePaperwork">
                  <div className="accordion-description fw-light lh-sm fs-5 p-8 pt-0">
                    All the hard work going into showcasing your home is always
                    going to be worth it when it comes to reviewing the formal
                    paperwork and offers that come in post showings. With Gurj,
                    you’ll have a seasoned, experienced professional each step
                    of the way with you to help you go through every offer,
                    identify the strengths and weaknesses in any formal writing
                    and to make it make sense for you and your personal
                    situation.
                  </div>
                </div>
              </div>
            </div>

            {/* PART: Post Sales Benefits */}
            <div className="pt-5 row align-items-start justify-content-center ">
              <div className="col-12 collapse-card">
                <a
                  className="text-white fs-4 accordion-button collapsed d-grid"
                  data-bs-toggle="collapse"
                  href="#collapsePost"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapsePost"
                >
                  <div className="row ">
                    <div className="col">Post Sales Benefits</div>
                    <div className="col-1">
                      <FontAwesomeIcon
                        className="font-awesome fs-1 icon"
                        icon={faCaretLeft}
                      />
                    </div>
                  </div>
                </a>
                <div className="collapse " id="collapsePost">
                  <div className="accordion-description fw-light lh-sm fs-5 p-8 pt-0">
                    <p className="fw-light lh-sm fs-5 pb-5">
                      With that hard work done, and after accepting the best
                      offer for you, we can start shift our energy from working
                      hard, to celebrating our success!
                    </p>
                    <p className="fw-light lh-sm fs-5">
                      When we get confirmation that your deal goes through and
                      your home is sold, Gurj will assist with additional tools
                      and benefits to make post-sale transition seamless as
                      possible. Some benefits include but are not limited to, a
                      full move-out checklist, professional cleaning services
                      ensuring the new owners come to a beautiful & clean home,
                      and a thorough follow up to ensure you and yours are
                      satisfied of the sale of the property and are moving
                      forward with your next chapter.
                    </p>
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
