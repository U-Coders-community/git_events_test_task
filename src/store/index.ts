import {combineReducers, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {eventsReducer} from './reducers/events-reducer';

const reducer = combineReducers({
  events: eventsReducer,
});

export const store = createStore(reducer, composeWithDevTools());
