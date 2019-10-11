import React from 'react';
import {connect} from 'react-redux';
import {ContactFormLTD} from '../components/forms';

import {start_lead,cancel_lead} from '../redux/actions/contact-actions';

const ContactFormLTDCont=({start_lead,cancel_lead,history,...rest})=>{
  return(
    <ContactFormLTD postDataLead={start_lead}
    cancel_request={cancel_lead}
     {...rest} />
  )
}

export default connect(({contactReducer})=>({
  ...contactReducer
}),{
  start_lead,
  cancel_lead
})(ContactFormLTDCont)
