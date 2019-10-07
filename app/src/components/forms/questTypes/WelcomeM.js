import React from 'react';
import {FormGroup} from 'reactstrap';

export const WelcomeM =({info:{message,small},className})=>{
  return(
    <FormGroup className={`animated fadeInPlace ${className}`} row>
      <legend>
        {message}
        <br/>
        <small className="text-muted">
          {small}
        </small>
      </legend>
    </FormGroup>
  )
}
