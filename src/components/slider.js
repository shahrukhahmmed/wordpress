import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container,Row,Col} from 'react-bootstrap';
import {graphql, StaticQuery, Link} from 'gatsby';

const TestSlider = ()=>{    
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nav:true,
        autoPlay:true,
    }


    return (
    <StaticQuery query={graphql`
        {
            allWordpressPage {
              edges {
                node {
                  acf {
                    testimonial {
                      testimonial_item {
                        author_name
                        review_content
                        star_review
                        author_image {
                          source_url
                          id
                        }
                      }
                    }
                  }
                }
              }
            }
          }
    `}render={props=>(
        <div className="testimonial_section">
            <Container>
                <Row>
                    <Col md ={12}>
                        <Slider {...settings}>
                            {props.allWordpressPage.edges[0].node.acf.testimonial.testimonial_item.map(single_item=>{ 
                              let val = single_item.star_review;
                              let star_val;
                              switch(val){
                                case "1":
                                  star_val = (<div className="star_review">
                                    <i class="fas fa-star"></i>
                                    <i class="far fa-star"></i>
                                    <i class="far fa-star"></i>
                                    <i class="far fa-star"></i>
                                    <i class="far fa-star"></i>
                                  </div>);
                                  break;
                                case "2":
                                  star_val = (<div className="star_review">
                                  <i class="fas fa-star"></i>
                                  <i class="fas fa-star"></i>
                                  <i class="far fa-star"></i>
                                  <i class="far fa-star"></i>
                                  <i class="far fa-star"></i>
                                </div>);
                                  break;
                                case "3":
                                  star_val = (<div className="star_review">
                                  <i class="fas fa-star"></i>
                                  <i class="fas fa-star"></i>
                                  <i class="fas fa-star"></i>
                                  <i class="far fa-star"></i>
                                  <i class="far fa-star"></i>
                                </div>);
                                  break;
                                case "4":
                                  star_val = (<div className="star_review">
                                  <i class="fas fa-star"></i>
                                  <i class="fas fa-star"></i>
                                  <i class="fas fa-star"></i>
                                  <i class="fas fa-star"></i>
                                  <i class="far fa-star"></i>
                                </div>);
                                  break;
                                case "4.5":
                                  star_val = (<div className="star_review">
                                  <i class="fas fa-star"></i>
                                  <i class="fas fa-star"></i>
                                  <i class="fas fa-star"></i>
                                  <i class="fas fa-star"></i>
                                  <i class="fas fa-star-half-alt"></i>
                                </div>);
                                  break;
                                  case "5":
                                    star_val = (<div className="star_review">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                  </div>);
                                    break;
                                  default:
                                  star_val = " ";   
                              }                        
                                return(
                                <div className="sing-slider-item" key={single_item.author_image.id}>
                                  <div className="author">
                                    <h4>{single_item.author_name}</h4>
                                  </div>
                                    {star_val}
                                    <p>{single_item.review_content}</p>
                                      
                                </div>
                            )})}

                        </Slider>
                    </Col>
                </Row>
            </Container>
        </div>
    )}/>


      );
}

export default TestSlider;