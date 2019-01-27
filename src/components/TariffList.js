import React from 'react';
import styled from 'styled-components';
import Tariff from './Tariff';

const List = styled.ul`
  padding: 0;
  width: 90%;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  list-style: none;
`;

const data = [
  { item: 'asdf' },
  { item: 'asdf' },
  { item: 'asdf' },
  { item: 'asdf' },
  { item: 'asdf' }
];

function TariffList() {
  return (
    <List>
      {data.map((obj, index) => (
        <Tariff key={obj.item} index={index} {...obj} />
      ))}
    </List>
  );
}

export default TariffList;
