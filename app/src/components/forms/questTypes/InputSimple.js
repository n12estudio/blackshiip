import React,{Component} from 'react';
import {FormGroup,Label,Col,Input,FormFeedback,FormText} from 'reactstrap';

export default class InputSimple extends Component {
  constructor(props){
    super(props)
    this.state={

    }
  }
  render(){
    const {
      charact:{
        required,
        sizeSM,
        forL,
        id,
        label,
        valid,
        invalid,
        icon,
        type,
        rango,
        pattern,
        name,
        regExp,
        longQ
      },
      value,
    } = this.props
    let testR = ''
    if(regExp){
      testR = new RegExp(regExp)
    }
    return(
        <FormGroup row>
          <Label sm={sizeSM[0]} size="lg" for={forL} id={id} >
            <i className={`fas fa-${icon}`}/>&nbsp;
            {label}
          </Label>
            <Col xs={12} sm={sizeSM[1]}>

                <Input onChange={this.props.getValue}
                  className={type==='range'?'slider_range':'custom'}
                  value={value}
                  valid={valid
                    ?testR.test(value)
                    :''
                  }
                  invalid={invalid&&value.length>=10
                    ?!testR.test(value)
                    :''
                  }
                  pattern={pattern?pattern:null}
                  id={id}
                  type={type}
                  autoFocus
                  required={required}
                  min={rango&&rango[0]}
                  max={rango&&rango[1]}
                  name={name}/>
                <FormFeedback className="animated fadeIn" valid>Súper</FormFeedback>
                <FormFeedback>Ingresa 10 dígitos</FormFeedback>
                <FormText>{longQ}</FormText>

            </Col>
        </FormGroup>

    )
  }
}
