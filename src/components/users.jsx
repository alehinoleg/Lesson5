import React, { useState } from "react";
import api from "../api";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());
  const styleQualities = {
    color: "white",
    padding: "3px 5px",
    borderRadius: "4px",
  };
  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId));
  };
  const renderPhrase = () => {
    if (users.length === 0) {
      return (
        <span className="btn bg-danger btn-sm" style={styleQualities}>
          Никто с тобой не тусанет
        </span>
      );
    } else if (users.length < 5 && users.length > 1) {
      return (
        <span className="badge bg-primary">
          {users.length} человека тусанут с тобой сегодня
        </span>
      );
    } else {
      return (
        <span className="badge bg-primary">
          {users.length} человек тусанет с тобой сегодня
        </span>
      );
    }
  };

  const renderTable = () => {
    if (users.length !== 0) {
      return (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился раз</th>
              <th scope="col">Оценка</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>
                  {user.qualities.map((quality) => (
                    <span
                      className={`bange me-2 bg-${quality.color}`}
                      key={quality._id}
                      style={styleQualities}
                    >
                      {quality.name}
                    </span>
                  ))}
                </td>
                <td>{user.profession.name}</td>
                <td>{user.completedMeetings}</td>
                <td>{user.rate}/5</td>
                <td>
                  <button
                    className="btn bg-danger btn-sm"
                    style={styleQualities}
                    onClick={() => handleDelete(user._id)}
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    }
  };

  return (
    <>
      {renderPhrase()}
      {renderTable()}
    </>
  );
};

export default Users;
