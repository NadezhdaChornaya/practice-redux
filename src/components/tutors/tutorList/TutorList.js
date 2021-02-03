import React from "react";
import { useSelector } from "react-redux";
import { TutorListContainer } from "./TutorListStyled";

const TutorList = () => {
  const tutor = useSelector((state) => state.tutors.tutorItems);
  return (
    <TutorListContainer>
      <ul className="studentsList">
        {tutor.map((item) => (
          <li key={item.id} className="studentsListItem">
            <p>
              First name:<span> </span>
              {item.firstName}
            </p>
            <p>Last name: {item.lastName}</p>
            <p>Stack: {item.stack}</p>
            <p>Position: {item.position}</p>
          </li>
        ))}
      </ul>
    </TutorListContainer>
  );
};
export default TutorList;
