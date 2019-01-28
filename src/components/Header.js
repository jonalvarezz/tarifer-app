import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  border-bottom: 2px solid #eee;
  text-align: center;
  margin-bottom: 3rem;
  img {
    width: 150px;
    height: auto;
  }
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  margin: 0;
  position: relative;
  text-transform: uppercase;
  letter-spacing: 10px;
  color: #797979;
`;

const LogoShape = styled.span`
  color: white;
  &:before {
    content: '';
    position: absolute;
    top: 6px;
    background: #ff8e00;
    width: 25px;
    height: 70%;
    z-index: -1;
    transform: translateX(-6px);
  }
`;

function Header() {
  return (
    <Container>
      <Logo>
        <LogoShape>T</LogoShape>arifer
      </Logo>
    </Container>
  );
}

export default Header;
