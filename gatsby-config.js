module.exports = {
  siteMetadata: {
    title: `Charlye Castro`,
    description: `Charlye Castro is a Seattle based Software Engineer, experienced in web and mobile development. Currently Freelancing for local small business during Covid.`,
    url: "https://charlyecastro.com", 
    image: "/src/images/logo.png",
    keywords : `Charlye Castro, Software Engineer, Web Developer, Mobile Developer, Full Stack Developer, React, Freelancing, Seattle, Manson, Washington`,
    author: `Charlye Castro`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-153919009-1",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
