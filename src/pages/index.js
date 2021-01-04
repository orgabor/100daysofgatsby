import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

const IndexPage = ({
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

export default IndexPage


export const query = graphql`
    query{
      contentfulPage(title: { eq: "Home" }) {
      title
      slug
      id
    }
    }
    

`