import React from "react"
import { Link } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"

const ArticlePreview = ({ posts }) => {
  if (!posts) return null
  if (!Array.isArray(posts)) return null

  return (
    <ul>
      {posts.map(post => {
        return (
          <li key={post.slug}>
            <Link to={`/blog/${post.slug}`}>
              <h2>{post.title}</h2>
            </Link>
            <div>
              {post.description?.raw && renderRichText(post.description)}
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default ArticlePreview
