import React from "react"
import { GatsbyImage} from "gatsby-plugin-image"

const Hero = (props)=>{
    const {title, image} = props
    
    return (
        
        <GatsbyImage  image={image} alt={title} />
        
    )
    
}

export default Hero