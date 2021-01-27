import React from "react"
import { Link as GatsbyLink, graphql, useStaticQuery} from 'gatsby'
import {
    Link,
    Box,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuIcon,
    MenuCommand,
    MenuDivider,
    Button,
} from "@chakra-ui/react"

const Navbar = () => {
  
    const { allContentfulPage: { nodes: pages }, allContentfulLocation: { nodes: locations } } = useStaticQuery(query);

    return (
        <Box margin="4">
        <Menu closeOnSelect={false}>
            <MenuButton 
                    px={4}
                    py={2}
                    transition="all 0.2s"
                    borderRadius="md"
                    borderWidth="1px"
                    backgroundColor="green.100"
                    _hover={{ bg: "gray.100" }}
                    _expanded={{ bg: "red.200" }}
                    _focus={{ outline: 0, boxShadow: "outline" }}
            >
                Menü
            </MenuButton>
            <MenuList>
                <MenuGroup>
                    {pages.map(page => {
                        return (
                            <MenuItem key={page.id}>

                                <Link as={GatsbyLink} to={page.slug === 'home' ? '/' : `/${page.slug}` || '/'}>{page.title}</Link>
                            </MenuItem>
                        )
                    })}
                </MenuGroup>
                <MenuDivider />
                <MenuGroup title="Locations">
                        {locations.map(location => {
                            return (
                                <MenuItem key={location.id}>

                                    <Link as={GatsbyLink} to={`/location/${location.slug}`}>{location.title}</Link>
                                </MenuItem>
                            )
                        })}
                        <MenuItem>
                            <Link as={GatsbyLink} to="/location">All Locations</Link>
                        </MenuItem>
                </MenuGroup>
                
            </MenuList>
           
            
        </Menu>
        </Box>
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
    allContentfulLocation {
      nodes {
        slug
        id
        title
      }
    }
  }
`
export default Navbar