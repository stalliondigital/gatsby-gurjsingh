import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer"
const ArticlePreview = ({ posts }) => {
  if (!posts) return null
  if (!Array.isArray(posts)) return null
  // const plainTextBody = documentToPlainTextString(JSON.parse(post.body.raw))
  return (
    <div className="card-group row">
      {posts.map(post => (
        <div className="col-12 col-lg-4 mb-5 " key={post.slug}>
          <div className="blog-preview-card card border-0 m-4 h-100 ">
            {post.headerImage && (
              <GatsbyImage alt="" image={post.headerImage.gatsbyImage} />
            )}
            <div className="d-flex flex-column">
              <h2 className="blog-preview-title p-5">{post.title}</h2>
              <div className="blog-preview-text-overflow blog-preview-description mx-5">
                {post.paragraph?.raw &&
                  documentToPlainTextString(JSON.parse(post.paragraph.raw))}
              </div>
              <div className=" px-5 mt-5 mb-0">
                <Link
                  className="blog-preview-link-button rounded-0 py-2 px-10"
                  to={`/blog/${post.slug}`}
                >
                  Read Post
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ArticlePreview
