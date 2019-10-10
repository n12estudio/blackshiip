import React from 'react';
import {Row,Col,Container} from 'reactstrap';
import {Jumbo,Footer} from '../elements'
import {CommunityA,WeAre} from '../sections';
import {ContactFormStCont,SuccessStoriesACont} from '../../containers'

import logo from '../../assets/img/logo/logo.svg'
import planetita from '../../assets/img/planetita.svg'
import to_black from '../../assets/img/to_black.svg'

import section_2 from '../../assets/img/sections_a/section_2_a.png'
import section_3 from '../../assets/img/sections_a/section_3_a.png'
import section_4 from '../../assets/img/sections_a/oportunity.png'
import '../../style/landing.css'

export const Landing=({setShow})=>{
  const btnColor = 'primary'
  const text=<p>
    <b>Blackshiip</b> es una comunidad que busca incrementar el impacto de la innovación abierta, mediante el desarrollo e integración de tecnología y el escalamiento de modelos de negocio disruptivos que integren impacto social, ambiental y económico.
    Nuestro modelo busca acercar a la industria con startups/emprendedores, investigadores y universidades, y a través del trabajo colaborativo logren superar fase de product/market fit y contribuyan al desarrollo sostenible del planeta.
  </p>
  const mainText=<div>
    Conectamos <b className="highlight">startups</b> con el mercado.
  </div>

  return (
    <section className="bg-light">
      <Jumbo logo={logo}
             btnColor={btnColor}
             top_hero={planetita}
             img_col={to_black}
             text={text}
             setShow={setShow}
             mainText={mainText} />
      <Container>
        <Row className="align-items-center">
          <Col xs={{order:2,size:12}} sm={{order:1,size:6}}>
            <img className="img-fluid" src={section_2} alt=""/>
          </Col>
          <Col xs={{order:1,size:12}} sm={{order:2,size:6}}>
            <h3 className="secondary_title">¡Acompáñanos!</h3>
            <p>
            <br/>
            Te invitamos a romper los modelos tradicionales de cómo lograr el “éxito”. Date permiso para pensar diferente. Co-creemos un nuevo modelo para apoyar el crecimiento exponencial de quienes quieren contribuir con el desarrollo sostenible.
            <br/><br/>

            Juntos por un propósito
            <br/><br/>
            <b>  Innovación en comunidad, colaborando para el desarrollo sostenible.</b>
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <ContactFormStCont/>
          </Col>
          <Col>
            <img className="img-fluid" src={section_3} alt=""/>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col xs={{order:2,size:12}} sm={{order:1,size:6}}>
            <img className="img-fluid" src={section_4} alt=""/>
          </Col>
          <Col xs={{order:1,size:12}} sm={{order:2,size:6}}>
            <h3 className="secondary_title">Menú de oportunidades</h3>
            <p>
              <br/>
              ¿Sabías que del 90% de los problemas que tiene una empresa, ya existe un emprendedor, startup o investigación con una solución viable, económica e innovadora?
              <br/><br/>
              Toda empresa requiere opciones para moverse; aquí te dejamos startups que pueden ayudar a tu empresa a crecer.
              <br/><br/>

            </p>
          </Col>
        </Row>
        <SuccessStoriesACont/>
        <CommunityA/>
        <WeAre/>
        <Row>
          <Col>
            <ContactFormStCont/>
          </Col>
        </Row>

      </Container>
      <Footer/>
    </section>
  )
}
