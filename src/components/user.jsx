import React from "react";
import Qualitie from "./qualitie";
import Bookmark from "./bookmark";
import PropTypes from "prop-types";

const User = ({ user, onDelete, onToggleBookMark }) => {
    const styleQualities = {
        color: "white",
        padding: "3px 5px",
        borderRadius: "4px"
    };
    return (
        <tr key={user._id}>
            <td>{user.name}</td>
            <td></td>
            <td>{user.profession.name}</td>
            <td>{user.completedMeetings}</td>
            <td>{user.rate}/5</td>
            <td>
                <Bookmark user={user} onToggleBookMark={onToggleBookMark} />
            </td>
            <td>
                <button
                    className="btn bg-danger btn-sm"
                    style={styleQualities}
                    onClick={() => onDelete(user._id)}
                >
                    delete
                </button>
            </td>
        </tr>
    );
};

User.propTypes = {
    user: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired,
    onToggleBookMark: PropTypes.func.isRequired
};

export default User;
