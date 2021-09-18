import React from 'react'
import Layout from '../components/layout'
export default ({pageContext})=>{
    return(
        <Layout>
            <h1>{pageContext.title}</h1>
            {console.log('hello world')}
        </Layout>
    )
}