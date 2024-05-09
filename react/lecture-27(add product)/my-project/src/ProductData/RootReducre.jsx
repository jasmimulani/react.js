import { combineReducers } from 'redux'
import Reducer  from './Reducer'
import ProductReducer from './ProReducer'


const RootReducer = combineReducers({
  Reducer,
  ProductReducer
})

export default RootReducer


