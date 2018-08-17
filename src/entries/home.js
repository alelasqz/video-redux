import React from 'react'
import { render } from 'react-dom'
import Home from '../pages/containers/home'
//import data from '../api.json'
//import data from '../schemas/index'
import { createStore, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import reducer from '../reducer/index'
import { Map as map } from 'immutable'

/*const initialState = {
  data: {
    entities: data.entities,
    categories: data.result.categories,
    search: []
  },
  modal: {
    visibility : false,
    mediaId: null
  }
}*/


const logger = ({getState, dispatch }) => next => action => {
  console.log('este es mi viejo estado', getState().toJS())
  console.log('vamos a enviar está acción', action);
  const value = next(action)
  console.log('este es mi nuevo estado', getState().toJS())
  return value
}

const store = createStore(
  reducer,
  map(),
  applyMiddleware(logger)
  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const homeContainer = document.getElementById('home-container')

render(
  <Provider store={store}>
    <Home />
  </Provider>
,homeContainer)