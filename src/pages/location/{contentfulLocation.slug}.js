import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../../components/Layout"

const LocationPage = ({
    data: {
        contentfulLocation: {
            title
        } 
    }
}) =>{
    return (
        <Layout>
            <h1>{title}</h1>
            <Link to="/location">See all Audioc0re location</Link>
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
  }
`