import {
  ADD_TO_FAVOURITE,
  REMOVE_FROM_FAVOURITE
} from '../constants/actionTypes'

const initialState = []

function favorite (state = initialState, action) {
  switch (action.type) {
    case ADD_TO_FAVOURITE:
      return [...state, ...action.payload]
    case REMOVE_FROM_FAVOURITE:
      return state
    default:
      return state
  }
}

export default favorite
