import React from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { deleteCamp, setFilter } from "../../../redux/actions/bootCampActions";

const BootCampList = () => {
    const dispatch = useDispatch();

    const filter = useSelector((state) => state.bootCamps.filter);

    const bootCamps = useSelector((state) =>
        state.bootCamps.bootCamps.filter((item) =>
            item.campName
                .toLowerCase()
                .includes(state.bootCamps.filter.toLowerCase())
        )
    );

    const onHandleDelete = (e) => {
        const { id } = e.target;
        dispatch(deleteCamp(id));
    };
    const onHandleChange = (e) => {
        const { value } = e.target;
        dispatch(setFilter(value));
    };

    return (
        <div>
            <input type="text" onChange={onHandleChange} value={filter} />
            <ul>
                {bootCamps.map((camp) => (
                    <li key={camp.id}>
                        <p>{camp.campName}</p>
                        <p>{camp.campNumber}</p>
                        <h3>Students</h3>
                        <ul>
                            {camp.students.map((student) => (
                                <li key={student.id}>
                                    <p>
                                        {student.firstName}
                                        <span> </span>
                                        {student.lastName}
                                    </p>
                                    <button
                                        type="button"
                                        id={student.id}
                                        // onClick={this.onHandleClick}
                                    >
                                        Delete Student
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <button id={camp.id} onClick={onHandleDelete}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

// const mapStateToProps = (state) => {
//   return {
//     bootCamps: state.bootCamps.bootCamps.filter((item) =>
//       item.campName.toLowerCase().includes(state.bootCamps.filter.toLowerCase())
//     ),
//     filter: state.bootCamps.filter,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     deleteCamp: (id) => {
//       dispatch(deleteCamp(id));
//     },
//     setFilter: (id) => {
//       dispatch(setFilter(id));
//     },
//   };
// };

// export default connect(null, mapDispatchToProps)(BootCampList);
export default BootCampList;
