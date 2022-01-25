import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import gurjivanImage from "./../images/gurjivan-image.png"
import coupleTogether from "./../images/couple-together.png"
import backgroundimage from "./../images/background.png"
export default function Home() {
  return (
    <Layout>
      <div>
        <section
          className="home position-relative pt-48 pb-40  bg-cover bg-size--cover"
          style={{ background: `url(${backgroundimage})` }}
        >
          <div className="container-lg max-w-screen-xl position-relative overlap-10 text-center text-lg-start pt-5 pb-5 pt-lg-6">
            <div className="row row-grid align-items-center">
              <div className="header rounded-4 bg-black bg-opacity-50 p-10 col-9 col-lg-7 text-start ms-10">
                <h1 className="ls-tight font-bolder display-5 text-white mb-5">
                  Bridging the Gap Between Unimaginable and Possible
                </h1>
                <p className="lead text-white text-opacity-80 mb-10">
                  When it comes to buying or selling a home in this market, you
                  need to make sure you’re working with someone who has the
                  resources to get things done. When you go with Gurj you get
                  more than just experience that comes with generating results.
                </p>
                <div className="mt-10 align-items-start">
                  <Link
                    to="/services/buyers"
                    className="btn btn-lg btn-primary bg-yellow-500 border-none shadow-sm mx-2 px-lg-8"
                  >
                    I am a buyer
                  </Link>
                  <Link
                    to="/services/sellers"
                    className="btn btn-lg btn-neutral border-none mx-2 px-lg-8"
                  >
                    I am a seller
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-black reason-why container-fluid text-lg-start pb-5 pt-lg-6 align-items-center pt-10">
          <div className="container-lg max-w-screen-xl  bg-dark text-lg mb-5 border-start-5 border-warning rounded-end-5 border-end-0 rounded-start-2 ">
            <div className="row align-items-center">
              <div className="col-lg-8 p-10">
                <h2 className="ls-tight font-bolder display-5 text-white mb-5 p-10">
                  Why Gurjivan?
                </h2>
                <p className="lead text-white text-opacity-80 mb-10 ">
                  With a professional history in service & operations, there are
                  few who can match Gurj's ability of transparently getting
                  things done all while prioritizing the needs of his clients.
                  Regardless of if you are a first time buyer, investor, or real
                  estate mogul, Gurj will walk through the entire A-to-Z market
                  process ensuring & instilling confidence within all of his
                  clients and their deals.
                </p>
                <Link
                  to="/about"
                  className="btn btn-lg btn-primary bg-yellow-500 border-none shadow-sm mx-2 px-lg-8"
                >
                  More about Gurj
                </Link>
              </div>
              <div className="col-lg-4 pe-0">
                <div className="container-fluid">
                  <img src={gurjivanImage} alt="" className="img-fluid w-100" />
                </div>
              </div>
            </div>
          </div>
          <div className="container-lg max-w-screen-xl bg-dark mt-10 rounded-5">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <img src={coupleTogether} alt="" className="img-fluid w-100" />
              </div>
              <div className="col-lg-7">
                <div className="container p-5">
                  <h2 className="ls-tight font-bolder display-5 text-white mb-5 ">
                    Buying your first home?
                  </h2>
                  <p className="lead text-white text-opacity-80 mb-10">
                    Purchasing your first home can be a confusing process. Take
                    a look at our first time home buyers center for important
                    information you need to know.
                  </p>
                  <Link
                    to="/first-time-buyers"
                    className="btn btn-lg btn-primary bg-yellow-500 border-none shadow-sm mx-2 px-lg-8"
                  >
                    First Time Home Buyers Center
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="experience bg-black container-fluid text-lg-start pb-5 pt-lg-6 align-items-center pt-10">
          <div className="container-lg max-w-screen-xl   mb-5 ">
            <h2 className="ls-tight font-bolder display-5 text-white mb-5 text-center pb-5">
              What Others Say
            </h2>
            <div className="row my-5 g-4 justify-content-center row-cols-1 row-cols-lg-3">
              <div className="col-8 col-lg-4 ">
                <div className="card border-0 m-15 m-lg-3 p-4 p-lg-2 h-100">
                  <div className="card-body text-center">
                    <p>
                      “Jivan has been able to quickly indentify shifting market
                      trends and investment opportunities that many others have
                      missed. Using proprietary analysis tools Jivan is able to
                      back up his leads and finds with concrete facts.”
                    </p>
                  </div>
                  <div className="card-footer">Vince McGurik</div>
                </div>
              </div>
              <div className="col-8 col-lg-4 ">
                <div className="card border-0 m-15 m-lg-3 p-4 p-lg-2 h-100">
                  <div className="card-body text-center">
                    <p>
                      “Wow! I got referred to Gurj from a family friend and I
                      honestly didn't have high expectations after dealing with
                      my last realtor. But Gurj was so good! Communication,
                      responsiveness and ability to get things done was
                      surreal.”
                    </p>
                  </div>
                  <div className="card-footer">Daniel Randley</div>
                </div>
              </div>
              <div className="col-8 col-lg-4 ">
                <div className="card border-0 m-15 m-lg-3 p-4 p-lg-2 h-100">
                  <div className="card-body text-center">
                    <p>
                      “Jivan is one of the most professional, forward thinking
                      guys I have met. Will continue to do business at anytime.”
                    </p>
                  </div>
                  <div className="card-footer">Christopher Cavalier</div>
                </div>
              </div>
              <div className="col-8 col-lg-4 ">
                <div className="card border-0 m-15 m-lg-3 p-4 p-lg-2 h-100">
                  <div className="card-body text-center">
                    <p>
                      “Gurjivan Singh is the best realtor I have ever dealt
                      with. Very professional, experienced, and helpful. Highly
                      recommend.”
                    </p>
                  </div>
                  <div className="card-footer">Kelen Maria</div>
                </div>
              </div>
              <div className="col-8 col-lg-4 ">
                <div className="card border-0 m-15 m-lg-3 p-4 p-lg-2 h-100">
                  <div className="card-body text-center">
                    <p>
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
        </section>
        <section className="request">
          <i>icon</i>
          <h2>Request a Detailed Buyers Kit</h2>
          <h3>All the information you need as a buyer in your hands.</h3>
          <input type="text" name="name" id="name" placeholder="Name" />
          <input
            type="number"
            name="phone"
            id="phone"
            placeholder="Phone Number"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
          />
          <button>Send</button>
        </section>
      </div>
    </Layout>
  )
}
