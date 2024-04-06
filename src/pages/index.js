import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Navbar from "../components/navbar"
import * as styles from "../components/index.module.css"
import HeroSection from "../components/hero"
import ContactUs from "../components/contactUs"


const IndexPage = () => (
  <div className=" h-screen w-screen bg-[#000120]">
    <Navbar />
    <HeroSection />
    <ContactUs />
  </div>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
