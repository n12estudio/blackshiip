import React from 'react';
import {NavLink} from 'react-router-dom';
import {Container,Row,Col,NavItem,Nav} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import logo from '../../assets/img/logo/logoB.svg';
import saturn from '../../assets/img/footer/saturn_bg.svg';
import astronaut from '../../assets/img/footer/astronaut_bg.svg';
import '../../style/footer.css';

export const Footer=(props)=>{
  return (
    <Container fluid className="footer p-3 text-left text-light animated fadeInPlace">
      <div className="saturn">
        <img className="img-fluid" src={saturn} alt=""/>
      </div>
      <div className="astronaut">
        <img className="img-fluid" src={astronaut} alt=""/>
      </div>
      <Container>
        <Row className="justify-content-between">
          <Col xs={12} sm={3}>
            <h3 className="footer_title">Blackshiip</h3>
            <h4 className="footer_sub">Innovación en comunidad</h4>
          </Col>
          <Col xs={12} sm={3}>
            <h5>
              Navegación
            </h5>
            <Nav vertical>
              <NavItem>
                <NavLink className="nav-link text-light" to="#mision">
                  Misión
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link text-light" to="#challenges">
                  #Challenges
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link text-light" to="#oportunidades">
                  Oportunidades
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link text-light" to="#exitos">
                  Casos de Éxito
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link text-light" to="#alianzas">
                  Alianzas
                </NavLink>
              </NavItem>

            </Nav>

          </Col>
          <Col xs={12} sm={'auto'}>
            <h5>
              Contacto
            </h5>
          <Nav vertical>

          <NavItem>
            <a className="nav-link text-light" href="mailto:hola@blackshiip.community">
              hola@blackshiip.community</a>

          </NavItem>
          <NavItem>
            <address>
              <a className="nav-link text-light" target="_blank" rel="noopener noreferrer" href="https://goo.gl/maps/nJuME6hUYmNxzUcv6">
                Av. 5 orientes #612 <br/>
                col. Centro, Puebla MX
              </a>
            </address>


          </NavItem>
          <NavItem>
            <div className="icon_container d-flex">
              <div className="footer_icon mr-3">
                <a className="" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/blackshiipcommunity/?hl=es-la">
                  <FontAwesomeIcon className="text-light" size="lg" icon={['fab','instagram']}/>
                </a>
              </div>
              <div className="footer_icon mr-3">
                <a className="" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/Blackshiip/">
                    <FontAwesomeIcon className="text-light" size="lg" icon={['fab','facebook']}/>
                </a>
              </div>
              <div className="footer_icon mr-3">
                <a className="" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/48187499">
                    <FontAwesomeIcon className="text-light" size="lg" icon={['fab','linkedin']}/>
                </a>
              </div>
            </div>
          </NavItem>
        </Nav>
          </Col>
          {/* <Col xs={12} sm={'auto'}>
            <h5>
              Recursos
            </h5>
            <Nav vertical>

          <NavItem>
            <NavLink to="/">Términos del servicio</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/">Aviso de privacidad</NavLink>
          </NavItem>
        </Nav>
          </Col> */}
          <Col xs={12} sm={2} className="d-flex align-items-center">
            <img src={logo} className="w-100 img-fluid logo-footer" alt=""/>
          </Col>

        </Row>
        <Row className="text-center mt-3">
          <Col>
              <a style={{color:'white'}}
                className="d-print-none"
                href="https://n12.mx">
                Programado con&nbsp;
                <span role="img" aria-label="green heart icon">💙</span>
                por N12 Estudio</a>
          </Col>
        </Row>
        <Row className="text-center mt-3">
          <Col>
              Blackshiip || {new Date().getFullYear()}
          </Col>
        </Row>




      </Container>
    </Container>
  )
}
