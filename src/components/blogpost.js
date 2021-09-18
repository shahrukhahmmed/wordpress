import React from 'react'
import { StaticQuery, graphql, Link} from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'


const Blogpost =()=>{
    return(
        <StaticQuery query ={graphql`
            {
                allWordpressPost {
                    edges {
                        node {
                            excerpt
                            title
                            slug
                            id
                            featured_media {
                                source_url
                            }
                        }
                    }
                }
            }`}render={props=>(
                <section className="blog_post">
                    <Container>
                        <Row>
                            <Col md={12}>
                                <h1>Growth</h1>
                            </Col>
                        </Row>
                        <Row>

                            {props.allWordpressPost.edges.map(post_item=>(
    
                            <Col md={4} key={post_item.node.id}>
                                <div className="sing_post_item">
                                    <img src={post_item.node.featured_media.source_url} alt="thumbnail"/>
                                    <h3>{post_item.node.title}</h3>
                                    <div dangerouslySetInnerHTML={{__html: post_item.node.excerpt.slice(0, 100)+"...."}} className="post_content"></div>   
                                    <Link to={`/post/${post_item.node.slug}`} className="blog_btn">Read Article</Link>
                                </div>
                            </Col>
                                   
                                    
                                )
                            )} 

                        </Row>
                    </Container>
                </section>
            )

        }/>
    )
}

export default Blogpost;