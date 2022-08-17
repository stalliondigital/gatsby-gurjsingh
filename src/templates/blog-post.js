import React from "react"
import { graphql } from "gatsby"
import get from "lodash/get"
import { navigate } from "gatsby-link"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import Hero from "../components/Hero"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default function BlogPostTemplate({ data }) {
  const post = data.contentfulBlog
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

  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <b className="font-bold">{text}</b>,
    },
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => (
        <h1 className="blog-body-title my-20">{children}</h1>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <h2 className="blog-body-secondary-title my-10">{children}</h2>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <h3 className="blog-body-tertuiry-title my-10">{children}</h3>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className="blog-body-paragraph my-5 col-9">{children}</p>
      ),
      [BLOCKS.EMBEDDED_ASSET]: node => {
        const { gatsbyImageData, description } = node.data.target
        return (
          <div className="d-flex flex-column py-10 my-5">
            <GatsbyImage image={getImage(gatsbyImageData)} alt={description} />
            <p className="blog-body-image-description pt-5 text-center">
              {description}
            </p>
          </div>
        )
      },
      [BLOCKS.EMBEDDED_ENTRY]: node => {
        const { image, title, deski } = node.data.target
        return (
          <div className="d-flex flex-column flex-md-row ">
            <div className="col-5 col-lg-2 blog-component-image d-flex align-self-center justify-content-center align-items-center pb-5 px-10">
              <GatsbyImage
                image={getImage(image.gatsbyImageData)}
                alt={image.description}
              />
            </div>
            <div className="col col-lg-10 mb-10 align-self-center">
              <h1 className="blog-body-component-title pb-5">{title}</h1>
              <p className="blog-body-component-description">
                {deski.description}
              </p>
            </div>
          </div>
        )
      },

      [BLOCKS.LIST_ITEM]: (node, children) => {
        const UnTaggedChildren = documentToReactComponents(node, {
          renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => children,
            [BLOCKS.LIST_ITEM]: (node, children) => children,
          },
        })
        return <li className="blog-body-li">{UnTaggedChildren}</li>
      },
      [BLOCKS.UL_LIST]: (node, children) => (
        <ul className="blog-body-ul my-0">{children}</ul>
      ),
      [INLINES.HYPERLINK]: (node, children) => {
        const { uri } = node.data
        return (
          <a href={uri} className="underline">
            {children}
          </a>
        )
      },
    },
  }
  return (
    <Layout>
      <section className="container-fluid blog-header">
        <div className="container-xxl ">
          <Hero
            image={post.headerImage?.gatsbyImage}
            title={post.title}
            aboveSubheading={post.aboveSubheading}
            belowSubheading={post.belowSubheading}
            createdAt={post.createdAt}
            author={post.author}
          />
          <div className="hide d-none d-lg-block my-5 py-5"></div>
          <div className="container mt-lg-20 pt-lg-20">
            {post.paragraph?.raw && renderRichText(post.paragraph, options)}
          </div>
        </div>
      </section>
      {post.contactTitle && (
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
              name="firstMeeting"
              className="g-3 text-center justify-content-center"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="bot-field" onChange={handleChange} />
              <input type="hidden" name="form-name" value="firstMeeting" />
              <div className="row py-5">
                <div className="col d-flex flex-column flex-lg-row row">
                  <div className="col col-lg-7 px-10 justify-content-center d-flex flex-column align-items-center align-items-lg-start">
                    <h2 className="title text-center text-lg-start pb-5">
                      {post.contactTitle}
                    </h2>
                    <p className="subtitle text-center text-lg-start mb-10 lh-sm">
                      {post.contactParagraph}
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
      )}
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlog(slug: { eq: $slug }) {
      slug
      title
      aboveSubheading
      belowSubheading
      contactTitle
      contactParagraph
      createdAt(formatString: "MMMM Do, YYYY")
      author {
        nameOfAuthor
        profileImage {
          gatsbyImage(
            layout: FULL_WIDTH
            placeholder: BLURRED
            width: 980
            height: 980
          )
        }
      }
      headerImage {
        gatsbyImage(
          layout: FULL_WIDTH
          placeholder: BLURRED
          width: 424
          height: 212
        )
      }
      paragraph {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            title
            description
            gatsbyImageData(width: 1000)
            __typename
          }
          ... on ContentfulImageContentComponent {
            contentful_id
            title
            __typename
            image {
              gatsbyImageData(width: 1000)
            }
            deski: description {
              description
            }
          }
        }
      }
    }
  }
`
