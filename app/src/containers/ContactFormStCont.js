import React from 'react';
import {connect} from 'react-redux';
import {ContactFormSt} from '../components/forms'

import {start_lead,cancel_lead} from '../redux/actions/contact-actions';

const ContactFormStCont =({start_lead,...rest})=>{
  return(
    <ContactFormSt
      postDataLead={start_lead}
      cancel_request={cancel_lead}
       {...rest} />
  )
}

export default connect(({contactReducer})=>contactReducer,{
  start_lead,
  cancel_lead
})(ContactFormStCont)
