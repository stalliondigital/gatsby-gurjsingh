import React from "react"
import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout>
      <div>
        <section className="home position-relative pt-48 pb-40  bg-cover bg-size--cover">
          <span className="position-absolute top-0 start-0 w-full h-full opacity-80"></span>
          <div className="container-lg max-w-screen-xl   position-relative overlap-10 text-center text-lg-start pt-5 pb-5 pt-lg-6">
            <div className="row row-grid align-items-center">
              <div className="header rounded-5 bg-black bg-opacity-50 p-10 col-lg-8 text-center text-lg-start">
                <h1 className="ls-tight font-bolder display-5 text-white mb-5">
                  Bridging the Gap Between Unimaginable and Possible
                </h1>
                <p className="lead text-white text-opacity-80 mb-10 w-lg-2/3">
                  When it comes to buying or selling a home in this market, you
                  need to make sure you’re working with someone who has the
                  resources to get things done. When you go with Gurj you get
                  more than just experience that comes with generating results.
                </p>
                <div className="mt-10">
                  <a
                    href="#"
                    className="btn btn-lg btn-primary bg-yellow-500 border-none shadow-sm mx-2 px-lg-8"
                  >
                    I am a buyer
                  </a>
                  <a
                    href="#"
                    className="btn btn-lg btn-neutral border-none mx-2 px-lg-8"
                  >
                    I am a seller
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
