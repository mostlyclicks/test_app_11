import React from 'react'
import { Card, Heading, Page, Link } from "@shopify/polaris";

const About = () => {
  return (
    <Page>
      <Heading><h1>About this app</h1></Heading>
      <Card><Link url="/">Back to main</Link></Card>
      
    </Page>
  )
}

export default About
