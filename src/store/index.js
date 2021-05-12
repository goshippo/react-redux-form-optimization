import { combineReducers, createStore, compose } from 'redux';
import { reducer as formReducer } from 'redux-form'

import featureReducer from './feature/reducer';

import {loadFeatureTests} from './feature/actions'

const reducers = combineReducers({
    featureReducer,
    form: formReducer
})
const windowIfDefined = typeof window === 'undefined' ? null : window;
const composeEnhancers =
    windowIfDefined.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? windowIfDefined.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : compose;

let store = createStore(
    reducers,
    {},
    composeEnhancers()
);

store.dispatch(loadFeatureTests({
    testVariants : ['TEST 1', 'TEST 2'],
    featureTestUserVariants: {
        'TEST 1' : {
            'SETTINGS' : {}
        },
        'TEST 2' : {
            'SETTINGS' : {}
        }
    }
  }));

export default store;