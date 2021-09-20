import React from "react";
import PropTypes from "prop-types";

const Quality = ({ quality, styleQualities }) => {
    return (
        <span
            className={`bange me-2 bg-${quality.color}`}
            key={quality._id}
            style={styleQualities}
        >
            {quality.name}
        </span>
    );
};

Quality.propTypes = {
    quality: PropTypes.object.isRequired,
    styleQualities: PropTypes.object.isRequired
};

export default Quality;
