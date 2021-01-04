import React from "react"
import { Link, graphql, useStaticQuery} from 'gatsby'

const Navbar = () => {
  
    const { allContentfulPage: { nodes: pages } } = useStaticQuery(query);
    return (
        <ul>
            {pages.map(page=>{
                return(
                <li key={page.id}>
                    
                    <Link to={page.slug === 'home' ? '/' : `/${page.slug}`  }>{page.title}</Link>
                </li>
                )
            })}
            <li>
                <Link to="/location">Locations</Link>
            </li>
            
        </ul>
    )

    
}

export const query = graphql`
    query {
    allContentfulPage {
      nodes {
        slug
        id
        title
      }
    }
  }
`
export default Navbar