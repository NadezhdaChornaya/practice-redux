import { ADDNEWTUTOR } from "../constants/tutorConstants";
import { v4 as uuidv4 } from "uuid";

const addNewTutor = (tutor) => ({
  type: ADDNEWTUTOR,
  payload: { ...tutor, id: uuidv4() },
});

export { addNewTutor };
