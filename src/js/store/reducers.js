import {combineReducers} from "redux"

function emotions(state = []) {
  return state
}

function objects(state = []) {
  return state
}

function places(state = []) {
  return state
}

function emotionsOrder(state = [], action) {
  switch (action.type) {
    default:
      return state
  }
}

function objectsOrder(state = [], action) {
  switch (action.type) {
    default:
      return state
  }
}

function placesOrder(state = [], action) {
  switch (action.type) {
    default:
      return state
  }
}

const reducer = combineReducers({
  emotions,
  objects,
  places,
  emotionsOrder,
  objectsOrder,
  placesOrder,
})

export default reducer
