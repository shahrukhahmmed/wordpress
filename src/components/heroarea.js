import React from 'react'
import {graphql, StaticQuery, Link} from 'gatsby'
import {Container, Row, Col }from 'react-bootstrap'

const HeroArea = ()=>{
    return(
    <StaticQuery query = {graphql`
    {
        allWordpressPage {
            edges {
                node {
                    acf {
                        hero_area {
                            hero_description
                            title
                            hero_background {
                                source_url
                              }
                            button {
                                button
                                button_url
                            }
                        }
                    }
                }
            }
        }}`}render={props=>(
        <div className='hero_area' style={{backgroundImage:`url(${props.allWordpressPage.edges[0]
            .node.acf.hero_area.hero_background.source_url})`}}
            >
            <Container>
                <Row>
                    <Col md={7}>
                        <div className="hero_description">
                            <h1>{props.allWordpressPage.edges[0].node.acf.hero_area.title}</h1>
                        <p>{props.allWordpressPage.edges[0].node.acf.hero_area.hero_description}</p>
                                {props.allWordpressPage.edges[0].node.acf.hero_area.button.map(button_item=>
                                    (<Link to="/about" key={button_item.button} className="global_btn">{button_item.button}</Link>))
                                }
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )}/>

    )
}

export default HeroArea
