import { combineReducers } from 'redux';
import {contactReducer} from './contact-reducer';

// import {campaignReducer} from './campaign-reducer';


const rootReducer = () => combineReducers({
    // campaignReducer
    contactReducer
});


export default rootReducer;
