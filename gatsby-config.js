module.exports = {
  siteMetadata: {
    title: "100 days of Gatsby",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "On5ewBxYEpei5UWphNamV7iyBr9S-TLerJb-hKbIR7A",
        spaceId: "0k0fheadf8l7",
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
  ],
};
