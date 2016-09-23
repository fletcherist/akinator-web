import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import history from '../reducers/history'
import finder from '../reducers/finder'
import favorite from '../reducers/favourite'

console.log(history, finder, favorite)
export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    // Add sync reducers here
    router,
    history,
    finder,
		favorite,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
