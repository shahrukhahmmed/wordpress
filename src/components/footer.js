import React from 'react'
import {graphql, StaticQuery, Link} from 'gatsby'
import {Container, Row, Col }from 'react-bootstrap'

const  FooterArea =()=>{
    return (
       <StaticQuery query= {graphql` 
        { 
          allWordpressMenusMenusItems(filter: {name: {eq: "header menu"}}) {
          edges {
            node {
              items {
                target
                title
                url
                db_id
                slug
              }
            }
          }
        }
      }`} render={props=>(

        <div className ="footer_area">
          <Container>
            <Row>
              <Col md={6}><div className="copyright"><p>© 2021 Company name, Inc.</p></div></Col>
              <Col md={6} style={{textAlign:"right"}}>
              <ul className="nav_menu">
                {
                props.allWordpressMenusMenusItems.edges[0].node.items.map(item=>(
                  
                      <li key={item.db_id}>
                          <Link to={`/${item.slug}`} key={item.db_id}>{item.title}</Link>
                      </li>
                  
                ))
                }
              </ul>
              </Col>
            </Row>  
          </Container>
        </div>
      )}/>  

    )
}

export default FooterArea;
