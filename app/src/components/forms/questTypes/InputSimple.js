import React,{Component} from 'react';
import {FormGroup,Label,Col,Input,FormFeedback,FormText} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

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
        longQ,
        autoFocus,
        feedback,
        limit
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
            <FontAwesomeIcon icon={icon}/>&nbsp;
            {label}
          </Label>
            <Col xs={12} sm={sizeSM[1]}>

                <Input onChange={this.props.getValue}
                  className={type==='range'?'slider_range':'custom'}
                  value={value}
                  valid={valid&&value!==''
                    ?testR.test(value)
                    :null
                  }
                  invalid={invalid&&value!==''
                    ?!testR.test(value)
                    :null
                  }
                  pattern={pattern?pattern:null}
                  id={id}
                  type={type}
                  autoFocus={autoFocus?true:false}
                  required={required}
                  min={rango&&rango[0]}
                  max={rango&&rango[1]}
                  maxLength={limit?limit:null}
                  name={name}/>
                <FormFeedback className="animated fadeIn" valid>Súper</FormFeedback>
                <FormFeedback>{feedback}</FormFeedback>
                <FormText>{longQ}</FormText>

            </Col>
        </FormGroup>

    )
  }
}
