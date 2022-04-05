module.exports = {
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `experience`,
        path: `${__dirname}/src/experience`,
      },
    },
    `gatsby-plugin-sass`,
  ],

  siteMetadata: {
    title: "Gurjivan Singh",
    description: "PROFESSIONAL REALTOR ©",
    url: "https://gurjsingh.ca",
    twitterUsername: "@getgurj",
  },
}
