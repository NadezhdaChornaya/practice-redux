import { ADDNEWSTUDENT, GETSTUDENTS } from "../constants/studentsConstants";

export const studentsReducer = (state = { items: [] }, action) => {
    switch (action.type) {
        case ADDNEWSTUDENT:
            localStorage.setItem(
                "students",
                JSON.stringify([...state.items, action.payload])
            );
            return {
                ...state,
                items: [...state.items, action.payload],
            };

        case GETSTUDENTS:
            return {
                ...state,
                items: [...action.payload],
            };

        default:
            return state;
    }
};
