import {createSelector} from "reselect"

const emotions = state => state.emotions
const objects = state => state.objects
const places = state => state.places
const currentTurn = state => state.currentTurn

export const currentEmotion = createSelector(
  emotions,
  currentTurn,
  (emotions, turn) => emotions[turn]
)

export const currentObject = createSelector(
  objects,
  currentTurn,
  (objects, turn) => objects[turn]
)

export const currentPlace = createSelector(
  places,
  currentTurn,
  (places, turn) => places[Math.floor(turn / 4)]
)
