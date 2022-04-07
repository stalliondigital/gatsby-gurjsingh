import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import reviewGoogle from "./../images/review-google.png"
import gurjivanImageCut from "./../images/home/gurjivan-image-cut.png"
import backgroundimage from "./../images/home/background.png"
import { Helmet } from "react-helmet"
// font awesome library
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons"
import Stars from "../components/Stars"
import JSONData from "../../content/qanda.json"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper"

import Img from "gatsby-image"
import { StaticImage } from "gatsby-plugin-image"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"

const sectionBackground = {
  background: `linear-gradient(90.22deg, rgba(206, 170, 84, 0.72) 0.17%, rgba(206, 170, 84, 0) 100.39%),
      url(${backgroundimage})`,
  backgroundPosition: "center center",
}

export default function Home({ data }) {
  const experiences = data.experiences.nodes
  const services = data.services.nodes

  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Gurjivan Singh</title>
      </Helmet>
      <div>
        {/* HOME SECTION */}
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
                    className="header-buttom btn me-2 px-lg-8 border-none rounded-0 py-3"
                  >
                    I am a buyer
                  </Link>
                  <Link
                    to="/services/sellers"
                    className="header-buttom-secondary btn border-none px-lg-8 rounded-0 py-3"
                  >
                    I am a seller
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Meet Gurjivan SECTION */}
        <section className="home-meet reason-why text-lg-start pb-20 pt-lg-6 align-items-center pt-10">
          <div className="container-lg mb-5 ">
            <h2 className="d-none d-md-block text-center main-title title ls-tight my-5 ">
              <span className="px-5">Meet Gurjivan</span>
            </h2>
            <h2 className="d-block d-md-none text-center title ls-tight my-5 ">
              <span className="px-5">Meet Gurjivan</span>
            </h2>
            <div className="about-box d-flex flex-column mt-10 flex-md-row">
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
        {/* CLIENT EXPERIENCE SECTION */}
        <section className="home-experience container-fluid text-lg-start pb-10 px-0 align-items-center ">
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
                <Swiper
                  slidesPerView={1}
                  spaceBetween={10}
                  breakpoints={{
                    // when window width is >= 640px
                    640: {
                      slidesPerView: 2,
                    },
                    // when window width is >= 768px
                    768: {
                      slidesPerView: 2,
                    },
                  }}
                  centeredSlides={true}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="my-swiper d-block d-lg-none card-container"
                >
                  {experiences.map(experience => (
                    <SwiperSlide className="swiper-card h-100 ">
                      <div className="swiper-body mx-5 col h-100 d-flex align-items-stretch">
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
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="d-none d-lg-flex card-container col-10 row row-cols-1 row-cols-lg-3 ">
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
        {/* SECTION GOOGLE REVIEWS */}
        <section className="home-google-review d-flex align-items-center container-fluid justify-content-center ">
          <div className="container row justify-content-center align-items-center py-20 px-0 ">
            <div className="col-12 col-lg-5 d-flex align-items-center justify-content-center pb-10">
              <img
                src={reviewGoogle}
                alt="Google review logo with five stars"
                className="img-fluid "
              />
            </div>
            <div className="col d-flex flex-column d-lg-row align-items-center justify-content-center">
              <p className="paragrah lh-sm ">
                Gurjivan always upholds a high standard and it shows. 5 Stars on
                Google!
              </p>
              <a
                href="https://goo.gl/maps/KJs3vYFhrUSz2iRz7"
                target="_blank"
                className="btn btn-lg border-none mt-10 ps-0 ms-0 py-3 lh-sm"
              >
                Read what people are saying
                <FontAwesomeIcon
                  icon={faLongArrowAltRight}
                  className="fa-icon d-none d-lg-inline"
                  transform="grow-8 right-15"
                />
              </a>
            </div>
          </div>
        </section>
        {/* Services section */}
        <section className="home-services container-fluid">
          <div className="container text-center pt-20">
            <h2 className="text-center title ls-tight my-5 ">Services</h2>
            <div className="d-flex justify-content-center align-items-center mb-10">
              <p className="subtitle text-center title lh-sm">
                Gurjivan offers a variety of services tailored for each
                individuals needs. View more details by clicking on any of the
                services below.
              </p>
            </div>
            <div class="row row-cols-1 row-cols-md-1 row-cols-lg-3 g-4">
              {services.map(service => (
                <Link
                  to={"/services/" + service.frontmatter.slug}
                  key={service.id}
                >
                  <div class="col">
                    <div class="card rounded-0">
                      <Img
                        fluid={
                          service.frontmatter.imgWide.childImageSharp.fluid
                        }
                        className="d-none d-md-block d-lg-none"
                      />
                      <Img
                        fluid={service.frontmatter.img.childImageSharp.fluid}
                        className="d-block d-md-none d-lg-block"
                      />
                      <div class="card-body d-flex justify-content-between align-items-end mb-0 pb-0">
                        <h5 class="card-title text-start ps-3 ">
                          {service.frontmatter.title}
                        </h5>
                        <div className="card-title text-end d-inline-block pe-3 ">
                          <FontAwesomeIcon
                            icon={faLongArrowAltRight}
                            className="fa-icon"
                            transform="grow-8"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center mt-10 mb-10">
              <p className="subtitle text-center title lh-sm">
                Something you need not listed?
              </p>
              <p className="subtitle text-center title lh-sm">
                <Link className="link" to="/contact">
                  Contact Gurjivan
                </Link>{" "}
                and he might be able to help out.
              </p>
            </div>
          </div>
        </section>
        {/* FirstTimeBuyer Section */}
        <section className="home-first-time-buyer container-fluid">
          <div className="container inside-container text-center py-10 ">
            <h2 className="text-center title ls-tight my-5 ">
              Are you a first time home buyer?
            </h2>
            <div className="d-flex justify-content-center align-items-center mb-10">
              <p className="subtitle text-center title lh-sm px-5">
                Purchasing your first home can be a confusing and difficult
                process. Gurjivan has put together a set of resources to help
                you through this.
              </p>
            </div>
            <div className="d-flex justify-content-center align-items-center mb-10">
              <Link
                className="link btn btn-lg rounded-0"
                to="/first-time-buyers"
              >
                View Resources
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ section */}
        <section className="home-qanda container-fluid ">
          <div className="container mx-lg-auto px-lg-auto ">
            <div className="row">
              <div className="col-12 col-lg-5 d-flex flex-column align-items-center align-items-lg-start ">
                <h2 className="text-center text-lg-start title ls-tight my-5 ">
                  Frequently Asked Questions
                </h2>
                <p className="subtitle text-center text-lg-start title lh-sm pb-5">
                  Here are some of the most frequent questions we receive from
                  clients. Hopefully these answers can be of help to you.
                </p>
                <p className="d-none d-lg-block subtitle text-start title lh-sm ">
                  To request more information or further discuss any questions
                  with Gurj,{" "}
                  <Link className="link" to="/contact">
                    click here
                  </Link>{" "}
                  to book your one on one meeting today!
                </p>
                <p className="d-block d-lg-none subtitle text-center title lh-sm mx-0 px-0 pb-5">
                  If you have any further questions, feel free to{" "}
                  <Link className="link" to="/contact">
                    contact Gurjivan.
                  </Link>
                </p>
              </div>
              <div className="justify-content-center col-12 col-lg-7 p-0 m-0">
                <div className="accordion  d-flex flex-column justify-content-center mx-0 px-0">
                  {JSONData.content.map((data, index) => {
                    return (
                      <div className="accordion-item align-items-start rounded-0 mx-0 px-0 my-2">
                        <h2
                          class="accordion-header"
                          id={"panelsStayOpen-heading" + index}
                        >
                          <a
                            className="accordion-button collapsed "
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={"#panelsStayOpen-collapse" + index}
                            aria-expanded="true"
                            aria-controls={"#panelsStayOpen-collapse" + index}
                          >
                            <div className="text-start qanda">{data.Q}</div>
                          </a>
                        </h2>
                        <div
                          id={"panelsStayOpen-collapse" + index}
                          className="accordion-collapse collapse"
                          aria-labelledby={"panelsStayOpen-heading" + index}
                        >
                          <div className="accordion-body">
                            <div className="qanda lh-sm text-start">
                              {data.A}
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="home-request container-fluid pb-10 align-items-center">
          <div className="container-request container mb-5 py-10 ">
            <form
              method="post"
              netlify-honeypot="bot-field"
              data-netlify="true"
              name="buyerkit"
              className="g-3 text-center justify-content-center"
            >
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="buyerkit" />
              <div className="row py-5">
                <div className="col">
                  <div className="px-10 justify-content-center d-flex flex-column align-items-center align-items-lg-start">
                    <h2 className="title text-center text-lg-start pb-5">
                      Request a Detailed Buyers Kit
                    </h2>
                    <p className="subtitle text-center text-lg-start mb-10 lh-sm">
                      All the information you need as a buyer in your hands.
                    </p>
                  </div>
                  <div className="form-data row row-cols-1 justify-content-center d-flex align-items-center g-3 px-10">
                    <div className="col ">
                      <input
                        type="text"
                        className="form-control rounded-0 border-0"
                        placeholder="Name"
                        aria-label="Name"
                      />
                    </div>
                    <div className="col">
                      <input
                        type="number"
                        className="form-control rounded-0 border-0"
                        placeholder="Phone Number"
                        aria-label="Phone Number"
                      />
                    </div>
                    <div className="col">
                      <input
                        type="email"
                        className="form-control rounded-0 border-0"
                        placeholder="Email Address"
                        aria-label="Email Address"
                      />
                    </div>
                    <div className="col d-grid">
                      <button className="button link py-2 " type="submit">
                        Request Kit
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col d-none d-lg-block pe-5">
                  <StaticImage
                    src="./../images/home/request-image.png"
                    alt="A woman reading a guide"
                  />
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
    experiences: allMarkdownRemark(
      sort: { fields: frontmatter___order }
      filter: { frontmatter: { slug: { eq: null } } }
    ) {
      nodes {
        id
        frontmatter {
          name
          description
        }
      }
    }
    services: allMarkdownRemark(
      sort: { fields: frontmatter___order }
      filter: { frontmatter: { title: { ne: "" } } }
    ) {
      nodes {
        id
        frontmatter {
          order
          slug
          title
          img {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          imgWide {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
