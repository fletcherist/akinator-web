import { createAction } from 'redux-actions'
import {
  LOAD_NEXT_GIFT
} from '../constants/actionTypes'

export const _loadNextGift = createAction(LOAD_NEXT_GIFT)
export const loadNextGift = () => dispatch => {
  return dispatch({
    type: LOAD_NEXT_GIFT,
    payload: new Promise((resolve, reject) => {
      fetch('http://akinator-test.appspot.com/question', {
				method: 'POST',
				headers: {
		      'Content-type': 'application/x-www-form-urlencoded'
		    },
				mode: 'no-cors',
				body: 'sessionId=-1&history=[[1,3]]'
			})
        .then(r => r.text())
        .then(r => {
          console.log(r)
          resolve(r)
        })
        .catch(err => {
          reject(err)
        })
    })
  })
}
