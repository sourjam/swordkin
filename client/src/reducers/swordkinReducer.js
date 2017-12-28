import * as actionType from '../actions/actionType'
import extend from 'lodash/fp/extend';

const swordkinReducer = (state = {ore: 0}, action) => {
  let newState;
  switch(action.type) {
    case actionType.START_GAME:
      newState = {start: action.payload}
      return newState = extend(state, newState);
    case actionType.INCREMENT_ORE:
      newState = {ore: state.ore + action.payload}
      return newState = extend(state, newState)
    default:
      return state;
  }
}

export default swordkinReducer;
