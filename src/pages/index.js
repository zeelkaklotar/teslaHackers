import * as React from "react"
import Seo from "../components/seo"
import Navbar from "../components/navbar"
import HeroSection from "../components/hero"
import Project_details from "../components/project_detail"
import ContactUs from "../components/contactUs"
import Story from "../components/story"
import Title from "../components/title"
import  Footer from "../components/footer"

const IndexPage = () => (
  <div>  <Navbar/>
  <div className=" h-screen w-screen bg-[#000120]  ">
  
    <HeroSection />
    <Project_details />
    <Title />
    <Story />
    <ContactUs />
    <Footer />
  </div>
  </div>

)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage

