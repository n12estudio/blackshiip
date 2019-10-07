import { all } from 'redux-saga/effects';
import {watchContactData} from './contact-sagas';

export function* greetingsSaga() {
   yield console.log('Hi there!');
// yield 1;
// console.log('hi')
}

export default function* rootSaga() {
    console.log('redux saga setup ok');
    yield all([
        //add your sagas here:
        greetingsSaga(),
        watchContactData()


    ]);
};
