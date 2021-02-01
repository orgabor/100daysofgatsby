import * as React from "react"
import Layout from "../../components/Layout"
import Locations from "../../components/Locations"
import {
    Heading
} from "@chakra-ui/react"

const LocationsPage = () => {
    return (
        <Layout>
            <Heading as="h2">Locations</Heading>
            <Locations />
        </Layout>

    )
}

export default LocationsPage
