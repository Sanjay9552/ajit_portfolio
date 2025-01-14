import React from "react";

const ButtonWithIcon = ({ id, img, onClick }) => {
  return (
    <button
      style={{
        width: "1vw",
        height: "1vw",
        padding: 0,
        borderWidth: 0,
        marginRight: 10,
        backgroundColor: "transparent",
      }}
      onClick={() => onClick(id)}
    >
      <img src={img} style={{ width: "100%", height: "100%" }} />
    </button>
  );
};

export default ButtonWithIcon;
