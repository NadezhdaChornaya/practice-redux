import { ADDNEWTUTOR } from "../constants/tutorConstants";

const initialState = {
  tutorItems: [],
};
const tutorReducer = (state = { ...initialState }, { type, payload }) => {
  switch (type) {
    case ADDNEWTUTOR:
      return { ...state, tutorItems: [...state.tutorItems, payload] };

    default:
      return state;
  }
};

export default tutorReducer;
