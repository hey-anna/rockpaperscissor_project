import React from "react";

const Box = (props) => {
  console.log("props", props);
  // const { title, item, result, className } = props;
  return (
    // <div className="box">
    // <div className={props.box}>
    <div className={props.className}>
      <h1>{props.title}</h1>
      <img className="item-img" src={props.item && props.item.img} alt="" />
      <h2>{props.result}</h2>
    </div>
  );
};

export default Box;
