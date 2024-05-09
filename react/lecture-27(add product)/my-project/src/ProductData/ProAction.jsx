import { PRODUCT_ADD } from "./ProContant";


export const productData = async(data) =>{
    let ProductList = await fetch('http://localhost:3000/Product')
      data = await ProductList.json()
      console.warn(data);
      console.warn("productdataaction data",data);
      return{
        type:PRODUCT_ADD
      }
} 