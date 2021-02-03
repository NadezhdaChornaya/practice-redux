import { ADDNEWCOURSE } from "../constants/coursesConstants";

export const addNewCourse = (course) => {
  return {
    type: ADDNEWCOURSE,
    payload: course,
  };
};
