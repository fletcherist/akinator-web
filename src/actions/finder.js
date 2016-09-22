import { createAction } from 'redux-actions'
import {
  LOAD_NEXT_GIFT,
	SEND_NAME,

	LIKE_ITEM,
	DISLIKE_ITEM,
	NORMAS,
	PUT_FEEDBACK,
	SEND_FEEDBACK
} from '../constants/actionTypes'

export const _loadNextGift = createAction(LOAD_NEXT_GIFT)

export const sendName = name => dispatch => {
	console.log(name, dispatch)
	return dispatch({
		type: SEND_NAME,
		payload: new Promise((resolve, reject) => {
			fetch('http://akinator-test.appspot.com/session/create', {
				method: 'POST',
				headers: {'Content-Type': 'application/x-www-form-urlencoded'},
				body: `name=${name}&price=0`
			})
			.then(r => r.json())
			.then(r => resolve(r.sessionId))
			.catch(r => reject(r))
		})
	})
}

export const sendFeedback = (giftId, feedback) => (dispatch, getState) => {
	console.log(getState().history)
	const history = getState().history
	const finder = getState().finder
	let { sessionId } = finder
	if (!sessionId || sessionId == '') sessionId = '-1'
	let body = `sessionId=${sessionId}&history=${JSON.stringify(history)}`
	console.log(body)
	return dispatch({
		type: SEND_FEEDBACK,
		payload: new Promise((resolve, reject) => {
			fetch('http://akinator-test.appspot.com/question', {
				method: 'POST',
				headers: {'Content-Type': 'application/x-www-form-urlencoded'},
				body: body
			})
			.then(r => r.json())
			.then(r => {
				if (r) {
					resolve(r[0])
				}
			})
			.catch(r => reject(r))
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
