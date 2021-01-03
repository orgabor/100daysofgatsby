import * as React from "react"
import { graphql } from "gatsby"

const IndexPage = ({
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