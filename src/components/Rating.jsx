import React from 'react';
import styled from 'styled-components';

import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";

const StarsWrapper = styled.div`
  font-size: 24px;
  display: inline-flex;
`;


function Rating({ value }) {
  const maxStars = 5;
  const normalizedRating = value / 2; // 별점이 10점 만점이면, 이를 5점 만점으로 변환
  const fullStars = Math.floor(normalizedRating); // 채워진 별 개수
  const hasHalfStar = normalizedRating % 1 !== 0; // 반쪽 별이 있는지 여부
  const emptyStars = Math.max(0, maxStars - fullStars - (hasHalfStar ? 1 : 0)); // 빈 별 개수
  return (
    <StarsWrapper>
      {/* 채워진 별 */}
      {Array(fullStars).fill().map((_, index) => (
        <IoMdStar key={index} />
      ))}
      {/* 반쪽 별 */}
      {hasHalfStar && <IoMdStarHalf />}
      {/* 빈 별 */}
      {Array(emptyStars).fill().map((_, index) => (
        <IoMdStarOutline key={index + fullStars} />
      ))}
    </StarsWrapper>
  );
}

export default Rating;
