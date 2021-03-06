import {
  LOAD_NEXT_GIFT_LOADING,
  LOAD_NEXT_GIFT_SUCCESS,
  LOAD_NEXT_GIFT_ERROR,
  LOADING,
  SUCCESS,
  ERROR,

	SEND_NAME_LOADING,
	SEND_NAME_SUCCESS,
	SEND_NAME_ERROR,

	SEND_FEEDBACK_LOADING,
	SEND_FEEDBACK_SUCCESS,
	SEND_FEEDBACK_ERROR
} from '../constants/actionTypes'

const initialState = {
  status: LOADING,
	sessionId: ''
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
		case SEND_NAME_LOADING:
			return {...state, ...{status: LOADING}}
		case SEND_NAME_SUCCESS:
			return {...state, ...{status: SUCCESS}, ...{sessionId: action.payload}}
		case SEND_NAME_ERROR:
			return {...state, ...{status: ERROR}}
		case SEND_FEEDBACK_LOADING:
			return {...state, ...{status: LOADING}}
		case SEND_FEEDBACK_SUCCESS:
			return {
				...state,
				...action.payload,
				...{status: SUCCESS}
			}
		case SEND_FEEDBACK_ERROR:
			return {...state, ...{status: ERROR}}
    default:
      return state
  }
}

export default finder
