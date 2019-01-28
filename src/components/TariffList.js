import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import Spin from 'antd/lib/spin';
import StoreContext from '../store/context';
import { setData } from '../store/actions';
import { fetchData } from '../apis/api';

import Filters from './TariffFilters';
import Tariff from './Tariff';

const Spinner = styled.div`
  text-align: center;
  padding: 60px 0;
`;

const Container = styled.div`
  width: 90%;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
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
    <Container>
      <Filters />
      <List>
        {list.map((tariff, index) => (
          <Tariff {...tariff} key={tariff.id} index={index} />
        ))}
      </List>
    </Container>
  );
}

export default TariffList;
