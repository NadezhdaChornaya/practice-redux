import React, { useEffect } from "react";
import { useDispatch } from 'react-redux'
import Navigation from "./navigation/Navigation";
import { getStudents } from '../redux/actions/srudentActions'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    if (localStorage.getItem('students')) {
      const students = JSON.parse(localStorage.getItem('students'))
      dispatch(getStudents(students))
    }
  }, [])
  return (
    <div>
      <Navigation />
    </div>
  );
};

export default App;
