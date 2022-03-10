module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-react-helmet`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
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
