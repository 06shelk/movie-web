import React, { useState } from 'react';
import styled from 'styled-components';
import Search from './Search';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { IoSearch } from "react-icons/io5"; // IoSearch 아이콘 import

// Header 스타일
const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 12px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #373b69;
  z-index: 100;
  box-shadow: 0 4px 4px -4px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    padding: 12px 5px;
    flex-direction: column;
    align-items: flex-start;
  }
`;

// Logo 스타일
const Logo = styled.div`
  font-size: 1em;
  font-weight: 600;
  color: white;
  margin: 0 20px;
  
  @media (max-width: 768px) {
    margin: 0;
  }
`;

// Navigation 스타일
const Navigation = styled.nav`
  display: flex;
  align-items: center;
  margin: 0 20px;
  
  @media (max-width: 768px) {
    display: ${props => (props.open ? 'flex' : 'none')};
    flex-direction: column;
    width: 100%;
    background-color: #373b69;
    position: absolute;
    top: 60px;
    left: -25px;
    padding: 10px 0;
    
    a {
      padding: 10px;
      margin: 0;
    }
  }

  a {
    text-decoration: none;
    color: white;
    padding: 6px 15px;
    border-radius: 20px;
    margin: 0 10px;
    font-weight: 600;
    
    &:hover,
    &.active {
      background: #333;
      color: #fff;
    }
  }
`;

// Menu Icon 스타일
const MenuIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    font-size: 24px;
    cursor: pointer;
    color: white;
    margin-top: 5px;
  }
`;

// Search Icon Wrapper 스타일
const SearchIconWrapper = styled.div`
  display: flex;
  align-items: center;
  color: white;
  margin-right: 10px;

  input {
    margin-right: 10px;
    padding: 5px;
    font-size: 14px;
    border: none;
    outline: none;
    background-color: #373b69;
    border-bottom: 1px solid #888;
    color: white;
    
  }
`;

const Header = ({ onSearch, value }) => {
  const [isOpen, setIsOpen] = useState(false); // 메뉴 열림/닫힘 상태
  const [isSearchOpen, setIsSearchOpen] = useState(false); // 검색창 열림/닫힘 상태

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleChange = (event) => {
    
    onSearch(event.target.value); // 검색어 변경 시 상위 컴포넌트로 전달
  };

  return (
    <StyledHeader>
      <a href='/' style={{ textDecoration: "none"}}>
        <Logo>MOVIEWEB</Logo>
      </a>
      <MenuIcon onClick={toggleMenu}>
        {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
      </MenuIcon>
      <Navigation open={isOpen}>
        <SearchIconWrapper >
           <Search  onChange={handleChange}  onSearch={onSearch} value={value} />
          <IoSearch onClick={toggleSearch} style={{ cursor: 'pointer' }} />
        </SearchIconWrapper>
      </Navigation>
    </StyledHeader>
  );
};

export default Header;
