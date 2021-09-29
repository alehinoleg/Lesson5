import React from "react";
import PropTypes from "prop-types";

const GroupList = ({
    items,
    valueProperty,
    contentProperty,
    onItemSelect,
    selectedItem
}) => {
    if (typeof items === "object" && Array.isArray(items) === false) {
        return (
            <ul className="list-group">
                {Object.keys(items).map((item) => (
                    <li
                        key={items[item][valueProperty]}
                        className={
                            "list-group-item" +
                            (items[item] === selectedItem ? " active" : "")
                        }
                        onClick={() => {
                            console.log(items[item]);
                            onItemSelect(items[item]);
                        }}
                        role="button"
                    >
                        {items[item][contentProperty]}
                    </li>
                ))}
            </ul>
        );
    } else if (Array.isArray(items) === true) {
        return (
            <ul className="list-group">
                {items.map((item) => (
                    <li
                        key={item[valueProperty]}
                        className={`list-group-item${
                            item === selectedItem ? " active" : ""
                        }`}
                        role="button"
                        onClick={() => {
                            console.log(item);
                            onItemSelect(item);
                        }}
                    >
                        {item[contentProperty]}
                    </li>
                ))}
            </ul>
        );
    }
};

GroupList.defaultProps = {
    valueProperty: "_id",
    contentProperty: "name",
    selectedItem: {}
};
GroupList.propTypes = {
    items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    valueProperty: PropTypes.string.isRequired,
    contentProperty: PropTypes.string.isRequired,
    onItemSelect: PropTypes.func.isRequired,
    selectedItem: PropTypes.object.isRequired
};

export default GroupList;
