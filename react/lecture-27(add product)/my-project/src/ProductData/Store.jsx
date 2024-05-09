import RootReducer from './RootReducre';
import {configureStore} from '@reduxjs/toolkit'
// import { applyMiddleware } from "@reduxjs/toolkit";
import { createDynamicMiddleware } from "@reduxjs/toolkit";
import productsaga from './ProductSaga';


const sagaMiddelware = createDynamicMiddleware()

  const store = configureStore({
   reducer:RootReducer,
    middleware:() =>[sagaMiddelware]
  }) 
  middleware.run(productsaga)

  export default store