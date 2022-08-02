import React from "react";

function Pin({ pinSize, image, name, link }) {
  return (
    <div className={`pin ${pinSize}`}>
      <img
        className="mainPic"
        src={image}
        alt={name}
      />

      <div className="content">
        <h3>{name}</h3>
        <a href={link}><h4>Go see</h4></a>
      </div>
    </div>
  );
}

export default Pin;
