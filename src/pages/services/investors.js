import React from "react"
import Layout from "../../components/Layout"
import { Link } from "gatsby"
import backgroundimage from "./../../images/background_investors.png"
import diff_img from "./../../images/prep-3.png"
import inv_1 from "./../../images/investors-1.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons"

export default function Home() {
  return (
    <Layout>
      <div>
        <section
          className="home position-relative pt-48 pb-20  bg-cover bg-size--cover"
          style={{ background: `url(${backgroundimage})` }}
        >
          <div className="container-lg max-w-screen-xl position-relative overlap-10 text-center pt-5 pb-5 pt-lg-6">
            <div className="row row-grid align-items-center justify-content-center text-center">
              <div className="header rounded-4 bg-black bg-opacity-50 p-10 col-9 col-lg-7 text-center ms-10">
                <h1 className="ls-tight font-bolder display-5 text-white mb-5">
                  How We Discover Value Where Others Can’t
                </h1>
                <p className="lead text-white text-opacity-80 fs-4 lh-sm">
                  Explore how our vast systems of information empower our
                  investor focused clients
                </p>
                <div className="row justify-content-center">
                  <div className="col-6 mt-10 d-grid pe-0">
                    <Link
                      to="/contact"
                      className="primary btn btn-block border-none shadow-sm mx-2"
                    >
                      Contact Gurjivan
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="phases container-fluid text-lg-start align-items-center pt-20">
          <div className=" container-lg max-w-screen-xl   mb-5 ">
            <div className="container justify-content-center">
              <div className="d-flex justify-content-center">
                <img
                  src={diff_img}
                  className="img-fluid pe-lg-7"
                  alt="a person drawing graphs on a whiteboard"
                />
              </div>
              <h2 className="ls-tight font-bolder display-5 text-white text-center mb-2 ">
                The Difference is in the Process
              </h2>
              <div className="row justify-content-center">
                <div className="col-8">
                  <p className="description text-white fw-light text-center lh-sm fs-5 ">
                    Working as Technical Consultant at the highest level across
                    Pacific Canada had enabled Gurj to look further past the
                    traditional approach of depending solely on personal &
                    professional relationships to generate positive results for
                    his clients within the realm of real estate.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container container-fluid ">
            {/* PART: Why Information is King. */}
            <div className="pt-20 pb-10 row align-items-start justify-content-start ">
              <div className="col-12 col-lg-10">
                <h3 className="text-white fs-4 pb-3 ">
                  Why Information is King.
                </h3>
                <p className="description text-white fw-light lh-sm fs-5 ">
                  Gurjivan has built a network of information by collecting,
                  storing, and indexing past and current sales, developments,
                  expansions, municipal projects, and so much more. With the
                  wealth of information regarding almost all past real estate
                  ventures within the last 80 years, he is able to juxtapose and
                  analyze this with the database of upcoming projects he also
                  has to best identify the likelihood of what past trends will
                  repeat themselves in the near future.
                </p>
              </div>
            </div>

            {/* PART: Better Data, Better Results, Better Returns */}
            <div className="row align-items-start justify-content-start pt-10">
              <div className="col-12 col-lg-8">
                <h3 className="text-white fs-4 pb-7 ">
                  Better Data, Better Results, Better Returns
                </h3>
                <p className="description text-white fw-light lh-sm fs-5 pe-7 ">
                  Using the combination of his personal & professional contacts,
                  his system of historical information and his algorithm of
                  predicting future trends, Gurj can offer his clients a full
                  encompassing report on almost every project all while being
                  able to pull data on the historical trends to support his
                  findings. With this, he can best position his clientele in
                  almost any and every deal.
                </p>
              </div>
              <div className="d-flex align-items-center justify-content-center col-9 col-lg-3 pb-7 pb-lg-2">
                <img
                  src={inv_1}
                  className="img-fluid pe-lg-6 "
                  alt="a magnifying glass on a document"
                />
              </div>
            </div>
            {/* PART: Our Onboarding Consultation */}
            <div className="py-20 row row align-items-start justify-content-start">
              <div className="col-12 col-lg-10">
                <h3 className="text-white fs-4 pb-3 ">
                  Bringing it Full Circle
                </h3>
                <p className="description text-white fw-light lh-sm fs-5 ">
                  Utilizing this system for his investor-oriented clients with
                  the network of builders, developers, and realtors amongst a
                  variety of other key professionals in the world of real
                  estate, it is easy to see why Gurj has already had tremendous
                  success representing clients of all calibers. Regardless of if
                  you are looking for your first income generating property, or
                  if you’re a seasoned veteran looking to expand their
                  portfolio, Gurjivan has both the skills and industry-leading
                  tools to guide you to accomplish your goals.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="request text-lg-start pb-10 pt-lg-6 align-items-center pt-10">
          <div className="container-request container max-w-screen-lg mb-5 rounded-3 py-10 ">
            <form className="g-3 text-center justify-content-center py-5">
              <div className="row justify-content-center">
                <div className="col-1 d-flex align-items-center justify-content-start">
                  <h2 className="phone-icon">
                    <FontAwesomeIcon
                      className="font-awesome"
                      icon={faPhoneAlt}
                      size="5x"
                    />
                  </h2>
                </div>
                <div className="col-8 px-0 d-flex align-items-center">
                  <h2 className="ls-tight font-bolder fs-1 text-white ps-0">
                    Get in contact with Gurj today and be added to his investor
                    client list
                  </h2>
                </div>
                <div className="col-4 col-lg-3 d-flex align-items-center justify-content-center">
                  <Link
                    to="/contact"
                    className="primary btn btn-block border-none bg-white fs-5"
                  >
                    Contact Gurjivan
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </section>

        <section className="experience container-fluid text-lg-start pt-lg-6 align-items-center py-10 pb-40">
          <div className="experience-inside container-fluid text-lg-start">
            <div className="experience-container container-lg max-w-screen-xl   mb-5 ">
              <h2 className="ls-tight font-bolder display-5 text-white mb-5 text-center pb-5">
                What Others Say
              </h2>
              <div className="row my-5 g-4 justify-content-center row-cols-1 row-cols-lg-3">
                <div className="card-container col-8 col-lg-4 ">
                  <div className="card-testimonial card m-15 m-lg-3 h-100">
                    <div className="card-body p-5 text-start">
                      <p className="lh-sm">
                        “Super helpful in answering every question I had. As
                        someone with next to no knowledge in real estate, he was
                        able to explain in an easy to understand way. Have not
                        met anyone more professional before!”
                      </p>
                    </div>
                    <div className="card-footer">Adam Tran</div>
                  </div>
                </div>
                <div className="card-container col-8 col-lg-4 ">
                  <div className="card-testimonial card m-15 m-lg-3 h-100">
                    <div className="card-body p-5 text-start">
                      <p className="lh-sm">
                        “A very honest and pleasant person. He gives super
                        genuine responses and advice and is overall just a very
                        professional and outstanding person.”
                      </p>
                    </div>
                    <div className="card-footer">Kenneth Juang</div>
                  </div>
                </div>
                <div className="card-container col-8 col-lg-4 ">
                  <div className="card-testimonial card m-15 m-lg-3 h-100">
                    <div className="card-body p-5 text-start">
                      <p className="lh-sm">
                        “After countless experiences with realtors, I can
                        confidently say that my wife and I have thoroughly
                        enjoyed seeking for a home with Gurj. He made it simple
                        and selling our house was an even easier task. Hopefully
                        Gurj will be practicing when we move again.”
                      </p>
                    </div>
                    <div className="card-footer">Tommy Le</div>
                  </div>
                </div>
                <div className="card-container col-8 col-lg-4 ">
                  <div className="card-testimonial card m-15 m-lg-3 h-100">
                    <div className="card-body p-5 text-start">
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
                    <div className="card-body p-5 text-start">
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
      </div>
    </Layout>
  )
}
