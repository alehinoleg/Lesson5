import React, { useState, useEffect } from "react";
import User from "./user";
import Pagination from "./pagination";
import { paginate } from "../utils/paginate";
import PropTypes from "prop-types";
import GroupList from "./groupList";
import api from "../api";
import SearchStatus from "./searchStatus";

const Users = ({ users, onDelete, onToggleBookMark }) => {
    const pageSize = 4;
    const [currentPage, setCurrentPage] = useState(1);
    const [profession, setProfession] = useState(api.profession.fetchAll());
    const [selectedProf, setSelectedProf] = useState();

    useEffect(() => {
        api.profession.fetchAll().then((date) => setProfession(date));
    }, []);

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedProf]);

    const handelProfessionSelect = (item) => {
        setSelectedProf(item);
    };

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const filteredUsers = selectedProf
        ? users.filter((user) => user.profession === selectedProf)
        : users;

    const count = filteredUsers.length;
    const usersCrop = paginate(filteredUsers, currentPage, pageSize);

    const clearFilter = () => {
        setSelectedProf();
    };

    return (
        <div className="d-flex">
            {profession && (
                <div className="d-flex flex-column flex-shrink-0 p-3">
                    <GroupList
                        selectedItem={selectedProf}
                        items={profession}
                        onItemSelect={handelProfessionSelect}
                    />
                    <button
                        className="btn btn-secondary mt-2"
                        onClick={clearFilter}
                    >
                        Очистить
                    </button>
                </div>
            )}

            <div className="d-flex flex-column">
                <SearchStatus lengthUser={count} />
                {count > 0 && (
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Имя</th>
                                <th scope="col">Качества</th>
                                <th scope="col">Профессия</th>
                                <th scope="col">Встретился раз</th>
                                <th scope="col">Оценка</th>
                                <th scope="col">Избранное</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {usersCrop.map((user) => (
                                <User
                                    key={user._id}
                                    user={user}
                                    onDelete={onDelete}
                                    onToggleBookMark={onToggleBookMark}
                                />
                            ))}
                        </tbody>
                    </table>
                )}
                <div className="d-flex justify-content-center">
                    <Pagination
                        itemsCount={count}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
        </div>
    );
};
Users.propTypes = {
    users: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
    onToggleBookMark: PropTypes.func.isRequired
};
export default Users;
