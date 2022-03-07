import { ActionTypes } from "./constants";

const initialstate = {
  clicked: false,
};

const clickedReducer = (state = initialstate, action) => {
  switch (action.type) {
    case ActionTypes.SET_CLICKED:
      return {
        ...state,
        clicked: action.payload,
      };

    default:
      return state;
  }
};

export default clickedReducer;
