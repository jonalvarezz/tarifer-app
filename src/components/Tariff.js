import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from 'antd/lib/icon';
import { M, L, breakpoints, OnlyS } from '../helpers/style';

const Container = styled.li`
  padding: 20px;
  border: 1px solid #ccc;
  margin-bottom: 1rem;
  position: relative;
  overflow: hidden;
  transition: border-color 300ms;
  &:hover {
    border-color: #9c9c9c;
  }
`;

const Index = styled.span`
  position: absolute;
  top: 30%;
  transform: translateY(-50%);
  left: -2px;
  font-size: 90px;
  color: #f5f5f5;
  z-index: -1;
  font-weight: bold;
  pointer-events: none;
`;

const Wrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 150px 1fr 1fr;
  justify-content: space-between;
  align-items: center;
  @media (min-width: ${breakpoints.m}px) {
    grid-template-columns: 200px 1fr 1fr;
  }
  @media (min-width: ${breakpoints.l}px) {
    grid-template-columns: 170px 1fr 1fr 1fr;
  }
`;

const Title = styled.h3`
  margin: 0;
  padding: 0;
`;

const SpeedIcon = styled.div`
  margin-bottom: 10px;
  > div > p {
    margin-bottom: 0;
    font-weight: bold;
  }
  > i {
    padding-right: 7px;
  }
`;

const Benefits = styled.ul`
  margin: 0;
  padding: 0;
`;

const PriceContainer = styled.div`
  text-align: right;
`;

const Price = styled.p`
  font-weight: bold;
  text-align: right;
  font-size: 1.4rem;
  margin-bottom: 5px;
`;

const Button = styled.a`
  padding: 10px 14px;
  background: transparent;
  border: 1px solid #ff8e00;
  color: #ff8e00;
  display: inline-block;
  text-align: center;
  width: 100%;
  max-width: 160px;
  transition: all 150ms ease-in;

  &:hover {
    background: #ff8e00;
    border-color: transparent;
    color: white;
  }
`;

const ButtonMobile = styled(OnlyS)`
  margin-top: 10px;
  text-align: right;
`;

const propTypes = {
  index: PropTypes.number,
  id: PropTypes.string,
  name: PropTypes.string,
  download: PropTypes.number,
  upload: PropTypes.number,
  price: PropTypes.number,
  benefits: PropTypes.arrayOf(PropTypes.string)
};

function Tariff({ index, name, download, upload, price, benefits }) {
  return (
    <Container>
      <Index>{index}</Index>
      <Wrapper>
        <Title>{name}</Title>
        <div className="">
          <SpeedIcon>
            <L>
              <p>Download</p>
            </L>
            <Icon type="arrow-down" />
            <span>{download} Mbit/s</span>
          </SpeedIcon>
          <M>
            <SpeedIcon>
              <L>
                <p>Upload</p>
              </L>
              <Icon type="arrow-up" />
              <span>{upload} Mbit/s</span>
            </SpeedIcon>
          </M>
        </div>
        <L>
          <Benefits>
            {benefits.map(b => (
              <li key={b}>{b}</li>
            ))}
          </Benefits>
        </L>
        <PriceContainer>
          <Price>{price} €</Price>
          <M>
            <Button href="#" title={`See more details for ${name}`}>
              More details
            </Button>
          </M>
        </PriceContainer>
      </Wrapper>
      <ButtonMobile>
        <Button href="#" title={`See more details for ${name}`}>
          More details
        </Button>
      </ButtonMobile>
    </Container>
  );
}
Tariff.propTypes = propTypes;

export default Tariff;
