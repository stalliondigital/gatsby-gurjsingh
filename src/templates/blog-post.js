import React from "react"
import { Link, graphql } from "gatsby"
import get from "lodash/get"
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer"

import Layout from "../components/Layout"

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, "data.contentfulBlog")
    const previous = get(this.props, "data.previous")
    const next = get(this.props, "data.next")
    const plainTextBody = documentToPlainTextString(
      JSON.parse(post.paragraph.raw)
    )

    return (
      <Layout>
        <h1>{post.title}</h1>
        <p>{plainTextBody}</p>
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
      paragraph {
        raw
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
