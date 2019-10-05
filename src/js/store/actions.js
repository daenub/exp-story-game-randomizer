function shuffle(a) {
  let j, x, i
  let array = a.concat()

  for (i = array.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1))
    x = array[i]
    array[i] = array[j]
    array[j] = x
  }

  return array
}

export function initNewGame() {
  return (dispatch, getState) => {
    dispatch({type: "NEW_GAME"})

    const {emotions, objects, places} = getState()

    let emotionsOrder = emotions.map((e, i) => i)
    emotionsOrder = shuffle(emotionsOrder)

    let objectsOrder = objects.map((o, i) => i)
    objectsOrder = shuffle(objectsOrder)

    let placesOrder = places.map((p, i) => i)
    placesOrder = shuffle(placesOrder)

    dispatch({
      type: "SET_EMOTIONS_ORDER",
      list: emotionsOrder,
    })

    dispatch({
      type: "SET_OBJECTS_ORDER",
      list: objectsOrder,
    })

    dispatch({
      type: "SET_PLACES_ORDER",
      list: placesOrder,
    })
  }
}

export function nextTurn() {
  return (dispatch, getState) => {
    const {currentTurn} = getState()
    dispatch({type: "NEXT_TURN"})
  }
}
