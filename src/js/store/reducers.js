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

function currentTurn(state = 0, action) {
  switch (action.type) {
    case "NEW_GAME":
      return 0
    case "NEXT_TURN":
      return state + 1
    default:
      return state
  }
}

function time(state = {startedAt: null, pausedAt: null}, action) {
  switch (action.type) {
    case "START_TIMER":
      return {
        startedAt: action.time,
        pausedAt: null,
      }
    case "PAUSE_TIMER":
      return {
        ...state,
        pausedAt: action.time,
      }
    case "RESET_TIMER":
      return {
        startedAt: null,
        pausedAt: null,
      }
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
  currentTurn,
  time,
})

export default reducer
