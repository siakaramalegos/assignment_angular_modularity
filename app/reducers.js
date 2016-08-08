import { combineReducers } from 'redux'
import { REQUEST_PUPPIES, RECEIVE_PUPPIES, REQUEST_BREEDS, RECEIVE_BREEDS } from './actions'

function puppies (state = {
  isFetching: false,
  didInvalidate: false,
  items: []
}, action) {
  switch (action.type) {
    case REQUEST_PUPPIES:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_PUPPIES:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.puppies,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  puppies
})

export default rootReducer
