import React from "react"
import Layout from "../components/Layout"
import { navigate } from "gatsby-link"
import { graphql, useStaticQuery, Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { Helmet } from "react-helmet"
import { StaticImage } from "gatsby-plugin-image"
import Stars from "../components/Stars"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLevelDownAlt } from "@fortawesome/free-solid-svg-icons"

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
      .then(() => navigate("/thank-you/"))
      .catch(error => alert(error))
  }

  const { headerImg, incentives, experienceProcess, benefits } = useStaticQuery(
    graphql`
      query {
        headerImg: file(
          relativePath: { eq: "first-time-buyers/header-img.png" }
        ) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        incentives: allFirstTimeBuyersIncentivesJson {
          edges {
            node {
              id
              title
              description
              link
            }
          }
        }
        experienceProcess: allExperienceJson {
          edges {
            node {
              id
              name
              experience
            }
          }
        }
        benefits: allFirstTimeBuyersBenefitsJson {
          edges {
            node {
              id
              benefit
              description
              url
              urltext
            }
          }
        }
      }
    `
  )
  const allFirstTimeBuyersIncentives = incentives.edges
  const experiences = experienceProcess.edges
  const benefitsAndInfo = benefits.edges
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Gurjivan | First Time Buyers</title>
      </Helmet>
      <div>
        <section className="container-fluid buyers-header pb-0 pe-0 me-0">
          <div className="container-fluid row pe-0 me-0 ">
            <div className="col col-md-8 col-lg-5 header py-20 d-flex align-items-end justify-content-end">
              <div className="text-start my-20 pb-5 pt-lg-6 ">
                <h1 className="mb-5 header-title align-self-end">
                  First Time Home Buyers in BC
                </h1>
                <p className="header-subtitle align-self-start">
                  Helping You Make it Make Sense
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
            <BackgroundImage
              Tag={`section`}
              id={`test`}
              className="d-none d-md-block col col-md-4 col-lg-6"
              fluid={headerImg.childImageSharp.fluid}
              alt="First Time Buyers recieving the key to their home"
            ></BackgroundImage>
          </div>
        </section>
        <section className="solution container-fluid align-items-center pt-20 pb-15">
          <div className=" container mb-5 ">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <h2 className="title mb-2 text-center ">How it Works</h2>
              <p className="subtitle text-center ">
                We organize our buying process down into three simple steps to
                make the home buying process as simple, straightforward and
                stress free as possible.
              </p>
            </div>
          </div>
          <div className="card-container container align-items-center mt-20">
            <div className="row justify-content-center row-cols-1 row-cols-lg-3 mt-0 pt-0">
              {allFirstTimeBuyersIncentives.map(incentive => {
                const { title, description, link, id } = incentive.node
                return (
                  <div className="col col-md-8 col-lg-4 mb-3" key={id}>
                    <div className="card p-4 h-100 mt-0 pt-0 d-flex   justify-content-center ">
                      <div className="card-body d-flex flex-column justify-content-start ">
                        <p className="card-header text-center align-self-start">
                          {title}
                        </p>
                        <p className="card-text flex-fill">{description}</p>
                        <a
                          href={link}
                          target="_blank"
                          rel="noreferrer"
                          className="w-100 btn card-link rounded-0 mt-5 align-self-end mb-0 pb-3"
                        >
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
        <section className="container-fluid mx-0 px-0 py-20 ">
          <div className="container banner d-flex p-md-10 py-10">
            <StaticImage
              src="./../images/first-time-buyers/ftb-image.png"
              alt="A man reading a guide while talking on the phone"
              className="d-none d-md-block"
            />
            <div className="container d-flex flex-column justify-content-center ps-md-20">
              <p className="banner-title">What to do with this info?</p>
              <p className="subtitle text-start lh-sm">
                We know this can be a lot of overwhelming info and is why we
                encourage all of our first time buyers to sit down with Gurj to
                discuss their situation one-on-one. Having a conversation with
                an experienced industry professional will only help you organize
                and plan success in our market.{" "}
                <Link
                  className="text-reset text-decoration-underline"
                  to="/contact"
                >
                  Click here
                </Link>{" "}
                to get in contact with Gurj as well as to receive a full
                first-time buyers kit with additional details regarding the info
                on this page.
              </p>
            </div>
          </div>
        </section>
        <section className="home-qanda container-fluid pe-0 me-0 ">
          <div className="container mx-lg-auto px-lg-auto ">
            <div className="row">
              <div className="col-12 col-lg-6 d-flex flex-column align-items-center align-items-lg-start ">
                <h2 className="text-center text-lg-start title ls-tight my-5 ">
                  Why Go With Gurjivan?
                </h2>
                <p className="subtitle text-center text-lg-start title lh-sm pb-5">
                  Gurjivan specializes in working with both first time buyers
                  and investors. Much of Gurj’s realty work falls in two
                  categories: Helping you maximize your opportunities for his
                  first time buyers and helping his investors maximize their
                  return on their capital.
                </p>
                <p className="d-none d-lg-block subtitle text-start title lh-sm ">
                  This combination has allowed Gurjivan to develop his skillset
                  to assist first time buyers to best navigate and explore the
                  market together and set up his first time buying clients with
                  a plan for long term financial success. And as a young man
                  himself, you’re going to be hard pressed to find another
                  professional with the same strengths that understands first
                  hand how challenging this market can be for first time buyers.
                </p>
                <p className="d-block d-lg-none subtitle text-center title lh-sm mx-0 px-0 pb-5">
                  If you have any further questions, feel free to{" "}
                  <Link className="link" to="/contact">
                    contact Gurjivan.
                  </Link>
                </p>
              </div>
              <div className="justify-content-center col-12 col-lg-6 p-0 m-0">
                <div className="d-flex align-items-center justify-content-center">
                  <p className=" experience-title ">
                    Words from some of Gurj’s First Time Buyers
                    <FontAwesomeIcon
                      icon={faLevelDownAlt}
                      className="fa-icon "
                      transform="grow-8 right-15"
                    />
                  </p>
                </div>
                <div className="accordion  d-flex flex-column flex-fill mx-0 px-0">
                  <div className="row my-5 justify-content-center ">
                    <Swiper
                      slidesPerView="auto"
                      spaceBetween={10}
                      breakpoints={{
                        // when window width is >= 640px
                        640: {
                          slidesPerView: 1,
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
                      {experiences.map(experience => (
                        <SwiperSlide
                          className="swiper-card h-100 pb-10"
                          key={experience.node.id}
                        >
                          <div className="swiper-body card-outer col h-100 d-flex align-items-stretch">
                            <div className="card-testimonial card mb-3 d-flex align-self-stretch">
                              <div className="card-body py-10 text-start align-self-stretch">
                                <p className="lh-sm">
                                  {experience.node.experience}
                                </p>
                              </div>
                              <div className="card-footer d-flex ps-8 pe-5 justify-content-between">
                                <Stars />
                                <span>{experience.node.name}</span>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
              </div>
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
                rel="noreferrer"
                className="card-link btn rounded-0 px-5"
              >
                Read Testimonials
              </a>
            </div>
          </div>
        </section>
        <section className="container-fluid">
          <div className="container d-flex flex-column align-items-center">
            <p className="banner-title text-center pt-10 pb-5">
              Next Steps for First Time Buyers
            </p>
            <p className="subtitle text-center">
              The best thing a first-time buyer can do is reach out to a real
              estate professional to begin planning for their success. To
              discuss with Gurj further regarding all the relevant information
              applicable to you, please feel free to fill in your details below
              to book your first meeting.
            </p>
          </div>
          <div className="container banner"></div>
        </section>
        <section
          className="buyers-request container-fluid pb-10 align-items-center pt-0 mt-0 mb-10 border-0"
          id="contact"
        >
          <div className="container-request container mb-5 py-10 mt-20">
            <form
              method="post"
              action="/"
              netlify-honeypot="bot-field"
              data-netlify="true"
              name="buyerkit"
              className="g-3 text-center justify-content-center"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="bot-field" onChange={handleChange} />
              <input type="hidden" name="form-name" value="buyerkit" />
              <input
                type="hidden"
                name="type"
                value="First time buyer"
                onChange={handleChange}
              />
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
                        name="name"
                        className="form-control rounded-0 border-0"
                        placeholder="Name"
                        aria-label="Name"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col">
                      <input
                        type="tel"
                        name="number"
                        className="form-control rounded-0 border-0"
                        placeholder="Phone Number"
                        aria-label="Phone Number"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col">
                      <input
                        type="email"
                        name="email"
                        className="form-control rounded-0 border-0"
                        placeholder="Email Address"
                        aria-label="Email Address"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col d-grid">
                      <button
                        className="button link py-2 hover-animation"
                        type="submit"
                      >
                        Contact
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
        <section className="home-qanda container-fluid mb-20 ">
          <div className="container mx-lg-auto px-lg-auto ">
            <div className="row">
              <div className="col-12 d-flex flex-column align-items-center ">
                <h2 className="text-center text-lg-start title ls-tight my-5 ">
                  Additional Benefits and Information
                </h2>
                <p className="subtitle text-center lh-sm pb-20">
                  There is much other information you can take advantage of as a
                  first time home buyer, and Gurjivan wants you to be aware of
                  those as well. Click the dropdowns below to read about some of
                  the other benefits.
                </p>
              </div>
              <div className="justify-content-center col-12 p-0 m-0">
                <div className="accordion  d-flex flex-column justify-content-center mx-0 px-0">
                  {benefitsAndInfo.map((data, index) => {
                    return (
                      <div
                        className="accordion-item align-items-start rounded-0 mx-0 px-0 my-2"
                        key={data.node.id}
                      >
                        <h2
                          className="accordion-header"
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
                            <div className="text-start qanda">
                              {data.node.benefit}
                            </div>
                          </a>
                        </h2>
                        <div
                          id={"panelsStayOpen-collapse" + index}
                          className="accordion-collapse collapse"
                          aria-labelledby={"panelsStayOpen-heading" + index}
                        >
                          <div className="accordion-body">
                            <div className="qanda lh-sm text-start">
                              {data.node.description + " "}
                              <a
                                href={data.node.url}
                                className="text-reset text-decoration-underline"
                                target="_blank"
                                rel="noreferrer"
                              >
                                {data.node.urltext}
                              </a>
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
      </div>
    </Layout>
  )
}
