import React from "react";
import Layout from '../components/layout';
import { Container, Row} from "react-bootstrap";
export default ({pageContext})=>{
    return(
        <Layout>
            <Container>
                <Row>
                    <img src={pageContext.featured_media.source_url } alt="Thumbnail"/>
                    <h3>{pageContext.title}</h3>
                    <div dangerouslySetInnerHTML={{__html: pageContext.content}}></div>                    
                </Row>
            </Container>
        </Layout>
    )
}