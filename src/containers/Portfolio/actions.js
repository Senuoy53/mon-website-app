import { ActionTypes } from "./constants";

const setClicked = (payload) => {
  return {
    type: ActionTypes.SET_CLICKED,
    payload,
  };
};

export { setClicked };
