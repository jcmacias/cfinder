import { combineReducers } from 'redux';
import BusinessReducer from './business_reducer'

const rootReducer = combineReducers({
  business: BusinessReducer 
});

export default rootReducer;
