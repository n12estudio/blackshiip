import React from 'react';
import {FormGroup} from 'reactstrap';

export const WelcomeM =({info:{message,small,title},className})=>{
  return(
    <FormGroup className={`animated fadeInPlace ${className}`} row>
      <h3 className="secondary_title w-100">
        {title}
      </h3>
      <p >
        {message}
        <br/>
        <small className="text-muted">
          {small}
        </small>
      </p>
    </FormGroup>
  )
}
