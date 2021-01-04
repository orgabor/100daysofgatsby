import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'

const Locations = () => {

    const { allContentfulLocation: { nodes: locations } } = useStaticQuery(query)

    return (
        <div>
        <h3>Hey check out our locations all around the World</h3>
        <ul>
            {locations.map(location=>{
                return(
                <li key={location.id}>
                    
                    <Link to={`/location/${location.slug}`}>{location.title}</Link>
                </li>
                )
            })}
        </ul>
        </div>
    )
}

export const query = graphql`
    query {
    allContentfulLocation {
      nodes {
        slug
        id
        title
      }
    }
  }
`

export default Locations