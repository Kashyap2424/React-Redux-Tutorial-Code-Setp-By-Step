import { ADD_TO_CART } from "../Constants";

export const addToCart = (productData) => {
  return {
    type: ADD_TO_CART,
    productData: productData,
  };
};
