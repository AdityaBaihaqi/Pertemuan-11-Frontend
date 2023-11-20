import React from "react";
import styled from "styled-components";

const Movie = (props) => {
  const { title, date, image, genre } = props;
  return (
    <MovieStyle>
      <img className="movie__image" src={image} alt="" />
      <h3 className="movie__title">{title}</h3>
      <p className="movies__genre">{genre}</p>
      <p className="movies__date">{date}</p>
    </MovieStyle>
  );
};

const MovieStyle = styled.div`
  margin-bottom: 1rem;

  .movie__image {
    border-radius: 25px;
    width: 300px;
    height: 400px;
    margin-bottom: 1rem;
  }

  .movie__title {
    color: #fff;
    font-size: 1.95rem;
    margin-bottom: 0.5rem;
  }

  .movie__date {
    color: #64748b;
  }

  @media (min-width: 768px) {
    flex-basis: 50%;
  }

  /* Large Screen */
  @media (min-width: 992px) {
    flex-basis: 25%;
    padding: 1rem;
  }
`;

export default Movie;
