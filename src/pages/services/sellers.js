import React from "react"
import Layout from "../../components/Layout"
import { navigate } from "gatsby-link"
import { graphql, useStaticQuery, Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons"
import Helmet from "react-helmet"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper"
// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default function Home() {
  // data necesary for form submit
  const [state, setState] = React.useState({})

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  const { headerImg, headerImgSmall, sellersProcess } = useStaticQuery(
    graphql`
      query {
        headerImg: file(relativePath: { eq: "sellers/header-img.png" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        headerImgSmall: file(
          relativePath: { eq: "sellers/header-img-small.png" }
        ) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        sellersProcess: allSellersProcessJson {
          edges {
            node {
              id
              desc
              title
              img {
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
  )
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Gurjivan | Sellers</title>
      </Helmet>
      <div>
        <section className="container-fluid buyers-header pb-0 ps-0 ms-0">
          <div className="container-fluid row ps-0 ms-0 ">
            <BackgroundImage
              Tag={`section`}
              id={`test`}
              className="d-none d-lg-block col col-md-4 col-lg-6 "
              fluid={headerImg.childImageSharp.fluid}
              alt="a window with a sold sign"
            ></BackgroundImage>
            <BackgroundImage
              Tag={`section`}
              id={`test`}
              className="d-none d-md-block d-lg-none col col-md-4 col-lg-6 "
              fluid={headerImgSmall.childImageSharp.fluid}
              alt="a window with a sold sign"
            ></BackgroundImage>
            <div className="col col-md-8 col-lg-6 ps-10 header py-20">
              <div className="text-start my-20 pb-5 pt-lg-6">
                <h1 className="mb-5 header-title">
                  How We Help You Realize Your Home’s Potential
                </h1>
                <p className="header-subtitle">
                  When it comes to getting you ready for your next chapter, we
                  go above and beyond to ensure every detail is accounted for.
                </p>
                <div className="row">
                  <div className="col mt-10 justify-content-start ">
                    <Link className="link btn rounded-0 px-5" to="/contact">
                      Contact Gurj
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="solution container-fluid align-items-center pt-20 pb-15">
          <div className=" container mb-5 ">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <h2 className="title mb-2 text-center ">Our Sellers Process</h2>
              <p className="subtitle text-center ">
                Having a home on the market in Greater Vancouver alone will be
                enough to generate interest. With Gurjivan, however, we have
                broken down our process into a handful of steps aimed at
                generating the most public interest and competition to raise the
                quality of offers submitted.
              </p>
            </div>
          </div>
          <div className="card-container container align-items-center mt-20">
            <div className="d-none d-lg-block">
              <div className="flipcard-wrapper">
                {sellersProcess.edges.map((edge, index) => {
                  return (
                    <div className="flipcard" key={index}>
                      <input
                        type="checkbox"
                        id={edge.node.id}
                        className="flipcard-flipback"
                        aria-hidden="true"
                      />
                      <div className="flipcard-content">
                        {/* {{! Card front }} */}
                        <div className="flipcard-front">
                          <div className="flipcard-inner">
                            <div className="card-number seller-card-number-static">
                              {index + 1}
                            </div>
                            <div className="card-header">{edge.node.title}</div>

                            <div className="flipcard-image d-flex align-items-center justify-content-center">
                              <Img
                                fluid={edge.node.img.childImageSharp.fluid}
                                alt={edge.node.alt}
                                className="col-8"
                              />
                            </div>
                            <label
                              for={edge.node.id}
                              className="flipcard-button btn card-link rounded-0 px-10 my-5 align-self-end "
                              aria-hidden="true"
                            >
                              How It Works
                            </label>
                          </div>
                        </div>
                        {/* {{! Card back }} */}
                        <div className="flipcard-back">
                          <div className="flipcard-inner">
                            <div className="card-body">
                              <p className="card-text lh-sm pt-5">
                                {edge.node.desc}
                              </p>
                            </div>
                            <label
                              for={edge.node.id}
                              className="flipcard-button flipcard-flipfront btn card-link rounded-0 mb-5 align-self-end"
                              aria-hidden="true"
                            >
                              Back
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
                <div className="flipcard">
                  <input
                    type="checkbox"
                    id="not-needed"
                    className="flipcard-flipback"
                    aria-hidden="true"
                  />
                  <div className="flipcard-content">
                    {/* {{! Card front }} */}
                    <div className="flipcard-front">
                      <div className="flipcard-inner ">
                        <div className="card-header d-flex align-items-center justify-content-center pt-20">
                          <div>Get Started Now!</div>
                        </div>
                        <a
                          href="#contact"
                          className="flipcard-button btn card-link rounded-0 px-10 my-5 align-self-end "
                        >
                          How It Works
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center row-cols-1 mt-0 pt-0 d-lg-none">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
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
              className="my-swiper "
            >
              {sellersProcess.edges.map((edge, index) => {
                return (
                  <SwiperSlide className="swiper-card pb-20 " key={index}>
                    <div className="flipcard-mobile ">
                      <input
                        type="checkbox"
                        id={edge.node.id + "mobile"}
                        className="flipcard-flipback"
                        aria-hidden="true"
                      />
                      <div className="flipcard-content ">
                        {/* {{! Card front }} */}
                        <div className="flipcard-front">
                          <div className="flipcard-inner">
                            <div className="card-number seller-card-number-static">
                              {index + 1}
                            </div>
                            <div className="card-header ">
                              {edge.node.title}
                            </div>

                            <div className="flipcard-image d-flex align-items-center justify-content-center">
                              <Img
                                fluid={edge.node.img.childImageSharp.fluid}
                                alt={edge.node.alt}
                                className="col-8"
                              />
                            </div>
                            <label
                              for={edge.node.id + "mobile"}
                              className="flipcard-button btn card-link rounded-0 mb-5 align-self-end "
                              aria-hidden="true"
                            >
                              How It Works
                            </label>
                          </div>
                        </div>
                        {/* {{! Card back }} */}
                        <div className="flipcard-back">
                          <div className="flipcard-inner">
                            <div className="card-body">
                              <p className="card-text lh-sm ">
                                {edge.node.desc}
                              </p>
                            </div>
                            <label
                              for={edge.node.id + "mobile"}
                              className="flipcard-button flipcard-flipfront btn card-link rounded-0 mb-5 align-self-end"
                              aria-hidden="true"
                            >
                              Back
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
              <SwiperSlide className="swipe-card pb-10">
                <div className="flipcard-mobile-about">
                  <input
                    type="checkbox"
                    id="not-needed"
                    className="flipcard-flipback"
                    aria-hidden="true"
                  />
                  <div className="flipcard-content">
                    {/* {{! Card front }} */}
                    <div className="flipcard-front">
                      <div className="flipcard-inner ">
                        <div className="card-header d-flex align-items-center justify-content-center pt-20">
                          <div>Get Started Now!</div>
                        </div>
                        <a
                          href="#contact"
                          className="flipcard-button btn card-link rounded-0 px-10 my-5 align-self-end "
                        >
                          Contact Gurj
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
        <section className="container-fluid d-flex justify-content-center flex-column align-items-center">
          <div className="container text-center d-flex flex-column align-items-center">
            <h1 className="mb-5 title">Unsure of Selling?</h1>
            <p className="subtitle">
              Want to get the most value out of your home by selling it? Now is
              the best time to sell your home. Take a look at some of the latest
              data we have from the Fraser Valley Real Estate Board.
            </p>
            <p className="header-subtitle my-10">
              Home values are increasing, sell it while the value is highest!
            </p>
          </div>
          <div className="container banner d-flex justify-content-center align-items-center flex-column flex-md-row row py-10">
            <div className="col text-center">
              <p className="big-number">
                43.6%{" "}
                <FontAwesomeIcon
                  className="font-awesome fa-sm"
                  icon={faArrowAltCircleUp}
                />
              </p>

              <p className="subtitle">DETACHED HOMES</p>
            </div>
            <div className="col text-center">
              <p className="big-number">
                5.6%{" "}
                <FontAwesomeIcon
                  className="font-awesome fa-sm"
                  icon={faArrowAltCircleUp}
                />
              </p>

              <p className="subtitle">TOWNHOMES</p>
            </div>
            <div className="col text-center">
              <p className="big-number">
                36.3%{" "}
                <FontAwesomeIcon
                  className="font-awesome fa-sm"
                  icon={faArrowAltCircleUp}
                />
              </p>

              <p className="subtitle">APARTMENTS</p>
            </div>
          </div>
        </section>
        <section className="container-fluid banner-shadow d-flex justify-content-center align-items-center my-20 pt-20">
          <div className="container d-flex flex-column flex-lg-row ">
            <div className="d-flex col col-lg-8 flex-column align-items-start">
              <h1 className="mb-5 title text-start">
                Thousands of Success Stories
              </h1>
              <p className="subtitle text-start pb-5 pe-5">
                Gurjivan has helped numerous families and individuals to have
                great success when selling their homes. Don’t just take our word
                for it. Read about the many success stories.
              </p>
            </div>
            <div className="col d-flex align-items-center">
              <a
                href="https://goo.gl/maps/KJs3vYFhrUSz2iRz7"
                target="_blank"
                className="card-link btn rounded-0 px-5"
              >
                Read Testimonials
              </a>
            </div>
          </div>
        </section>
        <section
          className="buyers-request container-fluid pb-10 align-items-center mb-10"
          id="contact"
        >
          <div className="container-request container mb-5 py-10 mt-20">
            <form
              method="post"
              netlify-honeypot="bot-field"
              data-netlify="true"
              name="buyerkit"
              className="g-3 text-center justify-content-center"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="bot-field" onChange={handleChange} />
              <input type="hidden" name="form-name" value="buyerkit" />
              <div className="row py-5">
                <div className="col d-flex flex-column flex-lg-row row">
                  <div className="col col-lg-7 px-10 justify-content-center d-flex flex-column align-items-center align-items-lg-start">
                    <h2 className="title text-center text-lg-start pb-5">
                      List your home with Gurjivan now!
                    </h2>
                    <p className="subtitle text-center text-lg-start mb-10 lh-sm">
                      Enter your details and Gurjivan will get in touch with you
                      as soon as possible.
                    </p>
                  </div>
                  <div className="col form-data row row-cols-1 justify-content-center d-flex align-items-center g-3 px-10">
                    <div className="col ">
                      <input
                        type="text"
                        className="form-control rounded-0 border-0"
                        placeholder="Name"
                        aria-label="Name"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col">
                      <input
                        type="number"
                        className="form-control rounded-0 border-0"
                        placeholder="Phone Number"
                        aria-label="Phone Number"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col">
                      <input
                        type="email"
                        className="form-control rounded-0 border-0"
                        placeholder="Email Address"
                        aria-label="Email Address"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col d-grid">
                      <button className="button link py-2 " type="submit">
                        Contact
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </Layout>
  )
}
