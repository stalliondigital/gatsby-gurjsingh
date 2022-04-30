import React from "react"
import Layout from "../../components/Layout"
import { navigate } from "gatsby-link"
import { graphql, useStaticQuery, Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Helmet from "react-helmet"
import Img from "gatsby-image"
import Stars from "../../components/Stars"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper"
import "swiper/css"
import "swiper/css/navigation"
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

  const { headerImg, investorProcess, experienceProcess } = useStaticQuery(
    graphql`
      query {
        headerImg: file(relativePath: { eq: "investors/header-img.png" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        investorProcess: allInvestorsProcessJson {
          edges {
            node {
              id
              title
              desc
              alt
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
        experienceProcess: allExperienceJson {
          edges {
            node {
              id
              name
              experience
            }
          }
        }
      }
    `
  )
  const process = investorProcess.edges
  const experiences = experienceProcess.edges
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Gurjivan | Investors</title>
      </Helmet>
      <div>
        <section className="container-fluid buyers-header pb-0 ps-0 ms-0">
          <div className="container-fluid row ps-0 ms-0 ">
            <BackgroundImage
              Tag={`section`}
              id={`test`}
              className="d-none d-md-block col col-md-4 col-lg-6 "
              fluid={headerImg.childImageSharp.fluid}
              alt="phone, calculator and a pen"
            ></BackgroundImage>
            <div className="col col-md-8 col-lg-6 ps-10 header py-20">
              <div className="text-start my-20 pb-5 pt-lg-6">
                <h1 className="mb-5 header-title">
                  How We Discover Value Where Others Cannot
                </h1>
                <p className="header-subtitle">
                  Explore how our vast systems of information empower our
                  investor focused clients.
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
        <section className="phases container-fluid container-text-lg-start align-items-center ">
          <div className="container pt-10 d-flex flex-column align-items-center">
            <h2 className="title mb-2 ">Preparing You to Buy</h2>
            <p className="subtitle text-center mb-10">
              Our first step toward success will be to discuss & plan exactly
              what you need from your home to best position you when exploring
              Greater Vancouver's real estate market.
            </p>
            <div className="card-group d-flex flex-column flex-lg-row">
              {process.map(phase => (
                <div className="card m-5 " key={phase.node.id}>
                  <Img
                    fluid={phase.node.img.childImageSharp.fluid}
                    alt={phase.node.alt}
                  />
                  <div className="card-body white-card-body">
                    <h5 className="card-title">{phase.node.title}</h5>
                    <p className="card-text lh-sm">{phase.node.desc} </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
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
                    <SwiperSlide
                      className="swiper-card h-100 pb-10"
                      key={experience.node.id}
                    >
                      <div className="swiper-body mx-5 col h-100 d-flex align-items-stretch">
                        <div className="card-testimonial card mb-3 d-flex align-self-stretch">
                          <div className="card-body py-10 ps-8 pe-5 text-start align-self-stretch">
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
                <div className="d-none d-lg-flex card-container col-10 row row-cols-1 row-cols-lg-3 ">
                  {experiences.map(experience => (
                    <div
                      className="col h-100 d-flex align-items-stretch"
                      key={experience.node.id}
                    >
                      <div className="card-testimonial card mb-3 d-flex align-self-stretch">
                        <div className="card-body py-10 ps-8 pe-5 text-start align-self-stretch">
                          <p className="lh-sm">{experience.node.experience}</p>
                        </div>
                        <div className="card-footer d-flex ps-8 pe-5 justify-content-between">
                          <Stars />
                          <span>{experience.node.name}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="buyers-request container-fluid pb-10 align-items-center mb-10">
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
                      Contact Gurj to join his investor client list
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
      </div>
    </Layout>
  )
}
