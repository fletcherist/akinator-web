import {
  LOAD_NEXT_GIFT_LOADING,
  LOAD_NEXT_GIFT_SUCCESS,
  LOAD_NEXT_GIFT_ERROR,
  LOADING,
  SUCCESS,
  ERROR
} from '../constants/actionTypes'

const initialState = {
  status: LOADING
}
function finder (state = initialState, action) {
  switch (action.type) {
    case LOAD_NEXT_GIFT_LOADING:
      return {...state, ...{status: LOADING}}
    case LOAD_NEXT_GIFT_SUCCESS:
      return {
        ...state,
        ...action.payload,
        ...{status: SUCCESS}
      }
    case LOAD_NEXT_GIFT_ERROR:
      return {...state, ...{status: ERROR}}
    default:
      return state
  }
}

export default finder
