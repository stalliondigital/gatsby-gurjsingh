import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer"
import Img from "gatsby-image"
const ArticlePreview = ({ posts, placeholderImg }) => {
  // State for the list
  const [list, setList] = useState([...posts.slice(0, 9)])

  // State to trigger oad more
  const [loadMore, setLoadMore] = useState(false)

  // State of whether there is more to load
  const [hasMore, setHasMore] = useState(posts.length > 9)

  // Load more button click
  const handleLoadMore = () => {
    setLoadMore(true)
  }

  // Handle loading more articles
  useEffect(() => {
    if (loadMore && hasMore) {
      const currentLength = list.length
      const isMore = currentLength < posts.length
      const nextResults = isMore
        ? posts.slice(currentLength, currentLength + 9)
        : []
      setList([...list, ...nextResults])
      setLoadMore(false)
    }
  }, [loadMore, hasMore]) //eslint-disable-line
  //Check if there is more
  useEffect(() => {
    const isMore = list.length < posts.length
    setHasMore(isMore)
  }, [list]) //eslint-disable-line
  if (!posts) return null
  if (!Array.isArray(posts)) return null
  // const plainTextBody = documentToPlainTextString(JSON.parse(post.body.raw))
  const image = getImage(placeholderImg)
  return (
    <div className="article-list ">
      {list.map(post => (
        <div className=" " key={post.slug}>
          <div className="blog-preview-card card border-0 h-100 ">
            {post.headerImage ? (
              <GatsbyImage alt="" image={post.headerImage.gatsbyImage} />
            ) : (
              <GatsbyImage image={image} className="placeholder-image" alt="" />
            )}
            <div className="d-flex flex-column">
              <h2
                className="blog-preview-title p-5 title-tooltip"
                title={post.title}
              >
                {post.title}
              </h2>
              <div className="blog-preview-text-overflow blog-preview-description mx-5">
                {post.paragraph?.raw &&
                  documentToPlainTextString(JSON.parse(post.paragraph.raw))}
              </div>
              <div className=" px-5 mt-5 mb-0 pb-5">
                <Link
                  className="blog-preview-link-button rounded-0 py-2 px-10 "
                  to={`/blog/${post.slug}`}
                >
                  Read Post
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
      {hasMore && (
        <div className="d-flex justify-content-center mt-10">
          <button
            onClick={handleLoadMore}
            className="btn blog-preview-load-more-button hover-darken me-2 px-lg-8 border-none rounded-0 py-3"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  )
}

export default ArticlePreview
