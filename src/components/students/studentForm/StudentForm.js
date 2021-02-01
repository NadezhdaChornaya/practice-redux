import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewStudent } from '../../../redux/actions/srudentActions';

const initialState = {
    firstName: '',
    lastName: '',
}

const StudentForm = () => {
    const [state, setState] = useState({ ...initialState })
    const dispatch = useDispatch();

    const onHandleChange = (e) => {
        const { name, value } = e.target;
        setState(prevState => ({ ...prevState, [name]: value }))
    }

    const onHandleSubmit = (e) => {
        e.preventDefault();
        dispatch(addNewStudent(state))
        setState({ ...initialState })
    }

    return (
        <form onSubmit={onHandleSubmit}>
            <input type='text' value={state.firstName} name='firstName' onChange={onHandleChange} />
            <input type='text' value={state.lastName} name='lastName' onChange={onHandleChange} />
            <button type='submit'>Add Student</button>
        </form>
    )
}
export default StudentForm