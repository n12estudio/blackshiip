import React from 'react';
import {Container,Row,Col} from 'reactstrap';
import {Jumbo,Footer} from '../elements';
import {CommunityB,WeAre} from '../sections';
import {ContactFormLTDCont} from '../../containers';
import logoB from '../../assets/img/logo/logoB.svg';
import astronauta from '../../assets/img/astronauta.png';
import to_light from '../../assets/img/to_light.svg';
import hero_bg_b from '../../assets/img/hero_bg_b.svg';
import '../../style/landing.css';

import section_2 from '../../assets/img/sections_b/section_2.svg'
import section_3 from '../../assets/img/sections_b/section_3.svg'
import section_4 from '../../assets/img/sections_b/section_4.svg'
// import section_5 from '../../assets/img/sections_b/section_5.svg'

// import decoration_1 from '../../assets/img/decoration/stroke_1.png'
import decoration_2 from '../../assets/img/decoration/stroke_2.png'
// import decoration_3 from '../../assets/img/decoration/stroke_3.png'
import decoration_4 from '../../assets/img/decoration/stroke_4.png'
import decoration_5 from '../../assets/img/decoration/stroke_5.png'
import decoration_6 from '../../assets/img/decoration/stroke_6.png'

export const LandingB =({history})=>{
  const style={
    backgroundColor:'#000',
    color:'#fff'
  }
  const btnColor = 'secondary'
  const text=<p>
    <b>Blackshiip</b> es una comunidad que busca incrementar <b>la fuerza</b> de la innovación abierta, mediante el desarrollo e integración de tecnología y el escalamiento de modelos de negocio disruptivos que integren un impacto social, ambiental y económico.
    <br/><br/>
Nuestro modelo busca acercar a las startups, emprendedores, investigadores y universidades con el mercado y las industrias, a través de un trabajo colaborativo en dónde logren superar la fase de product/market fit y contribuyan así, al desarrollo sostenible del planeta.

  </p>
  const mainText=<div>
    Conectamos <b className="highlight">tu idea </b> con startups.
  </div>
  return(
    <section className="landing_b_body text-light">
      <Jumbo logo={logoB}
             btnColor={btnColor}
             text={text}
             img_col={to_light}
             mainText={mainText}
             top_hero={astronauta}
             multiverse={true}
             hero_bg_b={hero_bg_b}
             style={style} />
       <Container>
         <Row className="b_section align-items-center justify-content-center py-5 my-5">
           <div className="decoration decor_1">
             <img className="img-fluid" src={decoration_6} alt=""/>
           </div>
           <div id="#mision"/>
           <Col xs={8}>
             <img width="80" src={section_2} alt=""/>
             <h3 className="secondary_title my-3">¡Te acompañamos!</h3>
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
         <Row className="b_section align-items-center justify-content-center py-5 my-5">
           <div className="decoration decor_2">
             <img className="img-fluid" src={decoration_2} alt=""/>
           </div>
           <div id="#challenges"/>
           <Col xs={8}>
             <img width="80" src={section_3} alt=""/>
             <h3 className="secondary_title mt-3">¿Estás listo para crecer?</h3>
             <ContactFormLTDCont/>
           </Col>
         </Row>
         <Row className="align-items-center justify-content-center py-5 my-5">
           <div id="#oportunidad"/>
           <div className="decoration decor_3">
             <img className="img-fluid" src={decoration_5} alt=""/>
           </div>
           <Col xs={8}>
             <img width="80" src={section_4} alt=""/>
             <h3 className="secondary_title mt-3">Menú de oportunidades</h3>
             <p>
               <br/>
               ¿Sabías que del 90% de los problemas que tiene una empresa, ya existe un emprendedor, startup o investigación con una solución viable, económica e innovadora?
               <br/><br/>
               Toda empresa requiere opciones para moverse; aquí te dejamos startups que pueden ayudar a tu empresa a crecer.
               <br/><br/>

             </p>
           </Col>
         </Row>
         {/* <SuccessStoriesACont/> */}
         <div id="#comunidad"/>
        <CommunityB/>
         <WeAre dark={true}/>
         <Row className="b_section align-items-center justify-content-center py-5 my-5">
           <div className="decoration decor_4">
             <img className="img-fluid" src={decoration_4} alt=""/>
           </div>
           <div id="#challenges"/>
           <Col>
             <ContactFormLTDCont history={history}/>
           </Col>
         </Row>

       </Container>
       <Footer/>
    </section>
  )
}
