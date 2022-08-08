import React from "react"
import { graphql } from "gatsby"
import get from "lodash/get"

import Layout from "../components/Layout"
import ArticlePreview from "../components/article-preview"

class BlogIndex extends React.Component {
  render() {
    const posts = get(this, "props.data.allContentfulBlog.nodes")

    return (
      <Layout>
        <ArticlePreview posts={posts} />
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
    allContentfulBlog {
      nodes {
        title
        slug
        paragraph {
          raw
        }
      }
    }
  }
`
