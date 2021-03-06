import fetch from 'isomorphic-fetch'

export const REQUEST_PUPPIES = 'REQUEST_PUPPIES'
export function requestPuppies() {
  return {
    type: REQUEST_PUPPIES
  }
}

export const RECEIVE_PUPPIES = 'RECEIVE_PUPPIES'
export function receivePuppies(json) {
  return {
    type: RECEIVE_PUPPIES,
    puppies: json,
    receivedAt: Date.now()
  }
}

export const REQUEST_BREEDS = 'REQUEST_BREEDS'
export function requestBreeds() {
  return {
    type: REQUEST_BREEDS
  }
}

export const RECEIVE_BREEDS = 'RECEIVE_BREEDS'
export function receiveBreeds(json) {
  return {
    type: RECEIVE_BREEDS,
    breeds: json,
    receivedAt: Date.now()
  }
}

function shouldFetchPuppies(state) {
  const puppies = state.puppies
  if (!puppies) {
    return true
  } else if (puppies.isFetching) {
    return false
  } else {
    return true
  }
}

// Thunk action creators
function fetchPuppies() {
  return function (dispatch) {
    // First, inform app API call is starting
    dispatch(requestPuppies())

    // Return a promise to wait for
    return fetch('https://ajax-puppies.herokuapp.com/puppies.json')
      .then(response => response.json())
      .then(json => dispatch(receivePuppies(json)))
  }
}

export function fetchPuppiesIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchPuppies(getState())) {
      return dispatch(fetchPuppies())
    } else {
      // Let the calling code know there is nothing to resolve
      return Promise.resolve()
    }
  }
}

export function fetchBreeds() {
  return function (dispatch) {
    dispatch(requestBreeds())
    return fetch('https://ajax-puppies.herokuapp.com/breeds.json')
      .then(response => response.json())
      .then(json => dispatch(receiveBreeds(json)))
  }
}
