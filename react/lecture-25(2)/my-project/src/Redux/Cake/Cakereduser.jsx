import { BUY_CAKE } from "./CakeConstant"
 const initialstate = {
    numofcake:10
 }

 const cakereducer =(state = initialstate, action) =>{
    switch(action.type){
        case BUY_CAKE :return state -1
        default:return state
    }
 }

 export default cakereducer