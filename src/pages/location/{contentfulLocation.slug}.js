import * as React from "react"
import { graphql } from "gatsby"

const LocationPage = ({
    data: {
        contentfulLocation: {
            title
        } 
    }
}) =>{
    return (
        <h1>{title}</h1>
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