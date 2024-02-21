import React from "react";

const NewRelease = ({ movieList, onClick }) => {
  return (
    <div>
      <h1 className="section-heading">New Releases</h1>
      <div className="movie-list-wrap">
        {movieList.map((movie, id) => (
          <div className="thumbnail-container" onClick={() => onClick(id)}>
            <div className="gradient-top"></div>
            <img className="thumbnail-image" src={movie.thumbnail} />
            <div className="thumbnail-title-episode">
              Episode {movie.episode}
            </div>
            <div className="thumbnail-title">{movie.movieName}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewRelease;
