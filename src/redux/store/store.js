import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import videoReducer from '../reducers/video.reducer'

export const store = createStore(combineReducers({videoReducer}), applyMiddleware(thunkMiddleware))