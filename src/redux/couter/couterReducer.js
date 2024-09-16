import { DECCOUNTER, INCCOUNTNER } from "./types";

function counterReducer(state = { value: 0 }, action) {
    switch (action.type) {
      case  INCCOUNTNER:
        return { value: state.value + 1 };
      case DECCOUNTER : {
        if (state.value>0) return { value: state.value - 1 };
        else {
          return state;
        }
      }
      default:
        return state;
    }
  }
  
  export default counterReducer