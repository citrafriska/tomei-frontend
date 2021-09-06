import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly'
import allReducers from './reducers/index.js'

const middleware = [thunk]

const store = createStore(allReducers, composeWithDevTools(applyMiddleware(...middleware)))

export default store 
