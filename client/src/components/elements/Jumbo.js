import React from 'react';
import {Container,Jumbotron,Row,Col,Button} from 'reactstrap'
import {Link} from 'react-router-dom';

export const Jumbo=({text,mainText,logo,img_col,top_hero,style,btnColor,multiverse,hero_bg_b})=>{
  return (
    <Jumbotron className="hero_landing p-0 abs_cont" fluid style={style} >
      {multiverse&&<img className="img_bg_b" src={hero_bg_b} alt=""/>}
      <Container fluid>
        <Row className="align-items-center justify-content-center">

          <Col xs={12} md={{size:11,order:multiverse?2:1}} className="pr-5">
              <Row className="d-flex justify-content-center px-5">
                  <Col xs={8} className="d-flex align-items-center" md={{order:multiverse?2:1,size:4}} >
                    <img className="img-fluid" src={logo} alt=""/>
                  </Col>
                  <Col md={{order:multiverse?1:2,size:8}}  className="">
                    <img className="planetita" src={top_hero} alt=""/>
                    <h3 className="main_title px-5 my-3">
                      {mainText}
                    </h3>
                      {text}
                    <Button className="my-5" color={btnColor}>
                      Explore
                    </Button>
                  </Col>
              </Row>
          </Col>

          <Col to={multiverse?'/':'/b'} tag={Link} md={{size:1,order:multiverse?1:2}} className={`d-none button_column ${multiverse?'red_bg':''} d-sm-flex align-items-center`}>
              <img className="img-fluid" src={img_col} alt=""/>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  )
}
