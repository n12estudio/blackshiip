import React from 'react';
import {Jumbo} from '../elements';
import logoB from '../../assets/img/logo/logoB.svg';
import astronauta from '../../assets/img/astronauta.png';
import to_light from '../../assets/img/to_light.svg';
import hero_bg_b from '../../assets/img/hero_bg_b.svg';
import '../../style/landing.css';


export const LandingB =()=>{
  const style={
    backgroundColor:'#000',
    color:'#fff'
  }
  const btnColor = 'secondary'
  const text=<p className="px-5 mx-5">
    <b>Blackshiip</b> es una comunidad que busca incrementar el impacto de la innovación abierta, mediante el desarrollo e integración de tecnología y el escalamiento de modelos de negocio disruptivos que integren impacto social, ambiental y económico.
Nuestro modelo busca acercar a la industria con startups/emprendedores, investigadores y universidades, y a través del trabajo colaborativo logren superar fase de product/market fit y contribuyan al desarrollo sostenible del planeta.
  </p>
  const mainText=<div>
    Conectamos <b className="highlight">el mercado</b> con startups.
  </div>
  return(
    <section>
      <Jumbo logo={logoB}
             btnColor={btnColor}
             text={text}
             img_col={to_light}
             mainText={mainText}
             top_hero={astronauta}
             multiverse={true}
             hero_bg_b={hero_bg_b}
             style={style} />
    </section>
  )
}
