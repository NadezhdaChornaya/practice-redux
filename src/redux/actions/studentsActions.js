import { v4 as uuidv4 } from "uuid";
import { ADDNEWSTUDENT, GETSTUDENTS } from "../constants/studentsConstants";

export const addNewStudent = (student) => {
    return {
        type: ADDNEWSTUDENT,
        payload: { ...student, id: uuidv4() },
    };
};

export const getStudents = (students) => {
    return {
        type: GETSTUDENTS,
        payload: students,
    };
};
