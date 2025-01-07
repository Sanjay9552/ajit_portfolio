import React from "react";

const Modal = ({ isOpen, setIsOpen, item }) => {
  const modalStyles = {
    display: isOpen ? "flex" : "none",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 1000,
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    height: "90%",
  };

  const overlayStyles = {
    display: isOpen ? "block" : "none",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 999,
  };

  const closeButtonStyles = {
    position: "absolute",
    top: -10,
    right: -10,
    padding: 5,
    backgroundColor: "white",
    border: "0.2px solid black",
    borderRadius: 10,
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  };

  return (
    <div>
      <div style={overlayStyles} onClick={() => setIsOpen(false)} />
      <div style={modalStyles}>
        <div style={closeButtonStyles} onClick={() => setIsOpen(false)}>
          Close
        </div>

        <img
          src={item?.img}
          alt={item?.name}
          style={{ width: "auto", height: "100%", borderRadius: "8px" }}
          stre
        />
        {/* <div style={{ padding: 10, width: 400 }}>
          <div
            style={{
              fontSize: 30,
              fontFamily: "monospace",
              fontWeight: "bold",
            }}
          >
            {item?.name}
          </div>
          <div style={{ fontSize: 18, fontFamily: "monospace" }}>
            {" "}
            {item?.desc}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Modal;
