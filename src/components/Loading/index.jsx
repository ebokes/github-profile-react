import React from "react";
import spinner from "../../assets/spinner.gif";

const Loading = () => {
  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };

  const imgStyle = {
    width: "5rem",
  };

  return (
    <div style={style}>
      <img style={imgStyle} src={spinner} alt="loading" />
    </div>
  );
};

export default Loading;
