import { PRODUCT_ADD } from "./ProContant";

const ProductReducer =(data = [] , action)=>{

    switch(action.type){
        case PRODUCT_ADD:
            console.warn("pridcutreducer called",action);
            return[action.data, ...data]

            default:return data
    }

}

export default ProductReducer