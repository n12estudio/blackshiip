import React,{Component,Fragment} from 'react';
import {Row,Col,Card,CardBody,CardDeck,CardTitle,CardText,Button} from 'reactstrap';
import confetti from '../../assets/img/decoration/confetti.svg';
import n12 from '../../assets/img/logo/alliances/logo_n12.svg';

export default class SuccessStoriesA extends Component {
  constructor(props){
    super(props)
    this.state={

    }
  }
  render(){
    return(
      <Fragment>
        <Row>
          <Col>
            <h3 className="secondary_title my-5">Casos de éxito</h3>
          </Col>
        </Row>
        <Row className="section_success">
          <div className="confetti_success">
            <img className="img-fluid" src={confetti} alt=""/>
          </div>
          <Col>
            <CardDeck>

              <Card className="card_success">
                <CardBody className="d-flex flex-column align-items-center">
                  <img src={n12} width="100" height="100" className="rounded-circle" alt=""/>
                  <CardTitle>
                    <b>
                      N12 Estudio
                    </b>
                  </CardTitle>
                  <CardText>
                    Nuestros procesos tecnológicos son muy buenos, sin embargo en temas de procesos organizacionales Blackshiip nos dio mucha claridad
                  </CardText>
                  <Button className="mt-auto" color="primary">
                    Algo
                  </Button>
                </CardBody>
              </Card>
              <Card className="card_success">
                <CardBody className="d-flex flex-column align-items-center">
                  <img src={n12} width="100" height="100" className="rounded-circle" alt=""/>
                  <CardTitle>
                    <b>
                      N12 Estudio
                    </b>
                  </CardTitle>
                  <CardText>
                    Nuestros procesos tecnológicos son muy buenos, sin embargo en temas de procesos organizacionales Blackshiip nos dio mucha claridad
                  </CardText>
                  <Button className="mt-auto" color="primary">
                    Algo
                  </Button>
                </CardBody>
              </Card>
              <Card className="card_success">
                <CardBody className="d-flex flex-column align-items-center">
                  <img src={n12} width="100" height="100" className="rounded-circle" alt=""/>
                  <CardTitle>
                    <b>
                      N12 Estudio
                    </b>
                  </CardTitle>
                  <CardText>
                    Nuestros procesos tecnológicos son muy buenos, sin embargo en temas de procesos organizacionales Blackshiip nos dio mucha claridad
                  </CardText>
                  <Button className="mt-auto" color="primary">
                    Algo
                  </Button>
                </CardBody>
              </Card>
            </CardDeck>
          </Col>
        </Row>
      </Fragment>

    )
  }
}
