import * as actionType from './actionType';

export const startGame = () => ({
  type: actionType.START_GAME,
  payload: true
})

export const incrementOre = (amount = 1) => {
  return ({type: actionType.INCREMENT_ORE, payload: amount})
}

export const markMailread = (index, materials, recipes) => {
  return ({type: actionType.MARK_MAILREAD, payload: {index: index, materials: materials, recipes: recipes}})
}

export const forgeSword = (recipe, reqKeys) => {
  return ({type: actionType.FORGE_SWORD, payload: {recipe: recipe, reqKeys: reqKeys}})
}

export const addMail = (mailArray) => {
  console.log('add mail called')
  return ({type: actionType.ADD_MAIL, payload: mailArray})
}
