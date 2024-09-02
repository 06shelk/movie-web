import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { dummy } from '../movieDummy'; 

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";
const DetailContainer = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center;
  justify-content: center;
  margin: 50px 20px; 
  color: white;
  
  @media (min-width: 768px) {
    flex-direction: row;
    margin: 100px 40px;
  }
`;

const Poster = styled.img`
  max-width: 100%;
  width: 200px; 
  border-radius: 5px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    width: 300px; 
    margin-right: 40px; 
    margin-bottom: 0; 
  }
`;

const Title = styled.h2`
  margin: 20px 0;
  text-align: center; 
`;

const Overview = styled.p`
  max-width: 100%;
  text-align: center; 
`;

const Texts = styled.div`
  max-width: 100%;
  text-align: center;
  padding: 0 20px; 

  @media (min-width: 768px) {
    max-width: 500px; 
    text-align: left; 
    padding: 0; 
  }
`;

const Detail = () => {
  const { id } = useParams();
  const movie = dummy.results.find(movie => movie.id === parseInt(id));

  if (!movie) {
    return <p>영화를 찾을 수 없습니다.</p>;
  }

  return (
    <DetailContainer>
      <Poster src={`${IMG_BASE_URL}${movie.poster_path}`} alt={movie.title} />
      <Texts>
        <Title>{movie.title}</Title>
        <Overview>{movie.overview}</Overview>
      </Texts>
    </DetailContainer>
  );
};

export default Detail;
