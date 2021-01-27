import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { Container} from "@chakra-ui/react"
const Layout = ({ children }) => {
    return <>
        
            <Navbar />
            <Container maxW="100%"  margin="4" centerContent>
            {children}
            <Footer />
            </Container>
            

        
    </>
}

export default Layout
