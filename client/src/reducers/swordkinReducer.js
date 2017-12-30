import * as actionType from '../actions/actionType'
import extend from 'lodash/fp/extend';

const swordkinReducer = (state = {swords: [], materials: {ore: 0}, recipes: {}}, action) => {
  let newState;
  switch(action.type) {
    case actionType.START_GAME:
      newState = {start: action.payload}
      return newState = extend(state, newState);
    case actionType.INCREMENT_ORE:
      newState = {materials: {ore: state.materials.ore + action.payload}}
      return newState = extend(state, newState)
    case actionType.MARK_MAILREAD:
      // mark mail as read
      let newMail = state.mail.slice(0);
      newMail[action.payload.index].unread = false;
      // add new recipes if any
      console.log('ACTION', action.payload)
      for (let i = 0; i < action.payload.recipes.length; i++) {
        let recipe = action.payload.recipes[i];
        if (!state.recipes[recipe.id]) {
          state.recipes[recipe.id] = recipe
        }
      }
      // add new materials if any
      for (let i = 0; i< action.payload.materials.length; i++) {
        let material = action.payload.materials[i];
        if (!state.materials[material.id]) {
          state.materials[material.id] = {
            count: material.count,
            material: material
          }
        } else if (state.materials[material.id]) {
          state.materials[material.id].count += material.count
        }
      }
      newState = { mail: newMail, recipes: state.recipes, materials: state.materials }
      console.log('new state', newState)
      return newState = extend(state, newState)
    default:
      return state;
  }
}

export default swordkinReducer;
