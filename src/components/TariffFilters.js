import React from 'react';
import PropTypes from 'prop-types';
import Input from 'antd/lib/input';
import Select from 'antd/lib/select';
import styled from 'styled-components';

const Search = Input.Search;

const Option = Select.Option;

const sorters = [
  { value: 'download', children: 'Download Speed' },
  { value: 'upload', children: 'Upload Speed' }
];
const SortersOptions = sorters.map(s => <Option {...s} key={s.value} />);

const Col = styled.div`
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15px;
  margin: 3rem 0 1rem;
  align-items: center;
  justify-content: space-between;

  span {
    font-weight: bold;
    white-space: nowrap;
    padding-right: 8px;
  }

  .ant-input-search .anticon-close-circle {
    padding-right: 5px;
  }
`;

const propTypes = {
  onSortChange: PropTypes.func,
  onSearchChange: PropTypes.func
};

function TariffFilters({ onSortChange, onSearchChange }) {
  return (
    <Container>
      <Col>
        <Search
          placeholder="Search tariff name"
          onChange={({ target }) => onSearchChange(target.value)}
          style={{ width: '100%', minWidth: '100px' }}
          allowClear
        />
      </Col>
      <Col>
        <span>Sort by: </span>
        <Select
          style={{ width: '100%' }}
          defaultValue="download"
          onChange={onSortChange}
        >
          {SortersOptions}
        </Select>
      </Col>
    </Container>
  );
}
TariffFilters.propTypes = propTypes;

export default TariffFilters;
