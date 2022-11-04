import React from "react";
import spinner from "../../assets/spinner4.gif";

const Loading = () => {
  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "80vh",
  };

  const imgStyle = {
    width: "9rem",
  };

  return (
    <div style={style}>
      <img style={imgStyle} src={spinner} alt="loading" />
    </div>
  );
};

export default Loading;
