import React from "react";
import PropTypes from "prop-types";
import Bookmark from "./bookmark";
import QualitiesList from "./qualitiesList";
import Table from "./table";

const UsersTable = ({ users, onDelete, onSort, selectedSort, ...rest }) => {
    const styleQualities = {
        color: "white",
        padding: "3px 5px",
        borderRadius: "4px"
    };
    const columns = {
        name: { path: "name", name: "Имя" },
        qualitis: {
            name: "Качества",
            component: (user) => (
                <QualitiesList
                    qualities={user.qualities}
                    styleQualities={styleQualities}
                />
            )
        },
        profession: { path: "profession.name", name: "Профессия" },
        completedMeetings: {
            path: "completedMeetings",
            name: "Встретился, раз"
        },
        rate: { path: "rate", name: "Оценка" },
        bookmark: {
            path: "bookmark",
            name: "Избранное",
            component: (user) => <Bookmark user={user} {...rest} />
        },
        delete: {
            component: (user) => (
                <button
                    className="btn bg-danger btn-sm"
                    style={styleQualities}
                    onClick={() => onDelete(user._id)}
                >
                    delete
                </button>
            )
        }
    };
    return (
        <Table
            onSort={onSort}
            selectedSort={selectedSort}
            columns={columns}
            data={users}
        />
    );
};

UsersTable.propTypes = {
    users: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
    onToggleBookMark: PropTypes.func.isRequired,
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired
};

export default UsersTable;
