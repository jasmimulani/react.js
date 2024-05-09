import{put ,takeEvery} from'redux-saga/effects'
import { PRODUCT_ADD } from './ProContant'
import { PRODUCT_SET } from './ProContant'


 function* getproduct(){
    let ProductList = yield fetch('http://localhost:3000/Product')
    data = yield ProductList.json()
    console.warn(data);
    yield put({type:PRODUCT_SET ,data})
    console.warn("productdataaction data",data);
 }


 function* productsaga() {
   yield takeEvery(PRODUCT_ADD, getproduct)  
 }

 export default productsaga