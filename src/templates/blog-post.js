import React from "react"
import { Link, graphql } from "gatsby"
import get from "lodash/get"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import Hero from "../components/Hero"

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, "data.contentfulBlog")
    const previous = get(this.props, "data.previous")
    const next = get(this.props, "data.next")

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
          <h3 className="blog-body-tertuiry-title">{children}</h3>
        ),
        [BLOCKS.PARAGRAPH]: (node, children) => (
          <p className="blog-body-paragraph py-5">{children}</p>
        ),
        [BLOCKS.EMBEDDED_ASSET]: node => {
          const { gatsbyImageData, description } = node.data.target
          return (
            <div className="d-flex flex-column py-10 my-5">
              <GatsbyImage
                image={getImage(gatsbyImageData)}
                alt={description}
              />
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
              <div className="col-5 col-lg-3 blog-component-image d-flex align-self-center justify-content-center align-items-center pb-5 px-10">
                <GatsbyImage
                  image={getImage(image.gatsbyImageData)}
                  alt={image.description}
                />
              </div>
              <div className="col col-lg-9 mb-10 align-self-center">
                <h1 className="blog-body-component-title">{title}</h1>
                <p className="blog-body-component-description">
                  {deski.description}
                </p>
              </div>
            </div>
          )
        },
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
            {(previous || next) && (
              <nav>
                <ul>
                  {previous && (
                    <li>
                      <Link to={`/blog/${previous.slug}`} rel="prev">
                        ← {previous.title}
                      </Link>
                    </li>
                  )}
                  {next && (
                    <li>
                      <Link to={`/blog/${next.slug}`} rel="next">
                        {next.title} →
                      </Link>
                    </li>
                  )}
                </ul>
              </nav>
            )}
          </div>
        </section>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $slug: String!
    $previousPostSlug: String
    $nextPostSlug: String
  ) {
    contentfulBlog(slug: { eq: $slug }) {
      slug
      title
      aboveSubheading
      belowSubheading
      createdAt(formatString: "MMMM Do, YYYY")
      author {
        nameOfAuthor
        profileImage {
          gatsbyImage(
            layout: FULL_WIDTH
            placeholder: BLURRED
            width: 424
            height: 212
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
    previous: contentfulBlog(slug: { eq: $previousPostSlug }) {
      slug
      title
    }
    next: contentfulBlog(slug: { eq: $nextPostSlug }) {
      slug
      title
    }
  }
`
