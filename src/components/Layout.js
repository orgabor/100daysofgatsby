import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { Container} from "@chakra-ui/react"
const Layout = ({ children }) => {
    return <>
        
            <Navbar />
            <Container maxW="xl" centerContent>
            {children}
            </Container>
        <Footer />
            

        
    </>
}

export default Layout
