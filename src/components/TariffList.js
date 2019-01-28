import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import Spin from 'antd/lib/spin';
import StoreContext from '../store/context';
import { setData } from '../store/actions';
import { fetchData } from '../apis/api';
import Tariff from './Tariff';

const Spinner = styled.div`
  text-align: center;
  padding: 60px 0;
`;

const List = styled.ul`
  padding: 0;
  width: 90%;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  list-style: none;
`;

function TariffList() {
  const { dispatch, list, status } = useContext(StoreContext);

  useEffect(() => {
    fetchData().then(data => {
      dispatch(setData(data));
    });
  }, []);

  if (status !== 'fetched') {
    return (
      <Spinner>
        <Spin tip="Loading..." />
      </Spinner>
    );
  }

  return (
    <List>
      {list.map((tariff, index) => (
        <Tariff {...tariff} key={tariff.id} index={index} />
      ))}
    </List>
  );
}

export default TariffList;
