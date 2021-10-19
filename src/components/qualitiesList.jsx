import React from "react";
import PropTypes from "prop-types";
import Qualitie from "./qualitie";

const QualitiesList = ({ qualities, styleQualities }) => {
    return (
        <>
            {qualities.map((quality) => (
                <Qualitie
                    quality={quality}
                    key={quality._id}
                    styleQualities={styleQualities}
                />
            ))}
        </>
    );
};

QualitiesList.PropTypes = {
    qualities: PropTypes.array
};

export default QualitiesList;
