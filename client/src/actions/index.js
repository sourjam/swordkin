import * as actionType from './actionType';

export const startGame = () => ({
  type: actionType.START_GAME,
  payload: true
})

export const incrementOre = (amount = 1) => {
  console.log('amount', amount)
  return ({type: actionType.INCREMENT_ORE, payload: amount})
}

export const markMailread = (index) => {
  console.log('mark read', index)
  return ({type: actionType.MARK_MAILREAD, payload: index})
}
