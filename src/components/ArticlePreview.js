import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { renderRichText } from "gatsby-source-contentful/rich-text"

const ArticlePreview = ({ posts }) => {
  if (!posts) return null
  if (!Array.isArray(posts)) return null

  return (
    <div className="card-group d-flex flex-column flex-lg-row">
      {posts.map(post => (
        <div
          key={post.slug}
          className="blog-preview-card card phase-card border-0 m-5 pb-5 "
        >
          <GatsbyImage alt="" image={post.headerImage.gatsbyImage} />
          <h2 className="blog-preview-title p-5">{post.title}</h2>
          <div className="blog-preview-text-overflow blog-preview-description mx-5">
            {post.paragraph?.raw && renderRichText(post.paragraph)}
          </div>
          <div className=" px-5 mt-5 ">
            <Link
              className="blog-preview-link-button rounded-0 mb-5 py-2 px-10"
              to={`/blog/${post.slug}`}
            >
              Read Post
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ArticlePreview
