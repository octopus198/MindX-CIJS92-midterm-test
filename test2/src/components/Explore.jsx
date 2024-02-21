import React from "react";
import listMovie from "./data";

const Explore = ({ mainTitle }) => {
  return (
    <div className="explore">
      <h1 className="section-heading">Explore</h1>
      <h2 className="section-description">What are you gonna watch today?</h2>
      <div className="explore-image-container">
        <div className="gradient-right"></div>
        <img className="explore-image" src={mainTitle.image} />
        <div className="explore-title">{mainTitle.movieName}</div>
        <div className="explore-title-description">{mainTitle.description}</div>
      </div>
    </div>
  );
};

export default Explore;
