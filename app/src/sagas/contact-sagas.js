import { put, call, takeLatest } from 'redux-saga/effects'
import * as actions from '../redux/actions/contact-actions';
// import { ADMIN_MAIL } from '../globals';
import { api_public } from '../services'

function* postDataLead({leadData}) {
    yield put(actions.request_lead())
    const lead = yield call(api_public.postDataLead,leadData);
    if(lead.error){
      yield put(actions.error_lead(lead.error))
      // yield put(actions.cancel_lead())
    } else {
      yield put(actions.success_lead(lead.message))
      // yield put(actions.cancel_lead())
    }

}

//Watchers



export function* watchContactData() {
    /*
        takeLatest will fork a new `getAllProducts` task on each GET_ALL_PRODUCTS actions
        i.e. concurrent GET_ALL_PRODUCTS actions are allowed
    */
     // takeLatest (queloactiva,queSagaActiva,quepasaenlugardelaaccion)
    yield takeLatest(actions.START_LEAD, postDataLead)
}
