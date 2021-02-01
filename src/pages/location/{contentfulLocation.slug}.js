import * as React from "react"
import { graphql, Link as GatsbyLink } from "gatsby"
import Layout from "../../components/Layout"
import { getImage } from "gatsby-plugin-image"
import Hero from "../../components/Hero"
import {
    Heading,
    Link
} from "@chakra-ui/react"
const LocationPage = ({
    data: {
        contentfulLocation: {
            title
        },
        file
    }
}) =>{
    const image = getImage(file)
    return (
        <Layout>
            <Hero title="Audioc0re Skyline" image={image} />
            <Heading as="h2" >{title}</Heading>
            <Link as={GatsbyLink} to="/location">See all Audioc0re location</Link>
        </Layout>
       
    )
} 

export default LocationPage

export const query = graphql`
     query($id: String) {
    contentfulLocation(id: { eq: $id }) {
      title
      slug
      id
    }
    file(name: {eq: "skyline"}) {
    childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED,
            formats: [AUTO, WEBP, AVIF],
            aspectRatio: 1.5
            width: 800
          )
        }
  }
  }
`