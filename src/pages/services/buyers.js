import React from "react"
import Layout from "../../components/Layout"
import { navigate } from "gatsby-link"
import { graphql, useStaticQuery, Link } from "gatsby"
import Helmet from "react-helmet"
import BackgroundImage from "gatsby-background-image"
import { StaticImage } from "gatsby-plugin-image"
import Img from "gatsby-image"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper"
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
      .then(() => navigate("/thank-you/"))
      .catch(error => alert(error))
  }

  const { headerImg, headerImgSmall, phaseOne, phaseTwo, phaseThree } =
    useStaticQuery(
      graphql`
        query {
          headerImg: file(relativePath: { eq: "buyers/header-img.png" }) {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          headerImgSmall: file(
            relativePath: { eq: "buyers/header-img-small.png" }
          ) {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          phaseOne: allBuyersPhaseOneJson {
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
          phaseTwo: allBuyersPhaseTwoJson {
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
          phaseThree: file(relativePath: { eq: "buyers/phasethree_1.png" }) {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      `
    )
  const phases = phaseOne.edges
  const phasesTwo = phaseTwo.edges

  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Gurjivan | Buyers</title>
      </Helmet>
      <div>
        <section className="container-fluid buyers-header pb-0 pe-0 me-0">
          <div className="container-fluid row pe-0 me-0 ">
            <div className="col col-md-8 col-lg-6 header py-20 d-flex align-items-end justify-content-end">
              <div className="text-start my-20 pb-5 pt-lg-6 ">
                <h1 className="mb-5 header-title align-self-end">
                  Guiding you to your dream home
                </h1>
                <p className="header-subtitle align-self-start">
                  How we tailor our services best to serve you
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
              className="d-none d-lg-block col col-md-4 col-lg-6"
              fluid={headerImg.childImageSharp.fluid}
              alt="a couple through a house guide with a realtor"
            ></BackgroundImage>
            <BackgroundImage
              Tag={`section`}
              id={`test`}
              className="d-none d-md-block d-lg-none col col-md-4 col-lg-6"
              fluid={headerImgSmall.childImageSharp.fluid}
              alt="a couple through a house guide with a realtor"
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
              <div className="col col-md-8 col-lg-4 mb-3 ">
                <div className="card p-4 h-100 mt-0 pt-0">
                  <div className="card-body d-flex">
                    <span className="card-number pt-n10 mt-n10">1</span>
                    <p className="card-header p-2 ms-n10 mt-5 pt-7 text-center">
                      Onboarding Consultation
                    </p>
                  </div>
                  <div className="card-img d-flex justify-content-center ">
                    <StaticImage
                      src="./../../images/buyers/works_1.png"
                      alt="Two people talking about the home buying process"
                    />
                  </div>
                </div>
              </div>
              <div className="col col-md-8 col-lg-4 mb-3 ">
                <div className="card p-4 h-100 mt-0 pt-0">
                  <div className="card-body d-flex">
                    <span className="card-number pt-n10 mt-n10">2</span>
                    <p className="card-header p-2 ms-n10 mt-5 pt-7 text-center">
                      Tailoring Our Services For You
                    </p>
                  </div>
                  <div className="card-img d-flex justify-content-center ">
                    <StaticImage
                      src="./../../images/buyers/works_2.png"
                      alt="A man with a computer and a phone"
                    />
                  </div>
                </div>
              </div>
              <div className="col col-md-8 col-lg-4 mb-3 ">
                <div className="card p-4 h-100 mt-0 pt-0">
                  <div className="card-body d-flex">
                    <span className="card-number pt-n10 mt-n10">3</span>
                    <p className="card-header p-2 ms-n10 mt-5  pt-7 text-center">
                      Welcoming you to your dream home
                    </p>
                  </div>
                  <div className="card-img d-flex justify-content-center ">
                    <StaticImage
                      src="./../../images/buyers/works_3.png"
                      alt="A woman with a for sale sign"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="phases container-fluid container-text-lg-start align-items-center ">
          <div className="container pt-10 d-flex flex-column align-items-center">
            <h2 className="uppertitle  pt-5">PHASE ONE</h2>
            <h2 className="title mb-2 ">Preparing You to Buy</h2>
            <p className="subtitle text-center mb-10">
              Our first step toward success will be to discuss & plan exactly
              what you need from your home to best position you when exploring
              Greater Vancouver's real estate market.
            </p>
            <div className="card-group d-flex flex-column flex-lg-row">
              {phases.map(phase => (
                <div className="card m-5 " key={phase.node.id}>
                  <Img
                    fluid={phase.node.img.childImageSharp.fluid}
                    alt={phase.node.alt}
                  />
                  <div className="card-body white-card-body">
                    <h5 className="card-title">{phase.node.title}</h5>
                    <p className="card-text">{phase.node.desc} </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <div className="container-fluid banner my-0 py-20">
          <div className="container banner-text">
            <p className="lh-sm">
              We will discover exactly what you are looking for, go through,
              plan and discuss expecting closing costs when buying a home,
              ensure you are taken care of with a preapproval and set up
              everything we need for success when we are ready to enter the
              market.
            </p>
          </div>
        </div>
        <section className="container-fluid d-flex flex-column align-items-center mt-10">
          <h2 className="uppertitle  pt-5">PHASE TWO</h2>
          <h2 className="title mb-2 ">Evolving Our Services for You</h2>
          <p className="subtitle text-center mb-10">
            The Difference lays within our process of serving you. Gurjivan
            takes pride in his ability to adapt his services and share
            information in ways that’s most convenient and hassle free for his
            clients.
          </p>
          <div className="container banner py-20">
            <div className="container-sm ">
              <Swiper
                cssMode={true}
                navigation={true}
                spaceBetween={30}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper d-none d-lg-block "
              >
                {phasesTwo.map(phase => (
                  <SwiperSlide className="" key={phase.node.id}>
                    <div className="row d-flex align-items-center justify-content-center h-100 pb-10">
                      <div className="col-8 h-100">
                        <div className="mb-3 h-100">
                          <div className="white-card-body d-flex">
                            <Img
                              fluid={phase.node.img.childImageSharp.fluid}
                              alt={phase.node.alt}
                              className="col-5"
                            />
                            <div className="col-7">
                              <div className="p-10">
                                <h5 className="card-title">
                                  {phase.node.title}
                                </h5>
                                <p className="card-text">{phase.node.desc}</p>
                                <p className="card-text">
                                  <small className="text-muted"></small>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <Swiper
                pagination={{
                  bullets: true,
                }}
                spaceBetween={30}
                modules={[Pagination]}
                className="mySwiper d-lg-none"
              >
                {phasesTwo.map(phase => (
                  <SwiperSlide className="h-100" key={phase.node.id}>
                    <div className="row d-flex align-items-center justify-content-center h-100 pb-10">
                      <div className="col h-100">
                        <div className="mb-3 h-100">
                          <div className="white-card-body d-flex ">
                            <Img
                              fluid={phase.node.img.childImageSharp.fluid}
                              alt={phase.node.alt}
                              className="col-5 d-none d-md-block "
                            />
                            <div className="col h-100">
                              <div className=" p-10">
                                <h5 className="card-title">
                                  {phase.node.title}
                                </h5>
                                <p className="card-text lh-sm">
                                  {phase.node.desc}
                                </p>
                                <p className="card-text">
                                  <small className="text-muted"></small>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </section>
        <section className="container d-flex flex-column align-items-center">
          <h2 className="uppertitle  pt-5">PHASE Three</h2>
          <h2 className="title mb-2 ">Welcoming You to Your New Home</h2>
          <p className="subtitle text-center mb-10">
            The most difficult and stressful part of the process is over. Now we
            can start shift our energy from finding you the house you love, to
            making your new property your perfect home.
          </p>
          <div className="white-card-body container d-flex row px-0 flex-column flex-lg-row align-items-center">
            <Img
              Tag={`section`}
              id={`test`}
              className="col"
              fluid={phaseThree.childImageSharp.fluid}
              alt="a couple recieving keys of their new house"
            ></Img>
            <div className="col d-flex justify-content-center  align-items-center ">
              <p className="phase-text  p-10">
                When we get confirmation that your deal goes through and your
                new home is officially yours, Gurj will assist with additional
                tools and benefits to make post-possession as seamless as
                possible. Some benefits include but are not limited to, a full
                move-in checklist, contacts for furnishing & electronics outlets
                at discounted prices, moving service referrals, contacts for
                priority service installations and more.
              </p>
            </div>
          </div>
        </section>
        <section className="buyers-request container-fluid pb-10 align-items-center mb-10">
          <div className="container-request container mb-5 py-10 mt-20">
            <form
              method="post"
              action="/"
              netlify-honeypot="bot-field"
              data-netlify="true"
              name="buyerClient"
              className="g-3 text-center justify-content-center"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="bot-field" onChange={handleChange} />
              <input type="hidden" name="form-name" value="buyerClient" />
              <div className="row py-5">
                <div className="col d-flex flex-column flex-lg-row row">
                  <div className="col col-lg-7 px-10 justify-content-center d-flex flex-column align-items-center align-items-lg-start">
                    <h2 className="title text-center text-lg-start pb-5">
                      Excited to start the home buying process?
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
      </div>
    </Layout>
  )
}
