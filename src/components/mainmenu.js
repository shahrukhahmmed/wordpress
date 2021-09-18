import React from 'react'
import {graphql, StaticQuery, Link} from 'gatsby'
import {Container, Row, Col} from 'react-bootstrap'


const  Mainmenu =()=>{
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

        <div className ="menu_area">
          <Container>
            <Row>
              <Col md={4}></Col>
              <Col md={8} style={{textAlign:"right"}}>
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

export default Mainmenu
