import * as ActionKeys from './constants';


export function loadFeatureTests ( tests ){
    return {
        type : ActionKeys.LOAD_FEATURE_TESTS,
        payload : tests
    }
}