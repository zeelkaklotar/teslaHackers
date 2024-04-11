import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Navbar from "../components/navbar"
import * as styles from "../components/index.module.css"
import HeroSection from "../components/hero"
import Project_details from "../components/project_detail"
import ContactUs from "../components/contactUs"
import Story from "../components/story"
import Title from "../components/title"

const IndexPage = () => (
  <div>  <Navbar/>
  <div className=" h-screen w-screen bg-[#000120]  ">
  
    <HeroSection />
    <Project_details />
    <Title />
    <Story />
    <ContactUs />
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
