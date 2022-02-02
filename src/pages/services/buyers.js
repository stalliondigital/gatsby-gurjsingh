import React from "react"
import Layout from "../../components/Layout"
import { Link } from "gatsby"
import backgroundimage from "./../../images/bs-background.png"
import sol_1 from "./../../images/sol-1.png"
import sol_2 from "./../../images/sol-2.png"
import sol_3 from "./../../images/sol-3.png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowAltCircleDown } from "@fortawesome/free-solid-svg-icons"

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
                  Guiding you to your
                  <br />
                  dream home
                </h1>
                <p className="lead text-white text-opacity-80 fs-4 lh-sm">
                  How we tailor our services
                  <br /> best to serve you
                </p>
                <div className="row">
                  <div className="col-6 mt-10 d-grid pe-0">
                    <Link
                      to="/first-time-buyers"
                      className="btn btn-block btn-primary bg-yellow-500 border-none shadow-sm mx-2"
                    >
                      First Time Buyers
                    </Link>
                  </div>
                  <div className="col-6 mt-10 d-grid ps-0">
                    <Link
                      to="/services/sellers"
                      className="btn btn-block btn-neutral border-none mx-2"
                    >
                      I am a seller
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="solution container-fluid text-lg-start pb-5 pt-lg-6 align-items-center pt-10">
          <div className=" container-lg max-w-screen-xl   mb-5 ">
            <div className="row justify-content-center">
              <div className="col-5">
                <h2 className="ls-tight font-bolder display-5 text-white text-center mb-2 ">
                  Our Three Phase <br></br>Solution to Success
                </h2>
                <p className=" description text-white fw-light text-center lh-sm fs-5">
                  We organize our buying process down into three simple steps to
                  make the home buying process as simple, straight forward and
                  stress free as possible.
                </p>
              </div>
            </div>
          </div>
          <div className="card-container container align-items-center ">
            <div className="row justify-content-center row-cols-1 row-cols-lg-3">
              <div className="col-7 col-lg-4 mb-3 justify-content-center ">
                <div className="card p-4 h-100 ">
                  <div className="card-img p-4">
                    <img
                      src={sol_1}
                      className="card-img-top"
                      alt="Card two people discussing"
                    />
                  </div>
                  <div className="card-body row align-items-center ">
                    <span className="col-2 number card-title fs-5 p-2 fw-bold ">
                      1
                    </span>
                    <p className="col-10 card-text p-2 text-white fs-4 lh-sm ">
                      Onboarding Consulatation
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-7 col-lg-4 mb-3 justify-content-center">
                <div className="card p-4 h-100">
                  <div className="card-img p-4">
                    <img
                      src={sol_2}
                      className="card-img-top"
                      alt="Card a person talking on the phone"
                    />
                  </div>
                  <div className="card-body d-flex flex-row align-items-center">
                    <span className="col-2 number card-title fs-5 p-2 fw-bold ">
                      2
                    </span>
                    <p className="col-10 card-text p-2 text-white fs-4 lh-sm ">
                      Tailoring Our Services For You
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-7 col-lg-4 mb-3 justify-content-center">
                <div className="card p-4 h-100">
                  <div className="card-img p-4">
                    <img
                      src={sol_3}
                      className="card-img-top"
                      alt="Card a person next to a for sale sign"
                    />
                  </div>
                  <div className="card-body d-flex flex-row align-items-center">
                    <span className="col-2 number card-title fs-5 p-2 fw-bold ">
                      3
                    </span>
                    <p className="col-10 card-text p-2 text-white fs-4 lh-sm ">
                      Welcoming you to your dream home
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
        <section className="phases container-fluid text-lg-start pb-5 pt-lg-6 align-items-center pt-10">
          <div className=" container-lg max-w-screen-xl   mb-5 ">
            <div className="container">
              <h2 className="phase text-center fs-5 fw-light">PHASE ONE</h2>
              <h2 className="ls-tight font-bolder display-5 text-white text-center mb-2 ">
                Preparing You to Buy
              </h2>
              <div className="row justify-content-center">
                <div className="col-6">
                  <p className="description text-white fw-light text-center lh-sm fs-5 ">
                    Our first step toward success will be to discuss & plan
                    exactly what you need from your home to best position you
                    when exploring Greater Vancouver's real estate market.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
