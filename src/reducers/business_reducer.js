import _ from 'lodash';
import { FETCH_BUSINESS } from '../actions';

export default function(state= {}, action) {
  switch (action.type) {
    case FETCH_BUSINESS:
    console.log(action.payload.data);
      return _.mapKeys(action.payload.data, 'id');

    default:
      return state;
  }
}
