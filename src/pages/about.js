import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
const AboutPage = ({
    data: {
        contentfulPage: {
            title
        }
    }
}) => {
    return (
        <Layout>
            <h1>{title}</h1>
        </Layout>
        
    )
}

export default AboutPage


export const query = graphql`
    query{
        contentfulPage(title: { eq: "About" }) {
            title
            slug
            id
        }
    }
`