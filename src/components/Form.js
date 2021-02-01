import React from 'react'
import {  graphql, useStaticQuery } from 'gatsby'
import { FormiumForm, defaultComponents } from '@formium/react';
import { formium } from '../lib/formium';
import { Heading , Stack, Input, TextArea as ChackraTextArea,
    FormControl as ChackraFromControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Button } from "@chakra-ui/react"


function FormControl(props) {
    console.log(props)
    return (
        <Stack marginTop="4">
        <ChackraFromControl id={props.id}>
            <FormLabel>{props.label}</FormLabel>
            <FormHelperText>{props.description}</FormHelperText>
            {props.children}
            
        </ChackraFromControl>
        </Stack>
    )
}

function TextInput(props){
    //console.log(props)
    return (
        <FormControl>
                <Input {...props} variant="flushed" placeholder={props.placeholder} required={props.required}/>
                <FormErrorMessage></FormErrorMessage>
        </FormControl>
        
        
    )   
    
}

function TextArea(props){
    return (
        <FormControl>
            <ChackraTextArea {...props} />
        </FormControl>


    )
}

function Header(props){
    const { page: {title} } = props
    
    return (
        <Heading as="h4" marginTop="4" marginBottom="4">{title}</Heading>
    )
}

function SubmitButton(props){
    return(
        <Button colorScheme="teal" size="md" {...props} />
    )
   
}

// Always define these outside of React so that
// components are not needlessly recreated on each render
const myComponents = {
    ...defaultComponents,
    TextInput,
    Header,
    FormControl,
    TextArea,
    SubmitButton,

}

const AudioCoreForm = ()=> {
    const { formiumForm } = useStaticQuery(query)
    const [success, setSuccess] = React.useState(false)

    if (success) {
        return <div>You are awsome! We will contact you shortly!</div>;
    }

    return (
        <FormiumForm 
            data={formiumForm}
            components={myComponents}
            onSubmit={async (values) => {
                // Send form values to Formium
                await formium.submitForm('audioc0re', values);
                setSuccess(true);
            
            }}
        />
    )
    
}

export const query = graphql`
  {
    formiumForm(slug: { eq: "audioc0re" }) {
      id
      createAt
      name
      projectId
      schema
      slug
      updateAt
      version
    }
  }
`

export default AudioCoreForm
