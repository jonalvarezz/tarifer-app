import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import StoreContext from '../store/context';
import { setData } from '../store/actions';
import { fetchData } from '../apis/api';
import Tariff from './Tariff';

const List = styled.ul`
  padding: 0;
  width: 90%;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  list-style: none;
`;

function TariffList() {
  const { dispatch, list } = useContext(StoreContext);

  useEffect(() => {
    fetchData().then(data => {
      dispatch(setData(data));
    });
  }, []);

  return (
    <List>
      {list.map((tariff, index) => (
        <Tariff {...tariff} key={tariff.id} index={index} />
      ))}
    </List>
  );
}

export default TariffList;
