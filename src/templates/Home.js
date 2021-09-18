import React from 'react'
import Layout from '../components/layout'
import HeroArea from '../components/heroarea'
import Blogpost from '../components/blogpost'
import TestSlider from '../components/slider'
export default ({pageContext})=>{
    return(
        <Layout>
            <HeroArea/>
            <Blogpost/>
            <TestSlider/>

        </Layout>
    )
}