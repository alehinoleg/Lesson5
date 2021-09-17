import React from "react";
import Qualitie from "./qualitie";
import Bookmark from "./bookmark";

const User = ({ user, onDelete, onToggleBookMark }) => {
  const styleQualities = {
    color: "white",
    padding: "3px 5px",
    borderRadius: "4px",
  };
  return (
    <tr key={user._id}>
      <td>{user.name}</td>
      <td>
        {user.qualities.map((quality) => (
          <Qualitie
            quality={quality}
            key={quality._id}
            styleQualities={styleQualities}
          />
        ))}
      </td>
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

export default User;