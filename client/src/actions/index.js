import * as actionType from './actionType';

export const startGame = () => ({
  type: actionType.START_GAME,
  payload: true
})

export const incrementOre = () => ({
  type: actionType.INCREMENT_ORE,
  payload: 1
})
