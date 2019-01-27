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

function Header() {
  return (
    <Container>
      <img src="verivox.png" alt="Verivox Logo" />
    </Container>
  );
}

export default Header;
