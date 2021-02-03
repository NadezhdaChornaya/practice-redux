import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTutor } from "../../../redux/actions/tutorsActions";

import { TutorFormContainer } from "./TutorFormStyled";

const stackOptions = ["HTML", "Java Script", "React", "Node"];
const positionOptions = ["Mentor", "Tutor", "Manager"];

const initialState = {
  firstName: "",
  lastName: "",
  stack: "HTML",
  position: "Mentor",
};

const TutorForm = () => {
  const [state, setState] = useState({ ...initialState });
  const dispatch = useDispatch();

  const onHandleChange = (evt) => {
    const { name, value } = evt.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewTutor(state));

    setState({ ...initialState });
  };

  return (
    <TutorFormContainer>
      <form onSubmit={onHandleSubmit}>
        <label>
          First name
          <input
            type="text"
            value={state.firstName}
            onChange={onHandleChange}
            name="firstName"
          />
        </label>
        <label>
          Last name
          <input
            type="text"
            value={state.lastName}
            onChange={onHandleChange}
            name="lastName"
          />
        </label>
        <label>
          Stack
          <select value={state.stack} onChange={onHandleChange} name="stack">
            {stackOptions.map((item, idx) => (
              <option key={idx} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <label>
          Position
          <select
            value={state.position}
            onChange={onHandleChange}
            name="position"
          >
            {positionOptions.map((item, idx) => (
              <option key={idx} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>

        <button type="submit">Add Tutor</button>
      </form>
    </TutorFormContainer>
  );
};

export default TutorForm;
