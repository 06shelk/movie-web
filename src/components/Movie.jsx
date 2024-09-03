import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";
const DEFAULT_POSTER = "https://via.placeholder.com/250x375?text=No+Image";

// Movie Container 스타일
const MovieContainer = styled.div`
  width: 250px;
  margin: 16px;
  background-color: #373b69;
  color: white;
  border-radius: 5px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
  
  img {
    max-width: 100%;
  }

  @media (max-width: 768px) {
    width: 80%;
  }
`;

// Movie Info 스타일
const MovieInfo = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
`;

// Movie Info Title 스타일
const MovieInfoTitle = styled.h4`
  margin: 0;
  color: white;
  text-decoration-line: none;
`;

// Movie Info Span 스타일
const MovieInfoSpan = styled.span`
  margin-left: 3px;
  color: white;
`;

const highlightMatch = (text, query) => {
    if (!query) return text;

    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return parts.map((part, index) =>
        part.toLowerCase() === query.toLowerCase() ? <span key={index}>{part}</span> : part
    );
};

const Movie = ({ id, title, poster_path, vote_average, query }) => {
  const posterUrl = poster_path ? `${IMG_BASE_URL}${poster_path}` : DEFAULT_POSTER;
  
  return (
    <MovieContainer>
        <Link to={`/movie/${id}`} style={{ textDecoration: "none"}}>
        <img src={posterUrl} alt={`${title} 포스터`} />
        <MovieInfo>
            <MovieInfoTitle>{highlightMatch(title, query)}</MovieInfoTitle>
            <MovieInfoSpan><Rating value={vote_average}/></MovieInfoSpan>
        </MovieInfo>
      </Link>
    </MovieContainer>
  );
};

export default Movie;
