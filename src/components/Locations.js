import React from "react"
import { Link as GatsbyLink, graphql, useStaticQuery } from 'gatsby'
import {
  Container,
  Box,
  Link,
  Text,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react"
import { SunIcon } from '@chakra-ui/icons'


const Locations = () => {

    const { allContentfulLocation: { nodes: locations } } = useStaticQuery(query)

    return (
        <Container>
        <Text as="kbd" marginTopBottom="4">Hey check out our locations all around the World</Text>
        <Box padding="4" bg="gray.100" maxW="xl" marginTop="4">
        <List spacing={3}>
            {locations.map(location=>{
                return(
                  <ListItem key={location.id}>
                    <ListIcon as={SunIcon} color="green.500" />
                    <Link as={GatsbyLink} to={`/location/${location.slug}`}>{location.title}</Link>
                  </ListItem>
                )
            })}
        </List>
      </Box>
      </Container>
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