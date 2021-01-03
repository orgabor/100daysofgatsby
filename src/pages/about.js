import * as React from "react"
import { graphql } from "gatsby"

const LocationPage = ({
    data: {
        contentfulPage: {
            title
        }
    }
}) => {
    return (
        <h1>{title}</h1>
    )
}

export default LocationPage


export const query = graphql`
    query{
        contentfulPage(title: { eq: "About" }) {
            title
            slug
            id
        }
    }
`