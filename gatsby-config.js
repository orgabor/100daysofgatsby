require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "100 days of Gatsby",
    siteUrl: `https://www.example.com`,
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.ACCESS_TOKEN,
        spaceId: process.env.SPACE_ID,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    "@chakra-ui/gatsby-plugin",
    {
      resolve: `gatsby-source-formium`,
      options: {
        // Get your projectId from https://dashboard.formium.io
        projectId: process.env.GATSBY_FORMIUM_PROJECTID,
        // Generate a personal access token by going to https://dashboard.formium.io/account#tokens
        accessToken: process.env.FORMIUM_TOKEN,
      },
    },
  ],
};
