import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Hero = ({
  image,
  title,
  aboveSubheading,
  belowSubheading,
  createdAt,
  author,
}) => (
  <div className="div mb-20">
    <div className="blog-hero position-relative ">
      {image ? (
        <GatsbyImage className="blog-hero-image" alt={title} image={image} />
      ) : (
        <div className="blog-hero-missing-image d-none d-lg-block  "></div>
      )}
      <div className="blog-hero-details d-none d-lg-block position-absolute top-50 start-50 translate-middle-x  col-10">
        <h2 className="blog-hero-above-heading mt-20">{aboveSubheading}</h2>
        <h1 className="blog-hero-title">{title}</h1>
        <h2 className="blog-hero-below-heading my-10">{belowSubheading}</h2>
        <div className="blog-hero-line mx-20 mt-10"></div>
        <div className="d-flex flex-row pb-10 pt-10 ms-20">
          <div className="col-6 row ">
            <div className="col-3 ">
              <GatsbyImage
                className="blog-hero-author-image "
                alt={title}
                image={author.profileImage.gatsbyImage}
              />
            </div>
            <div className="col-9">
              <p className="col blog-hero-author mt-3 mb-3">
                {author.nameOfAuthor}
              </p>
              <p className="col blog-hero-date">{createdAt}</p>
            </div>
          </div>
          <div className="col-6 buttons d-flex flex-row justify-content-end me-10 pe-10 align-items-center ">
            <Link
              to="/contact"
              className="btn rounded-0 me-3 blog-hero-main-button"
            >
              Contact
            </Link>
            <Link
              to="/blog"
              className="btn rounded-0  blog-hero-secondary-button me-5"
            >
              Return to Blog Posts
            </Link>
          </div>
        </div>
      </div>
      <div className="blog-hero-details d-block d-lg-none ">
        <h2 className="blog-hero-above-heading mt-20">{aboveSubheading}</h2>
        <h1 className="blog-hero-title">{title}</h1>
        <h2 className="blog-hero-below-heading my-10">{belowSubheading}</h2>
        <div className="blog-hero-line mx-20 mt-10"></div>
        <div className="d-flex flex-column flex-md-row pb-10 pt-10 ms-20">
          <div className="col col-md-6 row mb-10 m-md-auto">
            <div className="col-3 ">
              <GatsbyImage
                className="blog-hero-author-image "
                alt={title}
                image={author.profileImage.gatsbyImage}
              />
            </div>
            <div className="col-9">
              <p className="col blog-hero-author mt-3 mb-3">
                {author.nameOfAuthor}
              </p>
              <p className="col blog-hero-date">{createdAt}</p>
            </div>
          </div>
          <div className="col col-md-6 buttons d-flex flex-column justify-content-end me-10 pe-10  ">
            <Link
              to="/contact"
              className="btn rounded-0 me-3 blog-hero-main-button mb-2"
            >
              Contact
            </Link>
            <Link
              to="/blog"
              className="btn rounded-0 me-3 blog-hero-secondary-button "
            >
              Return to Blog Posts
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Hero
