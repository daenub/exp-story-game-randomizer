import {createStore, applyMiddleware} from "redux"
import reducer from "./reducers"
import thunk from "redux-thunk"
import logger from "redux-logger"

import {emotions, objects, places} from "./data.js"

import {initNewGame} from "./actions.js"

export function configureStore() {
  const initialState = {
    emotions,
    objects,
    places,
  }

  let store = createStore(reducer, initialState, applyMiddleware(thunk, logger))

  store.dispatch(initNewGame())

  // if (module.hot) {
  //   module.hot.accept(() => {
  //     let reducer = require("./reducers").default
  //     store.replaceReducer(reducer)
  //   })
  // }

  return store
}
