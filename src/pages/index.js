import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Hero from "../components/Hero"
import { getImage } from "gatsby-plugin-image"
import { Heading } from "@chakra-ui/react"
const IndexPage = ({
  data: {
    contentfulPage: {
      title
    },
    file
  }
}) => {
  const image = getImage(file)
  
  return (
  
  <Layout>
      <SEO />
      <Hero title="Audioc0re Headphone" image={image} />
      <Heading>{title}</Heading>
      <span>Photo by <a href="https://unsplash.com/@leecampbell?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Lee  Campbell</a> on <a href="https://unsplash.com/s/photos/headphone?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
  </Layout>
  
  )
}

export default IndexPage


export const query = graphql`
    query{
      contentfulPage(title: { eq: "Home" }) {
      title
      slug
      id
    }
    file(name: {eq: "headphone"}) {
    childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED,
            formats: [AUTO, WEBP, AVIF],
            width: 800
          )
        }
  }
  }
`