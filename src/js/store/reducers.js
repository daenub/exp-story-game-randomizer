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
    case "SET_EMOTIONS_ORDER":
      return action.list
    default:
      return state
  }
}

function objectsOrder(state = [], action) {
  switch (action.type) {
    case "SET_OBJECTS_ORDER":
      return action.list
    default:
      return state
  }
}

function placesOrder(state = [], action) {
  switch (action.type) {
    case "SET_PLACES_ORDER":
      return action.list
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
