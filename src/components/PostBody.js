import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS } from "@contentful/rich-text-types"

const PostBody = ({ body }) => {
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: node => {
        const { gatsbyImage, description } = node.data.target
        return <GatsbyImage image={getImage(gatsbyImage)} alt={description} />
      },
    },
  }
  console.log(renderRichText(body.raw))
  return <h1>{body?.raw && renderRichText(body, options)}</h1>
}

export default PostBody
