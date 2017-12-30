import * as actionType from '../actions/actionType'
import extend from 'lodash/fp/extend';
import clone from 'lodash/fp/clone';

const swordkinReducer = (state = {swords: [], materials: {ore: {count: 0}}, recipes: {}}, action) => {
  let newState;
  switch(action.type) {
    case actionType.START_GAME:
      newState = {start: action.payload}
      return newState = extend(state, newState);
    case actionType.INCREMENT_ORE:
      let newState = clone(state)
      newState.materials.ore.count = state.materials.ore.count + action.payload
      return newState;
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
      console.log('new materials', state.materials)
      newState = { mail: newMail, recipes: state.recipes, materials: state.materials }
      let temp = extend(state, newState)
      console.log('new state', newState, temp)
      return newState = extend(state, newState)
    case actionType.FORGE_SWORD:
      newState = clone(state)
      newState.swords.push(action.payload.recipe)
      for (let i = 0; i < action.payload.reqKeys.length; i++) {
        let key = action.payload.reqKeys[i]
        console.log('KEY', key)
        newState.materials[key].count = newState.materials[key].count - action.payload.recipe.requires[key]
      }
      console.log('new sword state', newState)
      return newState;
    default:
      return state;
  }
}

export default swordkinReducer;
