import React, { useState } from "react";
import Users from "./components/users";
import api from "./api";

const App = () => {
    const [users, setUsers] = useState(api.users.fetchAll());
    const handleDelete = (userId) => {
        setUsers(users.filter((user) => user._id !== userId));
    };

    const onToggleBookMark = (id) => {
        setUsers(
            users.filter((user) => {
                if (user._id === id) {
                    user.bookmark = !user.bookmark;
                    return user;
                }
                return user;
            })
        );
    };

    return (
        <>
            {users.length > 0 && (
                <Users
                    users={users}
                    onDelete={handleDelete}
                    onToggleBookMark={onToggleBookMark}
                />
            )}
        </>
    );
};

export default App;
