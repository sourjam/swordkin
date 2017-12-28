import * as actionType from '../actions/actionType'
import extend from 'lodash/fp/extend';

const swordkinReducer = (state = [], action) => {
  let newState;
  switch(action.type) {
    case actionType.START_GAME:
      newState = {start: true}
      return newState = extend(state, newState);
      break;
    default:
      return state;
  }
}

export default swordkinReducer;
