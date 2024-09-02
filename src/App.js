import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Movie from './components/Movie';
import Header from './components/Header';
import Detail from './components/Detail';
import { dummy } from './movieDummy';

// Body 스타일
const GlobalStyle = createGlobalStyle`
  body {
    background-color: #22254b;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  }
`;

// App Container 스타일
const AppContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 100px;
`;

// Header Container 스타일
const HeaderContainer = styled.div`
  margin-bottom: 20px;
`;

// 결과가 없을 때
const NoSearch = styled.p`
  color: #999;
`;


function App() {
  const [searchQuery, setSearchQuery] = useState('');

  // 검색어에 따라 영화 필터링
  const filteredMovies = dummy.results.filter(movie =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    movie.overview.toLowerCase().includes(searchQuery.toLowerCase()) ||
    movie.release_date.includes(searchQuery)
  );
  return (
    <Router>
      <GlobalStyle />
      <HeaderContainer>
        <Header onSearch={setSearchQuery}  value={searchQuery}  />
      </HeaderContainer>
      <Routes>
        <Route path="/" element={
      <AppContainer>
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
              vote_average={movie.vote_average}
              release_date={movie.release_date}
              overview={movie.overview}
              query={searchQuery}
            />
          ))
        ) : (
          <NoSearch>검색된 영화가 없습니다.</NoSearch>
        )}
        </AppContainer>
        } />
        <Route path="/movie/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
