import React from 'react';
// import {Jumbotron,Button,Row,Col,Container} from 'reactstrap';
import {Jumbo} from '../elements'
import logo from '../../assets/img/logo/logo.svg'
import planetita from '../../assets/img/planetita.png'
import to_black from '../../assets/img/to_black.svg'
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
    <section>
      <Jumbo logo={logo}
             btnColor={btnColor}
             top_hero={planetita}
             img_col={to_black}
             text={text}
             setShow={setShow}
             mainText={mainText} />
    </section>
  )
}
