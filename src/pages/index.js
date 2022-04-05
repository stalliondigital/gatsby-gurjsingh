import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import reviewGoogle from "./../images/review-google.png"
import gurjivanImageCut from "./../images/gurjivan-image-cut.png"
import backgroundimage from "./../images/background.png"
import { Helmet } from "react-helmet"
// font awesome library
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBook, faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons"
import { faArrowAltCircleRight as farArrow } from "@fortawesome/free-regular-svg-icons"
import Stars from "../components/Stars"

const sectionBackground = {
  background: `linear-gradient(90.22deg, rgba(206, 170, 84, 0.72) 0.17%, rgba(206, 170, 84, 0) 100.39%),
      url(${backgroundimage})`,
  backgroundPosition: "center center",
}

export default function Home({ data }) {
  const experiences = data.allMarkdownRemark.nodes
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Gurjivan Singh</title>
      </Helmet>
      <div>
        <section
          className="home-header pt-48 pb-20 bg-cover"
          style={sectionBackground}
        >
          <div className="container-xxl text-center text-lg-start pb-40 pt-lg-6">
            <div className="row justify-content-center">
              <div className="header col-10 col-lg-7 text-start ms-10">
                <h1 className="home-title mb-5 text-uppercase fw-light">
                  Bridging the Gap Between Unimaginable and Possible
                </h1>
                <p className="d-none d-lg-block home-description mb-10 fw-light">
                  When it comes to buying or selling a home in this market, you
                  need to make sure you're working with someone who has the
                  resources to get things done. When you go with Gurj you get
                  more than just experience that comes with generating results.
                </p>
                <div className="mt-10 align-items-start rounded-0">
                  <Link
                    to="/services/buyers"
                    className="header-buttom btn btn-lg primary mx-2 px-lg-8 rounded-0 py-3"
                  >
                    I am a buyer
                  </Link>
                  <Link
                    to="/services/sellers"
                    className="header-buttom-secondary btn btn-lg secondary border-none mx-2 px-lg-8 rounded-0 py-3"
                  >
                    I am a seller
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="home-meet reason-why text-lg-start pb-20 pt-lg-6 align-items-center pt-10">
          <div className="container-lg mb-5 ">
            <h2 className="text-center title ls-tight my-5 ">Meet Gurjivan</h2>
            <div className="about-box d-flex flex-column flex-md-row">
              <div className="flex-shrink-0">
                <img
                  className="img-fluid"
                  src={gurjivanImageCut}
                  alt="Portrait of Gurjivan Singh"
                />
              </div>
              <div className="pb-0 d-flex flex-column justify-content-between">
                <p className="content pt-5 pt-md-10 px-10 pt-lg-20 mb-5 lh-sm fw-light">
                  With a professional history in service & operations, there are
                  few who can match Gurj's ability of transparently getting
                  things done all while prioritizing the needs of his clients.
                  Regardless of if you are a first time buyer, investor, or real
                  estate mogul, Gurj will walk through the entire A-to-Z market
                  process ensuring & instilling confidence within all of his
                  clients and their deals.
                </p>
                <div className="d-flex justify-content-start ps-5 pb-5">
                  <Link
                    to="/about"
                    className="btn btn-lg rounded-0 py-3 border-none mx-2 pe-8"
                  >
                    READ MORE
                    <FontAwesomeIcon
                      icon={faLongArrowAltRight}
                      className="fa-icon "
                      transform="grow-8 right-15"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="home-experience container-fluid text-lg-start pb-0 px-0 align-items-center ">
          <div
            className="experience-inside text-center justify-content-center
          container-lg p-0 py-10 text-lg-start"
          >
            <h2 className="text-center title ls-tight my-5 ">
              What Others Say
            </h2>
            <div className="d-flex justify-content-center align-items-center">
              <p className="subtitle text-center title lh-sm">
                Gurjivan will not rest until his customers are truly satisfied.
                Don’t just take our word for it, see what others have to say.
              </p>
            </div>
            <div className="experience-container  mb-5 ">
              <h2 className="ls-tight font-bolder display-5 pt-10 text-white mb-5 text-center pb-5">
                What Others Say
              </h2>
              <div className="row my-5 justify-content-center row-cols-1 ">
                {/* <div className="col-8 col-lg-4 card-container review h-100 mb-5 mb-lg-2">
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
                </div> */}
                <div className="card-container col-10 row row-cols-1 row-cols-lg-3 ">
                  {experiences.map(experience => (
                    <div className="col h-100 d-flex align-items-stretch">
                      <div className="card-testimonial card mb-3 d-flex align-self-stretch">
                        <div className="card-body py-10 ps-8 pe-5 text-start align-self-stretch">
                          <p className="lh-sm">
                            {experience.frontmatter.description}
                          </p>
                        </div>
                        <div className="card-footer d-flex ps-8 pe-5 justify-content-between">
                          <Stars />
                          <span>{experience.frontmatter.name}</span>
                        </div>
                      </div>
                    </div>
                  ))}
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

// export Experience query
export const experienceQuery = graphql`
  query ExperienceCards {
    allMarkdownRemark(sort: { fields: frontmatter___order }) {
      nodes {
        id
        frontmatter {
          name
          description
        }
      }
    }
  }
`
