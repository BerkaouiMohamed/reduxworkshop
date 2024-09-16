import prodcuts from "../../products";
import { ADDPRODUCT, DELETEPRODUCT } from "./types";

function prodcutsReducer(state =prodcuts, action) {
  switch (action.type) {
    case ADDPRODUCT: {
      return [...state, action.payload];
    }
    case DELETEPRODUCT:
      return state.filter((product) => product.id!== action.payload.id);

    default:
      return state;
  }
}
export default prodcutsReducer