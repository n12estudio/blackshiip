import React,{Fragment} from 'react';
import {Row,Col} from 'reactstrap';
import n12 from '../../assets/img/logo/alliances/white/n12.svg';
import lsdom from '../../assets/img/logo/alliances/white/lsdom.svg';
import toro from '../../assets/img/logo/alliances/white/toro.svg';
import redecim from '../../assets/img/logo/alliances/white/redecim.svg';
import workosfera from '../../assets/img/logo/alliances/white/workosfera.svg';
import neineo from '../../assets/img/logo/alliances/white/neineo.svg';

import section_6 from '../../assets/img/sections_b/section_6.svg'


const community = [
  {
    src:n12,
    info:'Empresa de soluciones de Diseño, Marketing y Tecnología'
  },
  {
    src:lsdom,
    info:'Agencia dedicada al desarrollo de marcas y diseño.'
  },
  {
    src:toro,
    info:'Servicios jurídicos especializado en el nuevo mercado.'
  },
  {
    src:redecim,
    info:'Organización especializada en el acceso a la cooperación internacional.'
  },
  {
    src:workosfera,
    info:'Coworking y atmosfera para startups.'
  },
  {
    src:neineo,
    info:'Marketing digital para startups y emprendedores'
  }
]

export const CommunityB=()=>{
  return(
    <Fragment>
      <Row>
        <Col>
          <img width="80" src={section_6} alt=""/>
          <h3 className="secondary_title my-4">Comunidad</h3>
        </Col>
      </Row>
      <Row className="d-flex d-md-none align-items-center">
        {community.map(({src,info},i)=><Col xs={12} className="mx-1" key={i}>
          <img className="img-fluid mb-2" height="100" width="150" src={src} alt=""/>
          <p>{info}</p>
        </Col>)}
      </Row>
      <Row className="d-none d-md-flex align-items-center">
        {community.map(({src,info},i)=><Col className="mx-3" key={i}>
          <img className="img-fluid" height="100" src={src} alt=""/>
        </Col>)}
      </Row>
      <Row className="d-none d-md-flex align-items-center">
        {community.map(({src,info},i)=><Col className="mx-1" key={i}>
          <p>{info}</p>
        </Col>)}
      </Row>
    </Fragment>
  )
}
