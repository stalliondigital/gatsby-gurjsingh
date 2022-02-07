import React from "react"
import Layout from "../components/Layout"

export default function NotFound() {
  return (
    <Layout>
      <div>
        <section className="bg-dark position-relative pt-48 pb-40   bg-size--cover">
          <div className="container">
            <h1 className="ls-tight font-bolder display-5 text-white mb-5">
              Sorry, the page you are looking for is private or does not exist.
            </h1>
          </div>
        </section>
      </div>
    </Layout>
  )
}
