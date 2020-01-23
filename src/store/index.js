import {createStore, compose, applyMiddleware} from 'redux'
import reducers from './reducers'
import '../config/ReactotronConfig'

import createSagaMiddleware from  'redux-saga';
import sagas from './sagas'

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware]
const composer = process.env.NODE_ENV === 'development'
? compose(
  applyMiddleware(...middlewares),
  console.tron.createEnhancer() 
) :   applyMiddleware(...middlewares);

const store = createStore(reducers, composer )
sagaMiddleware.run(sagas)


export default store