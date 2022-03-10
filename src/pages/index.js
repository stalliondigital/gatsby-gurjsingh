import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import gurjivanImage from "./../images/gurjivan-image.png"
import reviewGoogle from "./../images/review-google.png"
import gurjivanImageCut from "./../images/gurjivan-image-cut.png"
import coupleTogether from "./../images/couple-together.png"
import backgroundimage from "./../images/background.png"
import { Helmet } from "react-helmet"
// font awesome library
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBook } from "@fortawesome/free-solid-svg-icons"
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
        <title>Gurjivan Singh</title>
      </Helmet>
      <div>
        <section
          className="home position-relative pt-48 pb-40  bg-cover bg-size--cover"
          style={sectionBackground}
        >
          <div className="container-lg max-w-screen-xl position-relative overlap-10 text-center text-lg-start pt-5 pb-5 pt-lg-6">
            <div className="row row-grid align-items-center">
              <div className="header rounded-4 bg-black bg-opacity-50 p-10 col-9 col-lg-7 text-start ms-10">
                <h1 className="font-bolder display-5 text-white mb-5">
                  Bridging the Gap Between Unimaginable and Possible
                </h1>
                <p className="lead text-white text-opacity-80 mb-10">
                  When it comes to buying or selling a home in this market, you
                  need to make sure you're working with someone who has the
                  resources to get things done. When you go with Gurj you get
                  more than just experience that comes with generating results.
                </p>
                <div className="mt-10 align-items-start">
                  <Link
                    to="/services/buyers"
                    className="btn btn-lg primary border-none shadow-sm mx-2 px-lg-8"
                  >
                    I am a buyer
                  </Link>
                  <Link
                    to="/services/sellers"
                    className="btn btn-lg secondary border-none mx-2 px-lg-8"
                  >
                    I am a seller
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="about reason-why container-fluid text-lg-start pb-0 pt-lg-6 align-items-center pt-10">
          <div className="about-container container-lg text-lg mb-5 p-0 rounded-5 ">
            <div className="d-flex flex-column flex-lg-row justify-content-between ">
              <div className="d-block d-lg-none pt-5 px-7">
                <img
                  className="img-fluid rounded-4"
                  src={gurjivanImageCut}
                  alt="Portrait of Gurjivan Singh"
                />
              </div>
              <div className="col-lg-6 p-10 pb-0 d-flex flex-column justify-content-around">
                <h2 className="ls-tight font-bolder display-5 text-white mb-5 ">
                  Why Gurjivan?
                </h2>
                <p className="lead text-white text-opacity-80 mb-5 lh-sm">
                  With a professional history in service & operations, there are
                  few who can match Gurj's ability of transparently getting
                  things done all while prioritizing the needs of his clients.
                  Regardless of if you are a first time buyer, investor, or real
                  estate mogul, Gurj will walk through the entire A-to-Z market
                  process ensuring & instilling confidence within all of his
                  clients and their deals.
                </p>
                <div className="d-flex justify-content-lg-start justify-content-end pb-5">
                  <Link
                    to="/about"
                    className="btn btn-lg primary border-none shadow-sm mx-2 px-lg-8"
                  >
                    More about Gurj
                  </Link>
                </div>
              </div>
              <div className="d-none d-lg-block col-6 col-lg-5 justify-content-end pe-0">
                <div
                  className="bg-cover bg-size--cover rounded-end-4"
                  style={{
                    backgroundImage: `url(${gurjivanImage})`,
                    backgroundSize: "100%",
                    backgroundRepeat: "no-repeat",
                    height: "100%",
                    backgroundPosition: "center center",
                  }}
                ></div>
              </div>
            </div>
          </div>
          <div className="about-container border-0 p-0 container-lg mt-10 rounded-5">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <img
                  src={coupleTogether}
                  alt="couple happy next to a house"
                  className="img-fluid w-100"
                />
              </div>
              <div className="col-lg-7">
                <div className="container pb-10 pb-lg-0">
                  <h2 className="ls-tight font-bolder display-5 text-white mb-5 pt-10 pt-lg-0 ">
                    Buying your first home?
                  </h2>
                  <p className="lead text-white text-opacity-80 mb-10">
                    Purchasing your first home can be a confusing process. Take
                    a look at our first time home buyers center for important
                    information you need to know.
                  </p>
                  <Link
                    to="/first-time-buyers"
                    className="btn btn-lg primary border-none shadow-sm mx-2 px-lg-8"
                  >
                    First Time Home Buyers Center
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="experience container-fluid text-lg-start pb-0 align-items-center ">
          <div className="experience-inside container-lg p-0 py-10 text-lg-start">
            <div className="experience-container  mb-5 ">
              <h2 className="ls-tight font-bolder display-5 pt-10 text-white mb-5 text-center pb-5">
                What Others Say
              </h2>
              <div className="row my-5 justify-content-center row-cols-1 ">
                <div className="col-8 col-lg-4 card-container review h-100 mb-5 mb-lg-2">
                  <div className="card-testimonial card h-100 ">
                    <div className="card-body p-5 text-center">
                      <img
                        src={reviewGoogle}
                        alt="Google review logo with five stars"
                        className="img-fluid pt-10 mb-5"
                      />
                      <p className="fs-3 text-white lh-sm pb-10">
                        Don’t just take our word for it. See what others have to
                        say. We have a five star rating on Google.
                      </p>
                      <a
                        href="https://goo.gl/maps/KJs3vYFhrUSz2iRz7"
                        target="_blank"
                        className="btn btn-lg primary border-none shadow-sm mx-2 px-lg-8 mt-10 py-3 lh-sm mb-10"
                      >
                        View All Google Reviews
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-8 row ">
                  <div className="card-container col-lg-6 col-12 mb-3  ">
                    <div className="card-testimonial card h-100 mb-3">
                      <div className="card-body text-center">
                        <p className="lh-sm">
                          “Jivan has been able to quickly indentify shifting
                          market trends and investment opportunities that many
                          others have missed. Using proprietary analysis tools
                          Jivan is able to back up his leads and finds with
                          concrete facts.”
                        </p>
                      </div>
                      <div className="card-footer d-flex justify-content-between">
                        <span>Vince M.</span>
                        <Stars />
                      </div>
                    </div>
                  </div>
                  <div className="card-container col-12 col-lg-6 mb-3 ">
                    <div className="card-testimonial card h-100 mb-3">
                      <div className="card-body p-5 text-center">
                        <p className="lh-sm">
                          “Wow! I got referred to Gurj from a family friend and
                          I honestly didn't have high expectations after dealing
                          with my last realtor. But Gurj was so good!
                          Communication, responsiveness and ability to get
                          things done was surreal.”
                        </p>
                      </div>
                      <div className="card-footer d-flex justify-content-between">
                        <span>Daniel R.</span>
                        <Stars />
                      </div>
                    </div>
                  </div>
                  <div className="card-container col-12 col-lg-6 mb-3 ">
                    <div className="card-testimonial card h-100 mb-3">
                      <div className="card-body p-5 text-center">
                        <p className="lh-sm">
                          “Jivan is one of the most professional, forward
                          thinking guys I have met. Will continue to do business
                          at anytime.”
                        </p>
                      </div>
                      <div className="card-footer d-flex justify-content-between">
                        <span>Christopher C.</span>
                        <Stars />
                      </div>
                    </div>
                  </div>
                  <div className="card-container col-12 col-lg-6 mb-3 ">
                    <div className="card-testimonial card h-100 mb-3">
                      <div className="card-body p-5 text-center">
                        <p className="lh-sm">
                          “Gurjivan Singh is the best realtor I have ever dealt
                          with. Very professional, experienced, and helpful.
                          Highly recommend.”
                        </p>
                      </div>
                      <div className="card-footer d-flex justify-content-between">
                        <span>Kelen M.</span>
                        <Stars />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="request container-fluid text-lg-start pb-10 align-items-center">
          <div className="container-request container container-lg max-w-screen-lg mb-5 rounded-3 py-5 pb-10 ">
            <form
              method="post"
              netlify-honeypot="bot-field"
              data-netlify="true"
              name="buyerkit"
              className="g-3 text-center justify-content-center"
            >
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="buyerkit" />
              <h2 className="book-icon">
                <FontAwesomeIcon className="font-awesome" icon={faBook} />
              </h2>
              <h2 className="ls-tight font-bolder display-5 text-white ">
                Request a Detailed Buyers Kit
              </h2>
              <p className="lead mb-10 text-white lh-sm">
                All the information you need as
                <br /> a buyer in your hands.
              </p>

              <div className="form-data row justify-content-center d-flex align-items-center g-3 px-10">
                <div className="col-9 col-lg-3 ">
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
                  <button className="py-0 primary" type="submit">
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
