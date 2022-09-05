import React from "react";

const Pokemon = (props) => {
  console.log(props, "props");
  return <div>{props.name}</div>;
};

export default Pokemon;
