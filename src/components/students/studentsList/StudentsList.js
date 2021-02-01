import React from 'react'
import { useSelector } from 'react-redux'

const StudentsList = () => {
    const students = useSelector(state => state.students.items)
    return (
        <ul>
            {students.map(student => <li key={student.id}><p>{student.firstName}<span> </span>{student.lastName}</p></li>)}
        </ul>
    )
}

export default StudentsList
