import { BUY_ICE } from "./IceConstant";


const initialstate = {
    numofice: 10
}

const iceReducer = (state = initialstate, action) =>{
    switch (action.type){
        case BUY_ICE: return{
            ...state,
            numofice: state.numofice +1
        }

        default: return state
    }
}


export default iceReducer