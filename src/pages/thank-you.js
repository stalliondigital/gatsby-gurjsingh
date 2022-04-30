import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import backgroundimage from "./../images/home/background.png"

const sectionBackground = {
  background: `linear-gradient(90.22deg, rgba(206, 170, 84, 0.72) 0.17%, rgba(206, 170, 84, 0) 100.39%),
        url(${backgroundimage})`,
  backgroundPosition: "center center",
}

const ThanksPage = () => (
  <Layout>
    <section
      className="home-header pt-48 pb-20 bg-cover"
      style={sectionBackground}
    >
      <div className="container-xxl text-center text-lg-start pb-40 pt-lg-6">
        <div className="row justify-content-center">
          <div className="header col-10 col-lg-7 text-start ms-10">
            <h1 className="home-title mb-5 text-uppercase fw-light ">
              Thanks for submitting your form!
            </h1>
            <div className="mt-10 align-items-start rounded-0">
              <Link
                to="/"
                className="header-buttom btn me-2 px-lg-8 border-none rounded-0 py-3"
              >
                Go back to the homepage
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default ThanksPage
