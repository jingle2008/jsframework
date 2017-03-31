// @flow

import Immutable from 'immutable';
import type { fromJS as Immut } from 'immutable';

import {
    SAY_HELLO,
    SAY_HELLO_ASYNC_REQUEST,
    SAY_HELLO_ASYNC_SUCCESS,
    SAY_HELLO_ASYNC_FAILURE,
} from '../action/hello';

const initialState = Immutable.fromJS({
    message: 'Initial reducer message',
    messageAsync: 'Initial reducer message for async call',
});

const helloReducer = (state: Immut = initialState, action: { type: string, payload: any }) => {
    switch (action.type) {
        // eslint-disable-next-line indent
        case SAY_HELLO:
            // eslint-disable-next-line indent
            return state.set('message', action.payload);
            // eslint-disable-next-line indent
        case SAY_HELLO_ASYNC_REQUEST:
            // eslint-disable-next-line indent
            return state.set('messageAsync', 'Loading...');
            // eslint-disable-next-line indent
        case SAY_HELLO_ASYNC_SUCCESS:
            // eslint-disable-next-line indent
            return state.set('messageAsync', action.payload);
            // eslint-disable-next-line indent
        case SAY_HELLO_ASYNC_FAILURE:
            // eslint-disable-next-line indent
            return state.set('messageAsync', 'No message received, please check your connection');
            // eslint-disable-next-line indent
        default:
            // eslint-disable-next-line indent
            return state;
    }
};

export default helloReducer;
