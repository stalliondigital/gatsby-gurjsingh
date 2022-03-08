import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import gurjivanImage from "./../images/gurjivan-image.png"
import gurjivanImageCut from "./../images/gurjivan-image-cut.png"
import coupleTogether from "./../images/couple-together.png"
import backgroundimage from "./../images/background.png"

// font awesome library
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faBook,
  faCircleRight,
  faCircle,
} from "@fortawesome/free-solid-svg-icons"
import { faArrowAltCircleRight as farArrow } from "@fortawesome/free-regular-svg-icons"

export default function Home() {
  return (
    <Layout>
      <div>
        <section
          className="home position-relative pt-48 pb-40  bg-cover bg-size--cover"
          style={{
            backgroundImage: `url(${backgroundimage})`,
          }}
        >
          <div className="container-lg max-w-screen-xl position-relative overlap-10 text-center text-lg-start pt-5 pb-5 pt-lg-6">
            <div className="row row-grid align-items-center">
              <div className="header rounded-4 bg-black bg-opacity-50 p-10 col-9 col-lg-7 text-start ms-10">
                <h1 className="ls-tight font-bolder display-5 text-white mb-5">
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
        <section className="about reason-why container-fluid text-lg-start pb-5 pt-lg-6 align-items-center pt-10">
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
              <div className="d-none d-lg-block col-6 col-lg-5 justify-content-end h-auto pe-0">
                <div className="d-flex flex-row-reverse ">
                  <img
                    src={gurjivanImage}
                    alt="Portrait of Gurjivan Singh"
                    className="portrait rounded-end-4 large"
                  />
                </div>
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
        <section className="experience container-fluid text-lg-start pb-5 pt-lg-6 align-items-center pt-10">
          <div className="experience-inside container-fluid text-lg-start">
            <div className="experience-container container-lg max-w-screen-xl   mb-5 ">
              <h2 className="ls-tight font-bolder display-5 text-white mb-5 text-center pb-5">
                What Others Say
              </h2>
              <div className="row my-5 g-4 justify-content-center row-cols-1 row-cols-lg-3">
                <div className="card-container col-8 col-lg-4 ">
                  <div className="card-testimonial card m-15 m-lg-3 h-100">
                    <div className="card-body p-5 text-center">
                      <p className="lh-sm">
                        “Jivan has been able to quickly indentify shifting
                        market trends and investment opportunities that many
                        others have missed. Using proprietary analysis tools
                        Jivan is able to back up his leads and finds with
                        concrete facts.”
                      </p>
                    </div>
                    <div className="card-footer">Vince McGurik</div>
                  </div>
                </div>
                <div className="card-container col-8 col-lg-4 ">
                  <div className="card-testimonial card m-15 m-lg-3 h-100">
                    <div className="card-body p-5 text-center">
                      <p className="lh-sm">
                        “Wow! I got referred to Gurj from a family friend and I
                        honestly didn't have high expectations after dealing
                        with my last realtor. But Gurj was so good!
                        Communication, responsiveness and ability to get things
                        done was surreal.”
                      </p>
                    </div>
                    <div className="card-footer">Daniel Randley</div>
                  </div>
                </div>
                <div className="card-container col-8 col-lg-4 ">
                  <div className="card-testimonial card m-15 m-lg-3 h-100">
                    <div className="card-body p-5 text-center">
                      <p className="lh-sm">
                        “Jivan is one of the most professional, forward thinking
                        guys I have met. Will continue to do business at
                        anytime.”
                      </p>
                    </div>
                    <div className="card-footer">Christopher Cavalier</div>
                  </div>
                </div>
                <div className="card-container col-8 col-lg-4 ">
                  <div className="card-testimonial card m-15 m-lg-3 h-100">
                    <div className="card-body p-5 text-center">
                      <p className="lh-sm">
                        “Gurjivan Singh is the best realtor I have ever dealt
                        with. Very professional, experienced, and helpful.
                        Highly recommend.”
                      </p>
                    </div>
                    <div className="card-footer">Kelen Maria</div>
                  </div>
                </div>
                <div className="card-container col-8 col-lg-4 ">
                  <div className="card-testimonial card m-15 m-lg-3 h-100">
                    <div className="card-body p-5 text-center">
                      <p className="lh-sm">
                        “Really pleasant interaction with this service. Helped
                        make my move from the island to the mainland so much
                        smoother. They were friendly and seemed very genuine.
                        Highly recommend.”
                      </p>
                    </div>
                    <div className="card-footer">Patrick Holland</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="request container-fluid text-lg-start pb-10 pt-lg-6 align-items-center pt-10">
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
