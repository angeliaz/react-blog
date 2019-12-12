import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import counter  from 'reducers/counter'
import userInfo  from 'reducers/userInfo'

export default createStore(
  combineReducers({counter, userInfo}), 
  applyMiddleware(thunkMiddleware)
)
