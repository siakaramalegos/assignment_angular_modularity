import { combineReducers } from 'redux'
import { REQUEST_PUPPIES, RECEIVE_PUPPIES, REQUEST_BREEDS, RECEIVE_BREEDS } from './actions'

function puppies (state = {
  isFetching: false,
  items: []
}, action) {
  switch (action.type) {
    case REQUEST_PUPPIES:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_PUPPIES:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.puppies,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

function breeds (state = {
  isFetching: false,
  items: []
}, action) {
  switch (action.type) {
    case REQUEST_BREEDS:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_BREEDS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.breeds,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  puppies,
  breeds
})

export default rootReducer
