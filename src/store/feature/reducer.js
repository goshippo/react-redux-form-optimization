import * as ActionKeys from './constants';


const initialState = {
  testVariants: [],
  testVariantByFeature: {},
};

function featureTestsReducer(state = initialState, action) {
  switch (action.type) {
    case ActionKeys.LOAD_FEATURE_TESTS:
      return {
        ...state,
        testVariants: action.payload.testVariants,
        testVariantByFeature: action.payload.featureTestUserVariants
      };
    default:
      return state;
  }
}

export default featureTestsReducer;
