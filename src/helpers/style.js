import styled from 'styled-components';

export const breakpoints = {
  m: 500,
  l: 700
};

export const M = styled.div`
  display: none;

  @media (min-width: ${breakpoints.m}px) {
    display: block;
  }
`;

export const L = styled.div`
  display: none;

  @media (min-width: ${breakpoints.l}px) {
    display: block;
  }
`;

export const OnlyS = styled.div`
  @media (min-width: ${breakpoints.m}px) {
    display: none;
  }
`;
