import * as actionType from './actionType';

export const startGame = () => ({
  type: actionType.START_GAME,
  payload: true
})

// export const incrementOre = (amount) => ({
//   type: actionType.INCREMENT_ORE,
//   payload: 1
// })

export const incrementOre = (amount = 1) => {
  console.log('amount', amount)
  return ({type: actionType.INCREMENT_ORE, payload: amount})
}
