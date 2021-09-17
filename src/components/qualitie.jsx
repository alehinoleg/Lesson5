import React from "react";

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

export default Quality;
