import React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%
  background: linear-gradient(to top, white 60%, rgba(255, 255, 255, 0));
  padding: 60px 0 10px;
  text-align: center
  font-weight: bold;
  a {
    color: currentColor;
    padding: 0 10px;
    font-size: .8rem;
  }
`;

function Footer() {
  return (
    <Container>
      <a
        href="http://twitter.com/jonalvarezz"
        rel="noopener noreferrer"
        target="_blank"
      >
        @jonalvarezz
      </a>
      <a
        href="https://github.com/jonalvarezz/tarifer-app"
        rel="noopener noreferrer"
        target="_blank"
      >
        See source
      </a>
    </Container>
  );
}

export default Footer;
