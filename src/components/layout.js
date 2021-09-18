/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Helmet } from "react-helmet";
import "./layout.css"
import './style.css'
import Mainmenu from './mainmenu'
import FooterArea from "./footer"





const Layout = ({ children }) => {
  return(
    <div>
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&family=Raleway:wght@500;600;700&display=swap" rel="stylesheet"/>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet"></link>
        </Helmet>
      <Mainmenu/>
      {children}
      <FooterArea/>

    </div>
  )
}

export default Layout
