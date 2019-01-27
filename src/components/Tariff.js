import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.li`
  padding: 20px;
  border: 1px solid #ccc;
  margin-bottom: 1rem;
  position: relative;
  overflow: hidden;
`;

const Index = styled.span`
  position: absolute;
  top: -36px;
  left: 0;
  font-size: 90px;
  color: #f5f5f5;
  z-index: -1;
  font-weight: bold;
`;

const propTypes = {
  index: PropTypes.number
};

const Tariff = props => {
  return (
    <Container>
      <Index>{props.index}</Index>
      {props.item}
    </Container>
  );
};
Tariff.propTypes = propTypes;

export default Tariff;
