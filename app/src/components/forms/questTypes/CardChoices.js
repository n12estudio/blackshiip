import React from 'react';
import {Card,CardBody,CardGroup} from 'reactstrap';

export const CardChoices =(props)=>{
  return(
    <CardGroup>
      {props.info.choices.map((el,i)=>(
        <Card className="selectable" outline color="primary" key={i}>
          <CardBody>
            {el}
          </CardBody>
        </Card>
      ))}
    </CardGroup>
  )
}
