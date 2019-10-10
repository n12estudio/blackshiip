import React,{Fragment,useState,useEffect} from 'react';
import {Row,Col,Nav, NavItem, NavLink } from 'reactstrap';
import diagram from '../../assets/img/weare/diagram.png'

const sections = [
  {
    title:"Nosotros",
    text:()=><Fragment>
        {`Blackshiip nace desde la necesidad de crear un modelo de negocio que permita definir un marco de colaboración sobre el cual todos los actores trabajen en una relación ganar/ganar.`}
      <br/><br/>
      <img className="img-fluid" src={diagram} alt=""/><br/>
      <br/>
        {`A través de la innovación abierta, conectamos el servicio que ofrece un agente, con la necesidad de otro agente a través de la creación de valor o captura de valor.`}

    </Fragment>
  },
  {
    title:"Servicios",
    text:()=><Fragment>
      <p className="text-center">
        <b className="color_secondary">
          Softlanding
        </b> <br/>
        Diagnóstico <br/>
        Creación de modelo personalizado <br/>
        Desarrollo de estrategia <br/>
        Operación <br/>
        <br/><br/>
        Salud <br/>
        <b className="color_secondary">
          Blackshiip
        </b> <br/>
         Salud® <br/>
        BeeMH <br/>
        Telemedicina <br/>
        <br/>
        Educación <br/>
        <b className="color_secondary">
          Blackshiip
        </b> Educación®
        LMS <br/>
        ERP
        <br/><br/>
        Medio ambiente
        <br/><br/>
        <b className="color_secondary">
          Innovación
        </b>

      </p>
    </Fragment>
  },
]

export const WeAre =()=> {
    const [selTitle,setTitle] = useState('Nosotros')
    const [selText,setText] = useState('')
    const setSection=(title,text)=>{
        setTitle(title)
        setText(text)
    }
    useEffect(() => {
    // Update the document title using the browser API
      setTitle(sections[0].title)
      setText(sections[0].text)
    }, []);
    return (
        <Fragment>
          <Row className="my-5">
            <Col>
              <h3 className="secondary_title">
                Conoce a Blackshiip
              </h3>
            </Col>
          </Row>
          <Row className="justify-content-center mt-5">
            <Col xs={10}>
                <Nav justified>
                  {sections.map(({title,text},i)=>
                    <NavItem onClick={()=>setSection(title,text)} key={i}>
                      <NavLink className="text-dark" href="#" active={selTitle===title}>{title}</NavLink>
                    </NavItem>)}
                </Nav>
              </Col>
            </Row>
            <Row className="justify-content-center mt-5">
              <Col xs={10}>
                <p className="multiline text-center w-100">
                  {selText}
                </p>
              </Col>
            </Row>
        </Fragment>
    );
}
