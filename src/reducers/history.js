import {
  ADD_TO_HISTORY,
  REMOVE_FROM_HISTORY
} from '../constants/actionTypes'

const initialState = []
function history (state = initialState, action) {
  switch (action.type) {
    case ADD_TO_HISTORY:
      return [...state, [...action.payload]]
    case REMOVE_FROM_HISTORY:
      return state
    default:
      return state
  }
}

export default history
