import { createAction } from 'redux-actions'
import {
  LOAD_NEXT_GIFT,
	SEND_NAME,

	LIKE_ITEM,
	DISLIKE_ITEM,
	NORMAS
} from '../constants/actionTypes'

export const _loadNextGift = createAction(LOAD_NEXT_GIFT)

export const likeItem = createAction(LIKE_ITEM)
export const dislikeItem = createAction(DISLIKE_ITEM)
export const normas = createAction(NORMAS)

export const sendName = name => dispatch => {
	return dispatch({
		type: SEND_NAME,
		payload: new Promise((resolve, reject) => {
			fetch('http://akinator-test.appspot.com/session/create', {
				method: 'POST',
				headers: {'Content-Type': 'application/x-www-form-urlencoded'},
				body: `name=${name}`
			})
		})
	})
}

export const sendFeedback = feedback => (dispatch, getState) => {
	return dispatch({
		type: SEND_FEEDBACK,
		payload: new Promise((resolve, reject) => {
			fetch('http://akinator-test.appspot.com/session/create', {
				method: 'POST',
				headers: {'Content-Type': 'application/x-www-form-urlencoded'}
			})
		})
	})
}
export const loadNextGift = () => dispatch => {
  return dispatch({
    type: LOAD_NEXT_GIFT,
    payload: new Promise((resolve, reject) => {
      fetch('http://akinator-test.appspot.com/question', {
				method: 'POST',
				headers: {'Content-Type': 'application/x-www-form-urlencoded'},
				body: 'sessionId=-1&history=[[1,3]]'
			})
        .then(r => r.json())
        .then(r => {
          console.log(r)
					if (r && r.length > 0) {
						resolve(r[0])
					}
          reject('none')
        })
        .catch(err => {
          reject(err)
        })
    })
  })
}
