import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Helmet from "react-helmet"
import Layout from "../components/Layout"
import ArticlePreview from "../components/ArticlePreview"
import BackgroundImage from "gatsby-background-image"
export default function BlogIndex() {
  const { headerImg, allContentfulBlog } = useStaticQuery(
    graphql`
      query {
        allContentfulBlog: allContentfulBlog {
          nodes {
            title
            slug
            paragraph {
              raw
            }
            headerImage {
              gatsbyImage(
                layout: FULL_WIDTH
                placeholder: BLURRED
                width: 424
                height: 212
              )
            }
          }
        }
        headerImg: file(relativePath: { eq: "blog/header-img.png" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )
  const posts = allContentfulBlog.nodes
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Gurjivan | Blog</title>
      </Helmet>
      <section className="container-fluid buyers-header pb-0 ps-0 ms-0 d-flex align-items-center justify-content-center">
        <div className="container row ps-0 ms-0 ">
          <BackgroundImage
            Tag={`section`}
            id={`test`}
            className="d-none d-md-block col col-md-6  "
            fluid={headerImg.childImageSharp.fluid}
            alt="Gurjivan portrait"
          ></BackgroundImage>
          <div className="col col-md-6 ps-10 header py-20">
            <div className="text-start my-20 pb-5 pt-lg-6">
              <h1 className="mb-5 header-title">Insights from Gurj</h1>
              <p className="header-subtitle">
                View Gurj’s latest blog posts to learn more about the market &
                how to take advantage. Gurj’s professional insights will help
                you explore, buy or sell in the Lower Mainland.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-posts container-fluid d-flex justify-content-center align-items-center">
        <div className="container">
          <ArticlePreview posts={posts} />
        </div>
      </section>
      <div className="p-20 m-20"></div>
    </Layout>
  )
}
