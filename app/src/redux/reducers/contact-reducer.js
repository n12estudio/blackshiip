import {
  START_LEAD,
  SUCCESS_LEAD,
  ERROR_LEAD,
  REQUEST_LEAD,
  CANCEL_LEAD,
  RESET_LEAD,
  MAIL_LEAD,
} from '../actions/contact-actions';

export const contactReducer=(
  state={
    leadData:{},
    isPosting:false,
    message:'',
    error:false,
    mailMessage:false,
  },action
)=>{
  const {
    type,
    leadData,
    isPosting,
    message,
    error,
    mailMessage
  } = action
  switch(type){
    case START_LEAD:
      return ({...state,leadData})
    case REQUEST_LEAD:
      return ({...state,isPosting})
    case CANCEL_LEAD:
      return ({...state,isPosting})
    case SUCCESS_LEAD:
      return ({...state,message})
    case ERROR_LEAD:
      return ({...state,error})
    case MAIL_LEAD:
      return ({...state,mailMessage})
    case RESET_LEAD:
      return ({...state,error,message,mailMessage})
    default:
      return ({...state})
  }

}
