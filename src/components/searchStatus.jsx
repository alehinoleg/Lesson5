import React from "react";

const SearchStatus = ({ lengthUser }) => {
    const renderPhrase = (lengthUser) => {
        console.log(lengthUser);
        if (lengthUser >= 5 || lengthUser === 1) {
            return (
                <span className="badge bg-primary">
                    {lengthUser} человек тусанет с тобой сегодня
                </span>
            );
        } else if (lengthUser < 5 && lengthUser > 1) {
            return (
                <span className="badge bg-primary">
                    {lengthUser} человека тусанут с тобой сегодня
                </span>
            );
        }

        return (
            <span className="btn bg-danger btn-sm">
                Никто с тобой не тусанет
            </span>
        );
    };
    return renderPhrase(lengthUser);
};

export default SearchStatus;
