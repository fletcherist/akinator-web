import { createAction } from 'redux-actions'
import {
	ADD_TO_HISTORY
} from '../constants/actionTypes'

export const addToHistory = createAction(ADD_TO_HISTORY)
